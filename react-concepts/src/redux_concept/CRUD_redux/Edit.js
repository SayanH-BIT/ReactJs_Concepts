import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { userAPI } from './API'
import axios from 'axios'
import { useFormik } from 'formik'
import { updateUser } from './UserReducer'

const Edit = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({
        name: '',
        username: '',
        email: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { values, handleChange, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: update,
        onSubmit: async (values) => {
            const formData = {
                'name': values.name,
                'username': values.username,
                'email': values.email
            };
            try {
                // Use PUT for updating an existing record
                await axios.put(`${userAPI}/${id}`, formData)

                // Dispatch to update Redux store after successful API update
                dispatch(updateUser({
                    id: id,
                    name: values.name,
                    username: values.username,
                    email: values.email
                }))

                // Navigate after updating API and Redux store
                toast.success("Saved successfully", {
                    onClose: () => navigate('/')
                })
            } catch (error) {
                console.log("Error occurred: ", error);
            }
        }
    })

    useEffect(() => {
        axios.get(`${userAPI}/${id}`)
            .then((res) => {
                console.log("Fetched profile: ", res.data);
                setUpdate(res.data);  // Set fetched data into the state
            })
            .catch((error) => {
                console.log("Error fetching profile: ", error);
            });
    }, [id])

    return (
        <div>
            <ToastContainer />
            <h2> Update/Edit user's Details</h2>
            <form style={{ margin: "100px", height: "auto", width: "auto", backgroundColor: "#deb887", padding: "40px" }} onSubmit={handleSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' value={values.name} placeholder='Enter your name' className='form-control' onChange={handleChange} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "20px", fontWeight: "bolder", marginBottom: "15px" }}>
                    <label htmlFor='username'>UserName: </label>
                    <input type='text' name='username' value={values.username} placeholder='Make your username' className='form-control' onChange={handleChange} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "65px", fontSize: "20px", fontWeight: "bolder" }}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' value={values.email} placeholder='Enter your email' className='form-control' onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button type='button' className='btn btn-info' onClick={() => { navigate('/') }}> Back</button>
                    <button type='submit' className='btn btn-warning'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
