import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { Link } from 'react-router-dom'
const EditContact = (props) => {
    const { contactEdit, saveTask } = useContext(TodoContext)
    const [newEditItem, setNewEditItem] = useState(contactEdit)
    console.log(contactEdit);
    useEffect(() => {
        setNewEditItem(contactEdit)
    }, [contactEdit])

    return (
        <div>
            {newEditItem ?
                <>
                    <input type="text" onChange={(e) => {
                        let newTask = { ...newEditItem }
                        newTask.name = e.target.value
                        setNewEditItem(newTask)
                    }}
                        value={newEditItem.name}
                    />
                    <input type="text" onChange={(e) => {
                        let newTask = { ...newEditItem }
                        newTask.surname = e.target.value
                        setNewEditItem(newTask)
                    }}
                        value={newEditItem.surname}
                    />
                    <input type="text" onChange={(e) => {
                        let newTask = { ...newEditItem }
                        newTask.number = e.target.value
                        setNewEditItem(newTask)
                    }}
                        value={newEditItem.number}
                    />

                    <Link to="/">
                        <button onClick={() => saveTask(newEditItem, props.history)}>Save</button>
                    </Link>
                </>
                :
                <h1>Loading ...</h1>
            }
        </div>
    );
};

export default EditContact;