import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import { v5 as uuid } from 'uuid';

const Todo = () => {

    const getLocalStorage = () => {
        let todo = localStorage.getItem('todo');
        if(todo) {
            return (
                todo = JSON.parse(localStorage.getItem('todo')))
        } else {
            return [];
        }
    }

    const [todo, setTodo] = useState(getLocalStorage())

    console.log(todo);


    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
        localStorage.setItem('id', uuid);
    },[todo])

    const [warning, setWarning] = useState(false)

    const addNewTodo = (newTodo) => {
        if(newTodo !== ''){

            warning && setWarning(false);

            setTodo([
                ...todo, {
                    id: uuid,
                    todo: newTodo
                }
            ])
        } else {
            setWarning(true);
        }
    }

    const todoList = todo.map(todo =>{
        return <li className='list-group-item' key={todo.id}>{todo.todo}</li>
    })

    const warningMessage = warning &&
        <div className="alert alert-danger mt-2" role="alert">
            Veuillez ne pas laisser le champ vide.
        </div>

    return (
        <div className='container'>
            <div className='container__title text-center'>
                <h1>{todo.length} To-do</h1>
            </div>
            {warningMessage}
            <div className='container__todoList'>
                <ul className='list-group list-unstyled'>
                    {todoList}
                </ul>
                <AddTodoForm addNewTodo={addNewTodo}/>
            </div>
        </div>
    )
}

export default Todo;