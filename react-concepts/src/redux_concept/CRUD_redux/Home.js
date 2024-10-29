import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { userAPI } from './API'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser } from './UserReducer'
const Home = () => {
    const navigate = useNavigate()
    const [userData, setUser] = useState([])
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    useEffect(() => {
        axios.get(userAPI)
            .then((res) => {
                setUser(res.data)
                console.log('users==> ', res.data);
            })
            .catch((error) => {
                console.log('error -> ', error);

            })
    }, [])
    const handleDlt = (id) => {
        dispatch(deleteUser({id:id}))
    }

    return (
        <div>
            <h1> CRUD operation with react-redux</h1>
            <Link to='/create' className='btn btn-primary my-3'>Create +</Link>
            <table className="table table-data table-striped table-bordered">
                <thead className='table-head'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {userData.map((user, index) =>
                        <tr key={index} style={{ textAlign: "justify" }}>
                            <th scope="col">{user.id}</th>
                            <th scope="col">{user.name}</th>
                            <th scope="col">{user.username}</th>
                            <th scope="col">{user.email}</th>
                            <th scope="col" style={{ display: "flex", gap: "10px", alignItems:"center", justifyContent:"center" }}>
                                <button className='btn btn-success' onClick={()=>{navigate(`/view`)}}>View</button>
                                <button className='btn btn-warning' onClick={()=>{navigate(`/edit/${user.id}`)}}>Edit</button>
                                <button className='btn btn-danger' style={{marginRight:"-15px"}} onClick={handleDlt(user.id)}>Delete</button>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

// export const {userData} = Home;
export default Home
