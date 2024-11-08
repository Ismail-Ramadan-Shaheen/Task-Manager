"use client"
import React from 'react';
import './Task.css'

export default function Task({ name, completed, id, handleDone, handleUpdate, handleDelete }) {
    console.log(id)
    return (
        <div className="task">
            <p className={completed ? "task-completed" : ""}>{name}</p>
            <div className="task-buttons">
                {!completed && <button className="task-button done" onClick={() => handleDone(id)}>Done</button>}
                <button className="task-button update" onClick={() => handleUpdate(id)}>Update</button>
                <button className="task-button delete" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
}
