import React from "react";
import TodoItem from "./TodoItem";

// Define the TodoList functional component that represents the list of tasks
function TodoList({tasks, completeTask, removeTask}){
    return(
        // Container for the entire Todo List
        <div className="todo-list">
            {/* Map over the tasks array to create TodoItem components */}
            {tasks.map((task, index) => (
                // TodoItem component representing an individual task
                <TodoItem
                    key={index} // Unique key for each TodoItem component
                    index={index}
                    task={task}
                    completeTask={completeTask}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
}

// Export the TodoList component to make it available for use in other parts of the application
export default TodoList;