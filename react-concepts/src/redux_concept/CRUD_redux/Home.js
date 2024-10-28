import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { userAPI } from './API'
import { Link } from 'react-router-dom'
const Home = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(userAPI)
            .then((res) => {
                setUser(res.data)
                console.log('users==> ', user);

            })
            .catch((error) => {
                console.log('error -> ', error);

            })
    }, [])
    const users = useSelector((state) => state.users)
    console.log('users ==> ', users);

    return (
        <div>
            <h1> CRUD operation with react-redux</h1>
            <Link to='/create' className='btn btn-info my-3'>Create +</Link>
            <table className="table table-data table-striped table-bordered">
                <thead className='table-head'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {user.map((user, index) =>
                        <tr key={index}>
                            <th scope="col">{user.id}</th>
                            <th scope="col">{user.name}</th>
                            <th scope="col">{user.username}</th>
                            <th scope="col">{user.email}</th>
                            <th scope="col" style={{display:"flex", gap:"10px"}}>
                                <button className='btn btn-primary'>View</button>
                                <button className='btn btn-warning'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home
