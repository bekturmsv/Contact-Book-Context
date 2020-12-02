import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { Link } from 'react-router-dom'
const Details = () => {
    const { contactDetails, getContactsDetail} = useContext(TodoContext)
    console.log(contactDetails);
    useEffect(() => {
        getContactsDetail()
        
    }, [contactDetails])
    console.log(contactDetails);

    return (
        <div>
                <ul>
                    <li>{contactDetails.name}</li>
                    <li>{contactDetails.surname}</li>
                    <li>{contactDetails.number}</li>
                    <Link to="/">
                    <button>Back</button>
                    </Link>
                </ul>
        </div>
    );
};

export default Details;