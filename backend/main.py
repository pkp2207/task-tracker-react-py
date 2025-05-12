from fastapi import FastAPI, HTTPException
from typing import List
from models import Task
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory task list
tasks: List[Task] = []

@app.get("/api/tasks", response_model=List[Task])
def get_tasks():
    print("Current tasks:", tasks)  # Log to see the tasks in the console
    return tasks

@app.post("/api/tasks", response_model=Task)
def add_task(task: Task):
    tasks.append(task)
    return task

@app.put("/api/tasks/{task_id}", response_model=Task)
def mark_task_completed(task_id: int):
    for task in tasks:
        if task.id == task_id:
            task.completed = True
            return task
    raise HTTPException(status_code=404, detail="Task not found")
