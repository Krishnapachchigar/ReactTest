import React, { useState } from 'react'
import TodoItem from './TodoItem'

function Todo() {

    const [text, setText] = useState("")
    const [todos, setTodos] = useState([{
        id: null,
        todo: ""
    }])

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = todos.length + 1;
        const newArray = {
            id: id,
            todo: text
        }
        setTodos([...todos, (newArray)])
        setText("")
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add</button>
            </form>
            {
                todos.map(data => {
                    return (
                        <div>
                            <p>{data.todo}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todo