import React from "react"
import { TodoItem } from "./TodoItem"
export function TodoList ({todos, toggleTodo, deleteTodos, editTodo}) {
   return (
    <ul className="todo-list">
        {/* when theres no todos */}
        {todos.length === 0 && 'No todos'}
        {/* loop through todos and render them oout */}
        {todos.map(todo => {
            return (
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodos={deleteTodos} editTodo={editTodo}/>
            )
        })}
    </ul>
    )
}
