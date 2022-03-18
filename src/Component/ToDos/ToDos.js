import React, { useEffect, useState } from 'react'

const ToDos = () => {
    const [ToDos, setToDos] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setToDos(data))

    }, [])
    return (
        <div>
            <h1>My ToDos : {ToDos.length}</h1>
            {
                ToDos.map(toDo => <ToDo key={toDo.id} title={toDo.title} userId={toDo.userId}></ToDo>)
            }
        </div>
    )
}

function ToDo(props) {
    return (
        <div>

            <h2>Title: {props.title}</h2>
            <h5>userId:{props.userId}</h5>
        </div>
    )
}

export default ToDos