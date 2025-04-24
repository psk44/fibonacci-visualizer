# Fibonacci Visualizer

## Overview

**Fibonacci Visualizer** is an interactive, full-stack web application designed to visually explore the Fibonacci sequence and its mathematical beauty. The project demonstrates mastery in Python (Flask), JavaScript, Docker, and modern web development practices. It features dynamic sequence generation, multiple visualization modes (including a spiral), and mathematical insights, all accessible via a clean, responsive web interface.

This project was created to:
- Provide an educational and visually engaging way to understand the Fibonacci sequence.
- Serve as a showcase for advanced coding, containerization, and deployment skills.
- Offer a modular codebase for future tinkering, experimentation, and extension.


## Features

- **Dynamic Fibonacci Sequence Generation:** Specify the number of terms and instantly see the sequence.
- **Multiple Visualizations:** View the sequence as a list, bar/line chart, or a geometric spiral.
- **Mathematical Insights:** See golden ratio approximations and other properties.
- **Responsive UI:** Works on desktop and mobile.
- **Containerized Deployment:** Easily run the app anywhere with Docker Compose.
- **Extensible Codebase:** Modular structure for easy hacking and extension.


## Project Structure

```
fibonacci-visualizer/
├── backend/
│   ├── app/
│   │   ├── __init__.py         # Flask app factory
│   │   ├── routes.py           # API endpoints (e.g., /api/fibonacci)
│   │   └── utils.py            # Fibonacci logic and math utilities
│   ├── tests/                  # Unit tests for backend
│   ├── requirements.txt        # Python dependencies
│   ├── Dockerfile              # Backend container config
│   └── run.py                  # Backend entry point
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css       # Main styles
│   │   └── js/
│   │       └── main.js         # Visualization and UI logic
│   ├── templates/
│   │   └── index.html          # Main HTML page
│   └── Dockerfile              # Frontend container config
├── docker-compose.yml          # Orchestration for backend/frontend
├── .gitignore                  # Files to ignore in git
└── README.md                   # This file
```

## How It Works

### Backend (`/backend`)
- **Flask API** serves Fibonacci sequences and mathematical data at `/api/fibonacci`.
- **`utils.py`** contains the core logic for generating sequences and calculating ratios.
- **`routes.py`** defines REST endpoints for frontend consumption.
- **`tests/`** includes unit tests for reliability.
- **Dockerfile** builds a lightweight Python container.

### Frontend (`/frontend`)
- **`index.html`** is the main entry point, loading the UI and scripts.
- **`main.js`** handles user input, fetches data from the backend, and renders visualizations (charts, spiral, etc.).
- **`style.css`** provides responsive, modern styling.
- **Dockerfile** uses Nginx to serve static files.

### Orchestration
- **`docker-compose.yml`** launches both backend and frontend, mapping ports for local access.


## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- (Optional) Python 3.x for local development

### Quick Start (with Docker)

```bash
git clone https://github.com/psk44/fibonacci-visualizer.git
cd fibonacci-visualizer
docker-compose up --build
```

- Visit [http://localhost:8080](http://localhost:8080) in your browser.

### Local Development (without Docker)

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python run.py
```
**Frontend:**
- Open `frontend/templates/index.html` directly in your browser, or serve with a simple HTTP server:
```bash
cd frontend
python -m http.server 8080
```

## Customization & Tinkering

- **Change Visualization:** Edit `frontend/static/js/main.js` to add new chart types or spiral styles.
- **Add Math Features:** Extend `backend/app/utils.py` for more mathematical properties.
- **Styling:** Modify `frontend/static/css/style.css` for a new look.
- **API Enhancements:** Add new endpoints in `backend/app/routes.py`.
- **Testing:** Add or modify tests in `backend/tests/`.


## Troubleshooting

- **White Screen:** Check browser console for JS errors and ensure both backend and frontend containers are running.
- **API Errors:** Make sure ports in `docker-compose.yml` and frontend JS match.
- **Port Conflicts:** Change ports in `docker-compose.yml` if needed.


## Author

Created by P  
Inspired by the beauty of mathematics and the power of code.


## Contributing

Pull requests and suggestions are welcome!  
Open an issue or fork the repo to help me to get it working in the most efficient way possible!

