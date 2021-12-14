import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button class="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
    )
}
