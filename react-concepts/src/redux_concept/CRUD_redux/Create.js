import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const users = useSelector((state) => state.user)
    const handleSubmit = (event) => {
        event.preventDefault()
        const newUserId = users[users.length - 1].id + 1;
        dispatch(addUser({ id: newUserId, name, username, email }));
        navigate('/')
    }
    const dispatch = useDispatch()
    return (
        <div>
            <h2> Add New User</h2>
            <form style={{ margin: "100px", height: "auto", width: "auto", backgroundColor: "rgba(102, 70, 161, 0.63)", padding: "40px" }} onSubmit={handleSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' placeholder='Enter your name' className='form-control' onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='username'>UserName: </label>
                    <input type='text' name='username' placeholder='Make your username' className='form-control' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder" }}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' placeholder='Enter your email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default Create
