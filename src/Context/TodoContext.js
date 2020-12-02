import React, { useReducer } from 'react';
import axios from 'axios';

export const TodoContext = React.createContext()

const INIT_STATE = {
    contact: [],
    contactEdit: null,
    contactDetails: []
}

const reducer = (state = INIT_STATE, action) => {
    // console.log(state);
    switch (action.type) {
        case "GET_CONTACT":
            return { ...state, contact: action.payload }
        case "EDIT_CONTACT":
            return { ...state, contactEdit: action.payload }
        case "DETAIL_CONTACT":
            return { ...state, contactDetails: action.payload }
        default: return state
    }
}

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

   const   getTodosData = async () => {
        let { data } = await axios('http://localhost:8000/contacts')
        // console.log(data);
        dispatch({
            type: "GET_CONTACT",
            payload: data
        })
    }

    const addTask = async (newTask) => {
        console.log(newTask);
        await axios.post('http://localhost:8000/contacts', newTask)

        getTodosData()
    }

    const changeStatus = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.patch(`http://localhost:8000/contacts/${id}`, { status: !data.status })
        getTodosData()
        console.log(data);
    }

    const delItem = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getTodosData()
        console.log(data);
    }

    const editContact = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        console.log(id);
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveTask = async (newTask, history) => {
        try {
            await axios.patch(`http://localhost:8000/contacts/${newTask.id}`, newTask);
            history.push('/')
        } catch (error) {
            history.push('/error')
        }
        getTodosData()
    }
    const getContactsDetail = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        console.log(data);
        dispatch({
            type: "DETAIL_CONTACT",
            payload: data
        })
        
        getTodosData()
    }
    console.log(state.contactDetails);
    return (
        <TodoContext.Provider value={{
            contact: state.contact,
            contactEdit: state.contactEdit,
            contactDetails: state.contactDetails,
            addTask,
            getTodosData,
            changeStatus,
            delItem,
            editContact,
            saveTask,
            getContactsDetail
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider