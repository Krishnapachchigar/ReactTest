import React from 'react'

function TodoItem({ data }) {
    return (
        <>
            <div>{data.id}</div>
            <div>{data.todo}</div>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default TodoItem