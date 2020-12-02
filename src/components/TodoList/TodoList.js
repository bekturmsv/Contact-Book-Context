import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { Link } from 'react-router-dom'
import EditContact from '../../EditContact/EditContact';

const TodoList = () => {
    const { contact, getTodosData, delItem, changeStatus, editContact, getContactsDetail } = useContext(TodoContext);
    const abc = []
    useEffect(() => {
        getTodosData()
    }, [])

    console.log(contact);
    return (
        <ul>

            {contact.map(item => (
                <li key={item.id} className={item.status ? "completed" : ''}>
                    <button onClick={() => delItem(item.id)}>Delete</button>
                    <Link to="/edit">
                        <button onClick={() => editContact(item.id)}>Edit</button>
                    </Link>
                    <Link to="/details">
                        <button onClick={() => getContactsDetail(item.id)}>Details</button>
                    </Link>
                    <input
                        type="checkbox"
                        checked={item.status}
                        onChange={() => changeStatus(item.id)}
                    />
                    
                        {item.name} {item.surname} {item.number}
                </li>

            ))}
        </ul>
    );
};

export default TodoList;