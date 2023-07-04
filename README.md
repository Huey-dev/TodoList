npm create vite app@latest

# Todo List App
#### A simple web-based Todo List application built with React.
## Table of Contents
#### Introduction
#### Features
#### Installation
#### Usage
#### Contributing
#### License
## Introduction
#### The Todo List App is a basic application that allows users to create and manage their daily tasks or to-do items. It provides a user-friendly interface for adding new tasks, marking tasks as completed, and deleting tasks. The app is built using React, making it highly interactive and responsive.
## Features
#### 1. Add new tasks
#### When a user enters a title for a new task and clicks the "Add" button, the NewTodoForm component handles the form submission.
#### The addTodo function in the App component is called, which updates the list of todos stored in the state by appending the new task.
#### The TodoList component re-renders with the updated list of todos, and the new task is displayed on the screen.
#### 2. Mark tasks as completed
#### Each task in the TodoList component is rendered as a TodoItem component.
#### When a user checks the checkbox next to a task, the toggleTodo function in the App component is called with the task's ID and the new completion status.
#### The toggleTodo function updates the completion status of the corresponding task in the list of todos.
#### The TodoList component re-renders with the updated completion status, reflecting the change on the screen.
#### 3. Delete tasks
#### Each task in the TodoList component is rendered with a "Delete" button.
#### When a user clicks the "Delete" button next to a task, the deleteTodos function in the App component is called with the task's ID.
#### The deleteTodos function filters out the task with the matching ID from the list of todos, effectively removing it.
#### The TodoList component re-renders without the deleted task, and the task disappears from the screen.
#### 4. Local storage
#### The app utilizes the browser's local storage to persist the list of todos even after a page refresh or closure.
#### When the App component mounts, it retrieves the stored todos from local storage (if any) and initializes the state with them.
#### The useEffect hook is used to listen for changes in the todos state and update the local storage accordingly, ensuring that the todos are always up to date.
## Installation
#### To run the Todo List App locally on your machine, follow these steps:

#### Ensure that you have Node.js installed on your system.

#### Clone this repository to your local machine using the following command:

#### bash
#### Copy code
#### git clone https://github.com/your-username/todo-list-app.git
#### Navigate to the project directory:

#### bash
#### Copy code
#### cd todo-list-app
#### Install the required dependencies:
#### Copy code
#### npm install
## Usage
#### Once you have completed the installation steps, you can run the Todo List App locally by executing the following command:

#### sql
#### Copy code
#### npm run dev
#### This will start the development server and open the app in your default browser. You can now interact with the app, add new tasks, mark tasks as completed, and delete tasks.

## Contributing
#### Contributions are welcome! If you would like to contribute to this project, please follow these steps:

### Fork the repository
### Create a new branch for your feature or bug fix.
### Make the necessary modifications.
### Commit and push your changes to your forked repository.
### Submit a pull request to the main repository.
## License
### This project is licensed under the MIT License.

