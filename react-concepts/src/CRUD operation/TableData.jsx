import React, { useState, useEffect } from 'react';
import { profileAPI } from '../redux_concept/CRUD_redux/API.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TableData = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [addShow, setAddShow] = useState(false); // State for Add modal visibility
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("");
    // State for update user
    const [update, setUpdate] = useState({
        name: '',
        email: '',
        designation: '',
        company: '',
        contact: '',
        website: ''
    });
    // State for new user
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        designation: '',
        company: '',
        contact: '',
        website: ''
    }); 

    const handleClose = () => setShow(false);
    const handleAddClose = () => setAddShow(false); // Close Add modal
    const handleShow = (user) => {
        setSelectedUser(user);
        setUpdate(user);
        setShow(true);
    };
    const handleAddShow = () => {
        setNewUser({
            id:uuidv4(),
            name: '',
            email: '',
            designation: '',
            company: '',
            contact: '',
            website: ''
        });
        setAddShow(true);
    };

    const filterData = users.filter((user) => {
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    });
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(profileAPI);
            setUsers(res.data);
        } catch (error) {
            console.log("Error during fetch: ", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: update,
        onSubmit: async (values) => {
            const updatedUser = {
                name: values.name,
                email: values.email,
                designation: values.designation,
                company: values.company,
                contact: values.contact,
                website: values.website
            };
            try {
                await axios.put(`${profileAPI}/${selectedUser.id}`, updatedUser);
                fetchData();
                setShow(false);
            } catch (error) {
                console.log("Error updating user: ", error);
            }
        }
    });

    const handleAddSubmit = async () => {
        try {
            await axios.post(profileAPI, newUser); // API call to add a new user
            fetchData();
            setAddShow(false);
        } catch (error) {
            console.log("Error adding new user: ", error);
        }
    };

    return (
        <>
            <div style={{ marginTop: "30px" }}>
                <input type='search' placeholder='search here' onChange={handleSearch} />
                <Button variant='outline-secondary' style={{ marginLeft: "15px" }} onClick={handleAddShow}>Add</Button>
            </div>

            {/* Add User Modal */}
            <Modal
                show={addShow}
                onHide={handleAddClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label className='individual-form-label'>Name:
                            <input
                                type='text'
                                className='individual-form-input'
                                name='name'
                                placeholder='Enter your name'
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            />
                        </label>
                        <label className='individual-form-label'>Email Id:
                            <input
                                type='email'
                                className='individual-form-input'
                                name='email'
                                placeholder='Enter your email'
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </label>
                        <label className='individual-form-label'>Designation:
                            <input
                                type='text'
                                className='individual-form-input'
                                name='designation'
                                placeholder='Enter your designation'
                                value={newUser.designation}
                                onChange={(e) => setNewUser({ ...newUser, designation: e.target.value })}
                            />
                        </label>
                        <label className='individual-form-label'>Company Name:
                            <input
                                type='text'
                                className='individual-form-input'
                                name='company'
                                placeholder='Enter your company name'
                                value={newUser.company}
                                onChange={(e) => setNewUser({ ...newUser, company: e.target.value })}
                            />
                        </label>
                        <label className='individual-form-label'>Contact Number:
                            <input
                                type='tel'
                                className='individual-form-input'
                                name='contact'
                                placeholder='Enter your contact'
                                value={newUser.contact}
                                onChange={(e) => setNewUser({ ...newUser, contact: e.target.value })}
                            />
                        </label>
                        <label className='individual-form-label'>Website:
                            <input
                                type='url'
                                className='individual-form-input'
                                name='website'
                                placeholder='Enter your linkedin profile'
                                value={newUser.website}
                                onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
                            />
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleAddSubmit}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update User Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedUser ? selectedUser.name : 'User Details'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <form onSubmit={formik.handleSubmit}>
                            <label className='individual-form-label'>Name:
                                <input
                                    type='text'
                                    className='individual-form-input'
                                    name='name'
                                    placeholder='Enter your name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </label>
                            <label className='individual-form-label'>Email Id:
                                <input
                                    type='email'
                                    className='individual-form-input'
                                    name='email'
                                    placeholder='Enter your email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </label>
                            <label className='individual-form-label'>Designation:
                                <input
                                    type='text'
                                    className='individual-form-input'
                                    name='designation'
                                    placeholder='Enter your designation'
                                    value={formik.values.designation}
                                    onChange={formik.handleChange}
                                />
                            </label>
                            <label className='individual-form-label'>Company Name:
                                <input
                                    type='text'
                                    className='individual-form-input'
                                    name='company'
                                    placeholder='Enter your company name'
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                />
                            </label>
                            <label className='individual-form-label'>Contact Number:
                                <input
                                    type='tel'
                                    className='individual-form-input'
                                    name='contact'
                                    placeholder='Enter your contact'
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                />
                            </label>
                            <label className='individual-form-label'>Website:
                                <input
                                    type='url'
                                    className='individual-form-input'
                                    name='website'
                                    placeholder='Enter your linkedin profile'
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                />
                            </label>
                        </form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' variant="warning" onClick={formik.handleSubmit}>
                        Update & Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div style={{ margin: "25px", border: "1px solid black" }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={() => { handleShow(user) }}> View </button>
                                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={() => {
                                        axios.delete(profileAPI + `/${user.id}`)
                                            .then(response => {
                                                console.log('User deleted: ', response);
                                                fetchData();
                                            })
                                            .catch(error => {
                                                console.log("Error deleting user: ", error);
                                            });
                                    }}> Delete </button>
                                    <button onClick={() => { navigate(`/individual/${user.id}`) }}>Go</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableData;
