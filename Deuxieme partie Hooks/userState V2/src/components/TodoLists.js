import React, { useState } from "react";
import  * as uuid from "uuid";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
    
    const [todos, setTodos] = useState ([
        {id: 1, todo: 'Acheter du pain'},
        {id: 2, todo: 'Acheter du lait'},
        {id: 3, todo: 'Acheter du chocolat'}
    ])

    
    const [warning, SetWarning] = useState(false)


    const myTodos = todos.map ((todo) => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.todo}</li>
        )
    })


    const addNewTodo = (newTodo) => {
        if (newTodo !== ''){

            SetWarning(false)

            setTodos([...todos,
                {
                    id: uuid.v4(),
                    todo: newTodo
                }
            ])
        } else {
            SetWarning(true)
        }
        
    }


    const warningMsg = warning && <div className="alert alert-danger mt-5" role="alert">Veuillez indiquer un Todo</div>
    
    
    return (
        <div>
            {warningMsg}
            <h1 className='text-center'>{todos.length} To-do</h1>
            <ul className="list-group">
                {myTodos}
            </ul>

            <AddTodoForm addingNewTodo={addNewTodo} />
        </div>
    )
}

export default TodoList;