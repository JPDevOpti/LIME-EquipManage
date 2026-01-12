# Análisis de Estructura de Datos para Equipos (F-147)

Basado en el análisis del archivo `F-147 INVENTARIO EQUIPOS BIOMÉDICOS, INDUSTRIALES Y GASES V4_Sede Prado(LIME Central).csv`, se han identificado los siguientes campos necesarios para la gestión completa de la hoja de vida de los equipos.

## Estructura de Datos Recomendada

A continuación se detallan los campos identificados, agrupados por categorías lógicas.

### 1. Identificación y Ubicación
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Proceso | `process_owner_area` | String | Área o proceso al que pertenece. |
| Nombre del equipo | `equipment_name` | String | Nombre genérico del equipo. |
| Código de inventario interno... | `inventory_code` | String | Identificador único interno (Placa). |
| Código IPS | `ips_code` | String | Código asignado por la IPS. |
| Código ECRI | `ecri_code` | String | Código de clasificación internacional ECRI. |
| Ubicación física | `location_site` | String | Sede o lugar físico específico. |
| Responsable... | `responsible_person` | String | Nombre de la persona a cargo. |

### 2. Especificaciones y Clasificación
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Marca | `brand_name` | String | Fabricante del equipo. |
| Modelo | `model_name` | String | Modelo específico. |
| Serie | `serial_number` | String | Número de serie único. |
| Clasificación según eje misional... | `functional_classification` | Enum | Docencia, Investigación, Extensión. |
| Clasificación IPS | `technical_classification` | Enum | IND, BIO, Gases. |
| Clasificación por riesgo | `risk_classification` | Enum | Clase I, IIa, IIb, III. |
| Registro Invima... | `invima_registration_code` | String | Número de registro sanitario. |
| Tiempo de vida útil | `estimated_lifespan_years` | Number | Vida útil estimada en años. |

### 3. Adquisición y Propiedad
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Propietario del equipo | `owner_entity` | String | Entidad dueña (ej. UdeA). |
| NIT | `owner_nit` | String | NIT del propietario. |
| Proveedor equipo | `supplier_name` | String | Empresa proveedora. |
| Antigüedad del eq. (F. adquisición) | `acquisition_date` | Date | Fecha de compra. |
| Fecha de fabricación | `manufacture_date` | Date | Fecha de fabricación. |
| Forma de adquisición | `acquisition_method` | String | Compra, Comodato, Donación. |
| Tipo de documento | `acquisition_doc_type` | String | Factura, Acta. |
| Número de documento | `acquisition_doc_number` | String | Número de factura o acta. |
| Valor de compra | `purchase_cost` | Currency | Valor monetario de adquisición. |
| Está en garantía (Si/No) | `is_under_warranty` | Boolean | Flag de garantía activa. |
| Fecha finalización garantía | `warranty_expiry_date` | Date | Fecha vencimiento garantía. |

### 4. Documentación Asociada (Checklist)
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Hoja de vida | `has_cv_record` | Boolean | Tiene hoja de vida. |
| Registro de importación | `has_import_declaration` | Boolean | Tiene manifiesto de importación. |
| Manual operación (Esp) | `has_operation_manual_es` | Boolean | Manual operación en español. |
| Manual servicio mto (Esp) | `has_service_manual_es` | Boolean | Manual servicio en español. |
| Guía Rápida de uso | `has_quick_guide` | Boolean | Tiene guía rápida. |
| Instructivo de manejo rápido... | `has_usage_instructions` | Boolean | Tiene instructivo adicional. |
| Protocolo Mto Prev. | `has_preventive_protocol` | Boolean | Tiene protocolo de mantenimiento. |

### 5. Planificación de Mantenimiento y Metrología
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Frecuencia metrológica fabricante | `manufacturer_rec_frequency` | String | Recomendación fabricante. |
| Mantenimiento Si/No | `requires_maintenance` | Boolean | Requiere mantenimiento. |
| Frecuencia anual mantenimiento | `maintenance_frequency_annual` | Number | Veces al año. |
| Calibración Si/No | `requires_calibration` | Boolean | Requiere calibración. |
| Frecuencia anual calibración | `calibration_frequency_annual` | Number | Veces al año. |

### 6. Especificaciones Técnicas y Variables Metrológicas
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Magnitud | `measured_magnitude` | String | Magnitud física. |
| Rango del equipo | `measurement_range` | String | Rango total. |
| Resolución | `resolution_val` | String | Resolución. |
| Rango de trabajo | `working_range` | String | Rango operativo. |
| Error máximo permitido | `max_permitted_error` | String | Tolerancia de error. |

### 7. Condiciones de Instalación y Funcionamiento
| Campo CSV Original | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Voltaje | `supply_voltage` | String | Voltaje requerido. |
| Corriente | `supply_current` | String | Corriente requerida. |
| Humedad relativa | `operating_humidity_range` | String | Rango humedad. |
| Temperatura | `operating_temp_range` | String | Rango temperatura. |
| Dimensiones | `dimensions_lwh` | String | Dimensiones (Largo-Ancho-Alto). |
| Peso | `net_weight` | String | Peso neto. |
| Otros | `technical_observations` | Text | Observaciones técnicas. |

### 8. Registro Histórico Metrológico
De acuerdo con el formato "REGISTRO HISTÓRICO METROLÓGICO", se requiere una estructura de detalle (uno a muchos) para almacenar cada evento asociado al equipo.

| Campo en Imagen/Tabla | Nombre de Variable Sugerido | Tipo de Dato | Descripción |
|---|---|---|---|
| Fecha | `maintenance_date` | Date | Fecha del evento. |
| N° Informe | `report_code` | String | Código del informe. |
| Actividad (MP, MC, C) | `maintenance_type_code` | Enum | 'MP', 'MC', 'C'. |
| Proveedor | `service_provider_name` | String | Nombre del proveedor. |
| Observaciones | `maintenance_observations` | Text | Observaciones del evento. |

---

> [!NOTE]
> Este análisis cubre la totalidad de las columnas del archivo CSV identificado. Para la implementación en base de datos, se recomienda normalizar los campos de texto repetitivo (como `Marca`, `Proveedor`, `Ubicación`) en tablas de catálogo separadas para mantener la integridad de los datos.
