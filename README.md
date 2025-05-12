# Task Tracker

A modern task management application built with React (TypeScript) and FastAPI.

## Features

- Add new tasks
- View task list
- Mark tasks as completed
- Clean and responsive UI

## Tech Stack

- Frontend: React with TypeScript
- Backend: FastAPI (Python)
- State Management: React Hooks

## Prerequisites

- Node.js (for frontend)
- Python 3.8+ (for backend)
- npm or yarn (package manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/pkp2207/task-tracker-react-py.git
cd task-tracker
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
pip install -r requirements.txt
```

## Running the Application

1. Start the backend server:
```bash
cd backend
python -m uvicorn main:app --reload
```

2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
task-tracker/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── types/      # TypeScript types
│   │   └── App.tsx     # Main application component
│   └── public/         # Static assets
└── backend/           # FastAPI backend
    ├── main.py        # API endpoints
    └── models.py      # Data models
```

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Add a new task
- `PUT /api/tasks/{id}` - Mark task as completed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
