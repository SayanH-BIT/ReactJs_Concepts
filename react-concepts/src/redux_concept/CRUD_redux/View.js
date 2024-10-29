import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userAPI } from './API'
import axios from 'axios'

const View = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(userAPI)
            .then((res) => {
                setUpdate(res.data);  // Set fetched data into the state
                console.log("Fetched profile: ", res.data);
            })
            .catch((error) => {
                console.log("Error fetching profile: ", error);
            });

    }, [])
    return (
        <div>
            <h2> View {update.name}'s Details</h2>
            <form style={{ margin: "100px", height: "auto", width: "auto", backgroundColor: "thistle", padding: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' value={update.name} placeholder='Enter your name' className='form-control' />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='username'>UserName: </label>
                    <input type='text' name='username' value={update.username} placeholder='Make your username' className='form-control' />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder" }}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' value={update.email} placeholder='Enter your email' className='form-control' />
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button type='button' className='btn btn-info' onClick={() => { setTimeout(() => navigate('/'), 1000) }}> Back</button>
                </div>
            </form>
        </div>
    )
}

export default View
