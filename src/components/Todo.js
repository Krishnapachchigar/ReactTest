import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState([{
        id: 1,
        todo: "krishna"
    }])
    const [text, setText] = useState("")
    const [id, setId] = useState(null)
    const [isedit, setEdit] = useState(false)

    const handleDelete = (id) => {
        const newTodo = todos.filter((data) => {
            return data.id !== id
        })
        setTodos(newTodo)
    }

    const handleEdit = (id) => {
        const editTodo = todos.find((data) => {
            return data.id === id
        })
        setEdit(true)
        setText(editTodo.todo)
        setId(editTodo.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd()
    }

    const handleAdd = () => {
        if (isedit) {
            setTodos(
                todos.map(data => {
                    if (data.id === id) {
                        return { ...data, id: id, todo: text }
                    }
                    return data
                })
            )
            setText("")
            setEdit(false)
        } else {
            let id = todos.length + 1;
            const newArray = {
                id: id,
                todo: text
            }
            setTodos([...todos, (newArray)])
            setText("")
            setId(null)
            console.log(todos)
        }
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
                {isedit ? <button>Edit</button> : <button>Add</button>}
            </form>
            {
                todos.map(data => {
                    return (
                        <div>
                            <p>{data.todo}</p>
                            <button onClick={() => handleEdit(data.id)}>Edit</button>
                            <button onClick={() => handleDelete(data.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todo