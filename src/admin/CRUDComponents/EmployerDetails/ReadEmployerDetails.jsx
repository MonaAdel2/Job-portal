import Button from "../../../Shared/Button";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ReadEmployerDetails.css'
import { Modal } from 'react-responsive-modal';

function ReadEmployerDetails() {
    const { employerId } = useParams();

    const [details, setEmployerDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://your-api-endpoint.com/employers/${employerId}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setEmployerDetails(data);
            } catch (error) {
                console.error("Error fetching employer data:", error);
            }
        };
        fetchData();
    }, [employerId]);

    const blankUser = {
      "employerId": "",
      "name": "",
      "email": "",
      "company": "",
      "industry": "",
    };

    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('Update');
    const [user, setUser] = useState(blankUser);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setAction('Update');
    };

    const updateUser = async () => {
        try {
            const response = await fetch(`http://your-api-endpoint.com/employers/${employerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
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
            await fetch(`http://your-api-endpoint.com/employers/${employerId}`, {
                method: 'DELETE'
            });
            // Handle success accordingly, maybe redirect to another page
        } catch (error) {
            console.error('Error deleting employer:', error);
        }
    };

    return (
        <>
            {details && (
                <>
                    <div className="employer-name">
                        <h1>Name: {details.name}</h1>
                    </div>

                    <div>
                        <ul className="employer-details">
                            <li><b>Employer ID: </b> {details.employerId}</li>
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
                            <label htmlFor="">ID</label>
                            <input type="text" value={user.employerId} onChange={(e) => setUser({ ...user, "employerId": e.target.value })} />
                            <label htmlFor="">Name</label>
                            <input type="text" value={user.name} onChange={(e) => setUser({ ...user, "name": e.target.value })} />
                            <label htmlFor="">Email</label>
                            <input type="text" value={user.email} onChange={(e) => setUser({ ...user, "email": e.target.value })} />
                            <label htmlFor="">Company</label>
                            <input type="text" value={user.company} onChange={(e) => setUser({ ...user, "company": e.target.value })} />
                            <label htmlFor="">Industry</label>
                            <input type="text" value={user.industry} onChange={(e) => setUser({ ...user, "industry": e.target.value })} />
                            <button className='button' style={{ position: 'relative', marginTop: '10px' }} onClick={updateUser}>Update</button>
                        </div>
                    </Modal>
                </>
            )}
        </>
    );
}

export default ReadEmployerDetails;
