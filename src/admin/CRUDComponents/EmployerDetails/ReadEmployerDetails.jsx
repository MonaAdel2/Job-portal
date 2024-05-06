import Button from "../../../Shared/Button";
import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import './ReadEmployerDetails.css'
import {Modal} from 'react-responsive-modal';
import AdminHeader from "../../AdminHeader";

function ReadEmployerDetails() {
    const {employerId} = useParams();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const dummyData = {
        "id": "1",
        "email": "mona@gmail,com",
        "company": "Google",
        "industry": "Development",
        "userName": "Mona Adel",
    }

    const blankUser = {
        "email": "",
        "company": "",
        "industry": "",
        "userName": "",
        'role': "employer"
    };


    const [details, setEmployerDetails] = useState(null);
    const [user, setUser] = useState(blankUser); // set the initial state to the employer's data

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:5109/admin/employers/${employerId}`
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setEmployerDetails(data);
                setUser(data)

                console.log(`employer data: ${data.employer}`);
            } catch (error) {
                console.error("Error fetching employer data:", error);
            }
        };
        fetchData();
    }, [employerId]);

    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('Update');


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setAction('Update');
    };

    const updateUser = async () => {
        user.role = "employer"
        try {

            const response = await fetch(`http://localhost:5109/admin/employers/${employerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            setEmployerDetails(data);
            onCloseModal();
        } catch (error) {
            console.error('Error updating employer:', error);
        }
    };

    const deleteUser = async () => {
        try {
            const url = `http://localhost:5109/admin/employers/${employerId}`

            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            navigate("/admin/employers")
            // Handle success accordingly, maybe redirect to another page
        } catch (error) {
            console.error('Error deleting employer:', error);
        }
    };

    return (
        <>
            <AdminHeader/>
            {details ? (
                <>
                    <div className="employer-name">
                        <h1>Name: {details.userName}</h1>
                    </div>

                    <div>
                        <ul className="employer-details">
                            <li><b>Employer ID: </b> {details.id}</li>
                            <li><b>Email: </b> {details.email}</li>
                            <li><b>Company: </b> {details.company}</li>
                            <li><b>Industry: </b> {details.industry}</li>
                        </ul>
                    </div>

                    <div className="btn-container">
                        <button className="button" onClick={deleteUser}>Delete</button>
                    </div>

                    <div className="btn-container2">
                        <button className="button" onClick={onOpenModal}>Update</button>
                    </div>

                    <Modal open={open} onClose={onCloseModal} center>
                        <h2>{action} Employer</h2>
                        <div className='form'>
                            <label htmlFor="">User Name</label>
                            <input type="text" value={user.userName}
                                   onChange={(e) => setUser({...user, "userName": e.target.value})}/>
                            <label htmlFor="">Email</label>
                            <input type="email" value={user.email}
                                   onChange={(e) => setUser({ ...user, "email": e.target.value})}/>
                            <label htmlFor="">Industry</label>
                            <input type="text" value={user.industry}
                                   onChange={(e) => setUser({ ...user, "industry": e.target.value})}/>
                            <label htmlFor="">Company</label>
                            <input type="text" value={user.company}
                                   onChange={(e) => setUser({ ...user, "company": e.target.value})}/>
                        </div>
                        <button className='button'
                                style={{position: 'relative', marginTop: '10px', width: '100%', right: '0'}}
                                onClick={updateUser}>Update
                        </button>
                    </Modal>
                </>
            ) : (
                <p style={{textAlign: 'center'}}>No details available. Please try again later</p>
            )}
        </>
    );
}

export default ReadEmployerDetails;
