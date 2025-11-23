#!/bin/zsh
# Script de control para el frontend Next.js de EquipManage

set -e

ROOT_DIR=$(cd "$(dirname "$0")" && pwd)
FRONTEND_DIR="${ROOT_DIR}/frontend"
FRONTEND_PORT=${FRONTEND_PORT:-3000}
LOG_FILE="${TMPDIR:-/tmp}/equipmanage-frontend.log"
PID_FILE="${TMPDIR:-/tmp}/equipmanage-frontend.pid"

ensure_prerequisites() {
  if ! command -v node >/dev/null 2>&1; then
    echo "node no está instalado. Instálalo antes de continuar."
    exit 1
  fi
  if ! command -v npm >/dev/null 2>&1; then
    echo "npm no está instalado. Instálalo antes de continuar."
    exit 1
  fi
}

ensure_project() {
  if [ ! -d "$FRONTEND_DIR" ]; then
    echo "No se encontró la carpeta frontend en ${FRONTEND_DIR}."
    exit 1
  fi
}

ensure_dependencies() {
  if [ ! -d "${FRONTEND_DIR}/node_modules" ]; then
    echo "Instalando dependencias del frontend..."
    (cd "$FRONTEND_DIR" && npm install)
  fi
}

kill_port() {
  local port=$1
  local pids
  pids=$(lsof -ti:"$port" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    echo "Liberando puerto ${port}..."
    echo "$pids" | xargs kill -9 2>/dev/null || true
    sleep 1
  fi
}

start_frontend() {
  ensure_prerequisites
  ensure_project
  ensure_dependencies
  kill_port "$FRONTEND_PORT"

  echo "Iniciando frontend en modo desarrollo (puerto ${FRONTEND_PORT})..."
  (
    cd "$FRONTEND_DIR"
    npm run dev -- --hostname 0.0.0.0 --port "$FRONTEND_PORT" >"$LOG_FILE" 2>&1 &
    echo $! >"$PID_FILE"
  )
  sleep 2
  echo "Frontend disponible en http://localhost:${FRONTEND_PORT}"
  echo "Puedes revisar el log en ${LOG_FILE}"
}

stop_frontend() {
  if [ -f "$PID_FILE" ]; then
    local pid
    pid=$(cat "$PID_FILE")
    if ps -p "$pid" >/dev/null 2>&1; then
      echo "Deteniendo proceso ${pid}..."
      kill "$pid" 2>/dev/null || true
      sleep 1
    fi
    rm -f "$PID_FILE"
  fi
  kill_port "$FRONTEND_PORT"
  if [ -f "$LOG_FILE" ]; then
    rm -f "$LOG_FILE"
  fi
  echo "Frontend detenido."
}

status_frontend() {
  echo "Estado del frontend Next.js"
  if lsof -Pi :"$FRONTEND_PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "Servidor escuchando en el puerto ${FRONTEND_PORT}."
  else
    echo "Servidor detenido."
  fi
  if [ -f "$LOG_FILE" ]; then
    echo "Log disponible en ${LOG_FILE}."
  fi
}

show_help() {
  cat <<EOF
Script de control frontend EquipManage

Comandos disponibles:
  ./run.sh start   - Inicia el servidor de desarrollo
  ./run.sh stop    - Detiene el servidor de desarrollo
  ./run.sh status  - Muestra el estado actual del frontend
  ./run.sh help    - Muestra esta ayuda
EOF
}

COMMAND=${1:-help}
shift || true

case "$COMMAND" in
  start)
    start_frontend "$@"
    ;;
  stop)
    stop_frontend "$@"
    ;;
  status)
    status_frontend "$@"
    ;;
  help)
    show_help
    ;;
  *)
    echo "Comando no reconocido: $COMMAND"
    show_help
    exit 1
    ;;
esac

