import React, { useState } from "react"
export function TodoItem({completed, id, title, toggleTodo, deleteTodos, editTodo}) {

    const [editing, setEditing] = useState(false)
    

    const handleEditClick = () => {
        setEditing(true);
    }

    const handleUpdateClick = (e) => {
        const newTitle = e.target.innerText.trim()
        if (newTitle !== "") {
          editTodo(id, newTitle); // Call the editTodo function from props
        }
        setEditing(false);
    }

    return (
        <li>   
            {editing ? (
                <>
                <input type="checkbox" 
                checked={completed} 
                onChange={(e) => toggleTodo(id, e.target.checked)} />
                <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={handleUpdateClick}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        e.target.blur();
                    }
                    }}
                >
                    {title}
                </span>
                </>
          ) : (

            <>
            <label>
                {/* call toggleTodo when checked */}
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodos(id)}
                className="btn btn-danger">Delete
            </button>
            <button 
                onClick={handleEditClick} 
                className="btn btn-amber">Edit
            </button>
        </>
        )}

        </li>
    )
}