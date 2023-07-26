import React, {useState} from "react";

// TodoForm component renders a form to add new tasks to the Todo List.
// It uses the 'task' state to track user input and calls the 'addTask' function
// (a prop received from the parent component) to add new tasks when the form is submitted.
function TodoForm({addTask}) {
    const [task, setTasks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //Goto comment 4.0 below
        if(task.trim() !== ''){
            addTask(task);
            setTasks('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        <input
        type = 'text'
        value = {task} //Goto comment 2.0 below
        onChange={(e) => { //Goto comment 3.0 below
            console.log(e.target); // Console log the event object
            setTasks(e.target.value);}} //Goto comment 1.0 below
        placeholder="Add a new task.."
        />
        <button type="submit">Add Task</button>
        </form>
    )

}
export default TodoForm;

/*
Comments:

1.0: setTasks is not directly responsible for adding tasks to the list. Instead, it updates the task state with the value entered by the user in the input field.

The process of adding tasks to the list happens in the handleSubmit function, which is called when the user submits the form. Let's break down the process step by step:

When the user types or modifies the text in the input field, the onChange event is triggered.

The onChange event handler, defined as an inline arrow function, logs the event object e.target to the console. This allows you to see the event details, including the value property, as the user types or modifies the input field.

The onChange event handler also calls setTasks(e.target.value). This updates the task state with the current value entered by the user in the input field.

When the user submits the form (by clicking the "Add Task" button or pressing Enter), the handleSubmit function is called.

In the handleSubmit function, e.preventDefault() is used to prevent the default form submission behavior (page reload), ensuring that the task is added without reloading the page.

The if condition checks if the task state is not empty and does not contain only whitespace. If the input is not empty, it proceeds to the next step.

The addTask function, which is received as a prop from the parent component, is called with the current value of the task state. This function is responsible for adding the new task to the list of tasks.

After calling addTask(task), the setTasks('') is used to reset the task state to an empty string, clearing the input field after the task has been added.

2.0: 
value={task}:
This sets the value attribute of the input field to the current value of the task state variable. In React, the value attribute is used to control the input field's value and keep it in sync with the component's state.
Since task is the state variable that holds the value of the input field, this ensures that the input field displays the same value as the task state.

3.0:
onChange={(e) => setTasks(e.target.value)}:
The onChange attribute is an event handler that is called whenever the value of the input field changes. It listens for changes in the input field's value.
When the user types or modifies the input, the onChange event is triggered.
The (e) => setTasks(e.target.value) is an inline arrow function that updates the task state with the new value entered by the user.
e.target.value represents the new value of the input field when the change event occurs. It captures the text entered by the user in the input field.
The setTasks function is called with the new value (e.target.value) to update the state. When the state is updated, React will re-render the component, and the updated value will be reflected in the input field.

4.0:
e.preventDefault() is a method used to prevent the default behavior of an event in JavaScript. In the context of a React form, it is often used in event handlers to prevent the default form submission behavior, which is to reload the page when the form is submitted.

When you submit an HTML form, the browser's default behavior is to send the form data to the server, causing a page refresh or redirect. In single-page applications like those built with React, you generally want to handle form submissions without triggering a page reload, as this can disrupt the user experience and reset the application state.

Using e.preventDefault() in the event handler allows you to intercept the form submission event and prevent the default behavior. This way, you can handle the form data and perform any necessary actions, such as updating the application state or making API calls, without navigating away from the current page.
 */