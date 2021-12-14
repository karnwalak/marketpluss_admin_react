import React from 'react'
import {Todo} from './Todo';
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 class="text-center">Todos List</h3>
            {props.todos.map((todo) => {
                return <Todo todo={todo} onDelete={onDelete}/>
            })}
            
        </div>
    )
}
