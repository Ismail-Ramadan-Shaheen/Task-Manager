"use client"
import React, { useState, useEffect } from 'react';
import './AddTask.css'

export default function AddTask({ handleAddTask, updateName }) {
    const [name, setName] = useState(updateName);
    
    const handleChange = (e) => {
        setName(e.target.value);
    };
    
    useEffect(() => {
        setName(updateName);
    }, [updateName]);
    
    return (
        <div className="add-task-container">
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={handleChange} 
                className="task-input" 
                placeholder="Enter task name" 
            />
            <button 
                onClick={() => handleAddTask(name)} 
                className="task-button add"
            >
                Add
            </button>
        </div>
    );
}
