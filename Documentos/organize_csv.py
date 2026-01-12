import csv
import io
import sys
from datetime import datetime

# File paths
INPUT_FILE = "F-147 INVENTARIO EQUIPOS BIOMÉDICOS, INDUSTRIALES Y GASES V4_Sede Prado(LIME Central)(1).csv"
OUTPUT_FILE = "inventario_limpio.csv"

# Column Mapping based on analisis_campos_equipos.md
COLUMN_MAPPING = {
    "Proceso": "process_owner_area",
    "Nombre del equipo": "equipment_name",
    "Código de inventario interno del laboratorio y/o asignado por UdeA": "inventory_code",
    "Código IPS": "ips_code",
    "Código ECRI": "ecri_code",
    "Responsable del proceso en el que interviene el equipo o inventario UdeA": "responsible_person",
    "Ubicación física": "location_site",
    "Marca": "brand_name",
    "Modelo": "model_name",
    "Serie": "serial_number",
    "Clasificación según eje misional (Docencia y/o Investigación y/o Extensión)": "functional_classification",
    "Clasificación IPS (IND-BIO-Gases)": "technical_classification",
    "Clasificación por riesgo": "risk_classification",
    "Registro Invima/Permiso comercialización/No Requiere": "invima_registration_code",
    "Tiempo de vida útil": "estimated_lifespan_years",
    "Antigüedad del eq. (F. adquisición)": "acquisition_date",
    "Propietario del equipo": "owner_entity",
    "Fecha de fabricación": "manufacture_date",
    "NIT": "owner_nit",
    "Proveedor equipo": "supplier_name",
    "Está en garantía (Si/No)": "is_under_warranty",
    "Fecha finalización garantía": "warranty_expiry_date",
    "Forma de adquisición": "acquisition_method",
    "Tipo de documento": "acquisition_doc_type",
    "Número de documento": "acquisition_doc_number",
    "Valor de compra": "purchase_cost",
    # Checklist fields
    "Hoja de vida": "has_cv_record",
    "Registro de importación": "has_import_declaration",
    "Manual operación (Esp)": "has_operation_manual_es",
    "Manual servicio mto (Esp)": "has_service_manual_es",
    "Guía Rápida de uso": "has_quick_guide",
    "Instructivo de manejo rápido de equipos": "has_usage_instructions",
    "Protocolo Mto Prev.": "has_preventive_protocol",
    # Maintenance & Metrology
    "Frecuencia metrológica fabricante": "manufacturer_rec_frequency",
    "Mantenimiento Si/No": "requires_maintenance",
    "Frecuencia anual mantenimiento": "maintenance_frequency_annual",
    "Calibración Si/No": "requires_calibration",
    "Frecuencia anual calibración": "calibration_frequency_annual",
    # Technical Specs
    "Magnitud": "measured_magnitude",
    "Rango del equipo": "measurement_range",
    "Resolución": "resolution_val",
    "Rango de trabajo": "working_range",
    "Error máximo permitido": "max_permitted_error",
    "Voltaje": "supply_voltage",
    "Corriente": "supply_current",
    "Humedad relativa": "operating_humidity_range",
    "Temperatura": "operating_temp_range",
    "Dimensiones": "dimensions_lwh",
    "Peso": "net_weight",
    "Otros": "technical_observations"
}

def clean_boolean(val):
    if not val:
        return False
    s = str(val).lower().strip()
    return s in ['si', 'sí', 'yes', 'true', '1']

def clean_date(val):
    if not val:
        return ""
    val_str = str(val).strip()
    if val_str.lower() in ['ni', 'nt', 'n/a', 'pendiente', '']:
        return ""
    
    # Try parsing common formats
    formats = ['%d/%m/%Y', '%Y-%m-%d', '%d-%m-%Y', '%Y/%m/%d']
    for fmt in formats:
        try:
            return datetime.strptime(val_str, fmt).strftime('%Y-%m-%d')
        except ValueError:
            continue
    # If parsing fails, return original or empty? Let's return original string to be safe or empty if strictly validating.
    # For now, return original if it looks like a date/string but validation failed
    return val_str

def normalize_text(val):
    if not val:
        return ""
    return str(val).strip()

def main():
    print("Reading CSV file...")
    
    encodings = ['utf-8', 'latin1']
    content = None
    
    for enc in encodings:
        try:
            with open(INPUT_FILE, 'r', encoding=enc) as f:
                # Read specific lines to skip metadata
                for _ in range(8):
                    next(f)
                content = f.read()
            break
        except UnicodeDecodeError:
            continue
            
    if content is None:
        print("Failed to read file with supported encodings")
        return

    # Use io.StringIO to treat string as file for csv module
    f_io = io.StringIO(content)
    
    # Use DictReader with semicolon delimiter
    reader = csv.DictReader(f_io, delimiter=';')
    
    # Prepare output data
    cleaned_rows = []
    
    # Get the target field names order from the mapping values
    fieldnames = list(COLUMN_MAPPING.values())
    
    print("Processing rows...")
    for row in reader:
        new_row = {}
        for original_col, target_col in COLUMN_MAPPING.items():
            # Get original value, default to empty string
            val = row.get(original_col, '')
            
            # Apply cleaning based on field type inference (simplified)
            
            # Boolean fields
            if target_col in [
                'is_under_warranty', 'has_cv_record', 'has_import_declaration', 
                'has_operation_manual_es', 'has_service_manual_es', 'has_quick_guide',
                'requires_maintenance', 'requires_calibration'
            ]:
                new_row[target_col] = clean_boolean(val)
                
            # Date fields
            elif target_col in ['acquisition_date', 'manufacture_date', 'warranty_expiry_date']:
                new_row[target_col] = clean_date(val)
                
            # Enums/Text
            elif target_col == 'technical_classification': # BIO/IND
                 s = normalize_text(val).upper()
                 if s == 'NAN': s = ''
                 new_row[target_col] = s
            elif target_col == 'risk_classification': 
                 new_row[target_col] = normalize_text(val)
            else:
                new_row[target_col] = normalize_text(val)
        
        cleaned_rows.append(new_row)

    print(f"Exporting {len(cleaned_rows)} rows to {OUTPUT_FILE}...")
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(cleaned_rows)
        
    print("Done!")

if __name__ == "__main__":
    main()
