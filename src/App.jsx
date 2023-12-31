import React, { useState, useEffect } from 'react'
import './index.css'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

const App = () => {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')   //get infromation from localstorage
    if(localValue == null) return [] //
    return JSON.parse(localValue)
  }) 

  useEffect(() => {
    // store in localstorage anytime our todos are updated
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])
  

  // add(update)todo
  function addTodo(title) {
    setTodos(currentTodos => {
      return [  
        ...currentTodos, 
        {id: crypto.randomUUID(), 
        title, 
        completed: false},
      ]
    })
  }

  // edit todo
  function editTodo (id, newTitle) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, title: newTitle}
        }
        return todo
      })
    })
  }

 
// completed checkmark
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        // check for which todo is being changed andreturn updated version
        if (todo.id === id) {
          return{...todo, completed} 
        }

        return todo
      })
    })
  }
// delete todos
  function deleteTodos(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }
 
  return (
    <>
    {/* our form should be able to add a todo */}
      <NewTodoForm onSubmit={addTodo} />
      {/* header for Todo list */}
      <h1 className="header">Todo List</h1> 
      <TodoList todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodos={deleteTodos} 
        editTodo={editTodo}
      />
    </>
  )
}

export default App
