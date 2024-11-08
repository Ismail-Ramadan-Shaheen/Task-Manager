"use client"
import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import './Tasks.css';

export default function Tasks() {
    const [tasks, setTasks] = useState([
        { name: "Task one", completed: false },
        { name: "Task Two", completed: false }
    ]);
    const [completedTasks, setCompletedTasks] = useState([
      { name: "Task Three", completed: true },
      { name: "Task Four", completed: true }
  ]);
    const [taskState, setTaskState] = useState("incomplete");
    const [updateName, setUpdateName] = useState("");

    const handleFilter = (e) => {
        setTaskState(e.target.value);
    };

    const handleAddTask = (taskName) => {
        setUpdateName("");
        setTasks([...tasks, { name: taskName, completed: false }]);
    };

    const handleDone = (id) => {
        setCompletedTasks([...completedTasks,...tasks.filter((task,i)=> i==id)])
        setTasks(tasks.filter((task,i)=> i!=id))
    };

    const handleUpdate = (id) => {
      let task
      if(taskState === "completed"){
        task=completedTasks.find((v, i) => i === id)
      }else{
        task=tasks.find((v, i) => i === id)
      }
        setUpdateName(task.name);
        handleDelete(id);
    };

    const handleDelete = (id) => {
        if(taskState === "completed"){
          setCompletedTasks(completedTasks.filter((task,i)=>i!=id))
        }else{
          setTasks(tasks.filter((task,i)=>i!=id))
        }
    };

    return (
        <div className="task-manager">
            <div className="task-container">
                <header className="task-header">
                    <h1>Tasks</h1>
                    <AddTask handleAddTask={handleAddTask} updateName={updateName} />
                    <select className="task-filter" onChange={handleFilter} defaultValue="incomplete">
                        <option value="incomplete">Incomplete</option>
                        <option value="completed">Completed</option>
                    </select>
                </header>
                <main className="task-list">
                    {taskState === "completed"?
                    completedTasks.map((task, i) => (
                        <Task name={task.name} completed={true} key={i} id={i} handleDone={handleDone} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                    ))
                    :
                    tasks.map((task, i) => (
                      <Task name={task.name} completed={false} key={i} id={i} handleDone={handleDone} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                  ))
                    }
                </main>
            </div>
        </div>
    );
}
