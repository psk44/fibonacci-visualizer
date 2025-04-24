# check-ports.sh
#!/bin/bash

check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        return 1
    else
        return 0
    fi
}

# Array of potential port pairs (host:container)
backend_ports=("5050:5000" "5051:5000" "5052:5000")
frontend_ports=("8080:80" "8081:80" "8082:80")

# Find available backend port
for backend_port in "${backend_ports[@]}"; do
    host_port=$(echo $backend_port | cut -d: -f1)
    if check_port $host_port; then
        export BACKEND_PORT=$backend_port
        break
    fi
done

# Find available frontend port
for frontend_port in "${frontend_ports[@]}"; do
    host_port=$(echo $frontend_port | cut -d: -f1)
    if check_port $host_port; then
        export FRONTEND_PORT=$frontend_port
        break
    fi
done

# Generate docker-compose override file
cat > docker-compose.override.yml <<EOF
version: '3.8'
services:
  backend:
    ports:
      - "${BACKEND_PORT}"
  frontend:
    ports:
      - "${FRONTEND_PORT}"
EOF

# Start the services
docker-compose up --builddocker-compose down