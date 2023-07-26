import React from "react";

// Define the TodoItem functional component that represents an individual task
function TodoItem({task, index, completeTask, removeTask}){
    const className = `todo-item ${task.completed ? 'completed' : ''}`;
    console.log(className); // Console log the complete class name
    return (
        // JSX code for rendering the TodoItem component
        // Container for an individual task, with a dynamic class based on completion status
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            
            {/* Display the text of the task */}
            <span>{task.text}</span>
            <div>
                {/* Container for 'Complete' and 'Remove' buttons */}
                <button onClick={() => completeTask(index)}>Complete</button>
                <button onClick={() => removeTask(index)}>Remove</button>
            </div>
        </div>
    );
}
// Export the TodoItem component to make it available for use in other parts of the application
export default TodoItem;