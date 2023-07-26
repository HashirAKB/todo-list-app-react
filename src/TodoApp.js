import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp(){
    const [tasks, setTask] = useState([]);

    //Fn to add new task.
    const addTask = (task) => {
        // Using setTasks to update the tasks state by adding a new task object
        // The spread operator (...) creates a new array with the existing tasks and the new task
        // The new task object contains the 'text' property (task parameter) and 'completed' property (default: false)
        setTask([...tasks, {text: task, completed: false}]);
        console.log(tasks);
    };

    //Fn to mark a task as completed.
    const completeTask = (index) =>{
        // Create a copy of the existing tasks array to avoid direct mutation
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        // Update the state with the new array containing the updated task
        setTask(updatedTasks);
    };

    //Fn to remove a task.
    const removeTask = (index) =>{
        const updatedTasks = [...tasks];
        // Remove the task(1 item as => "(index, 1)") at the given index from the copied array
        updatedTasks.splice(index, 1);
        setTask(updatedTasks);
    };

    useEffect(() => {
        // This function will be called each time 'tasks' changes
        console.log("Updated tasks:", tasks);
      }, [tasks]);

    return (
        <div>
            <h1>My Todo List</h1>
            <TodoForm addTask={addTask}/>
            <TodoList tasks={tasks} completeTask={completeTask} removeTask={removeTask}/>
        </div>
    );

}

export default TodoApp;