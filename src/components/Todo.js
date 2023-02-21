import React, { useState } from 'react'
import TodoItem from './TodoItem'

function Todo() {

    const [todos, setTodo] = useState({
        id:null,
        todo:""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo({
            ...todos, id: todos.id, todo: todos.todo
        })
        console.log(todos)
    }

    return (
        <>
            <h1>Todos App</h1>
            <form onSubmit={handleSubmit}>
                <label>Todo: </label>
                <input
                    type='text'
                    name='todo'
                    value={todos.todo}
                    onChange={(e) => setTodo({...todos, todo:e.target.value})}
                />
                <button>Add</button>
            </form>
            <TodoItem data={todos}/>
        </>
    )
}

export default Todo