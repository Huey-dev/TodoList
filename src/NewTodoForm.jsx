import React from 'react'
import { useState } from 'react'

export function NewTodoForm ({onSubmit}) {

 // state for our input will be set to an empty string
  const [newItem, setNewItem]= useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return
        onSubmit(newItem)

        // clear input after adding todo
        setNewItem('')
    }

    return (
        <>
            {/* form for our application( input and add-btn) */}
            <form onSubmit={handleSubmit} className="new-todo-form">
                <div className="form-row">
                    <label htmlFor="Todo-label">New Item</label>
                    <input 
                    // set value of input to whatever we type in the input bar
                        value={newItem} //the current value is an empty string
                        onChange={e => setNewItem(e.target.value)} //whenever there is change in input, get new value of input and set that value as new item rerun component and set value to whatever youve typed in input. we watch for changes in the input, When the input value changes, update the 'newItem' state with the new value
                        type="text" 
                        id='item'
                    />
                </div>
                <button className="btn">Add</button>
            </form>
        </>    
    )
}
