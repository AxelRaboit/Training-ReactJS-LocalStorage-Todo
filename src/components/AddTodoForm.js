import React, { useState } from 'react';

const AddTodoForm = ({addNewTodo}) => {

    const [addTodo, setAddTodo] = useState('');

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo);
        setAddTodo('');
    }

    return (
        <div className='mt-5'>
            <div className='card card-body'>
                <form onSubmit={handleTodo}>
                    <div className='form-group'>
                        <label className='mb-2'>Ajouter une Todo</label>
                        <input 
                            className='form-control'
                            type="text"
                            value={addTodo}
                            onChange={(e) => setAddTodo(e.target.value)}
                        />
                        <input 
                            type="submit"
                            className='btn btn-success mt-3 w-100'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodoForm;