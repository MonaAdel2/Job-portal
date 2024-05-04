import Button from "../../../Shared/Button";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ReadEmployerDetails.css'
import { Modal } from 'react-responsive-modal';
import AdminHeader from "../../AdminHeader";

function ReadEmployerDetails() {
    const { employerId } = useParams();

    const [details, setEmployerDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:5109/admin/employers/${employerId}`
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0ODY0ODY1LCJpc3MiOiJqb2JDb25uZWN0In0.vzVBXIsmWusscfHhk0lGX54TKdvUHfYnwUfgcu6bebw"
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${token}`
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
        "Email": "",
        "Password": "",
        "Company": "",
        "Industry": "",
        "UserName": "",
        'Role': "Employer"
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
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0ODY0ODY1LCJpc3MiOiJqb2JDb25uZWN0In0.vzVBXIsmWusscfHhk0lGX54TKdvUHfYnwUfgcu6bebw"

            const response = await fetch(`http://localhost:5109/admin/employers/${employerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`

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
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0ODY0ODY1LCJpc3MiOiJqb2JDb25uZWN0In0.vzVBXIsmWusscfHhk0lGX54TKdvUHfYnwUfgcu6bebw"
            const url = `http://localhost:5109/admin/employers/${employerId}`

            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            // Handle success accordingly, maybe redirect to another page
        } catch (error) {
            console.error('Error deleting employer:', error);
        }
    };

    return (
        <>
            <AdminHeader/>
            {details && (
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
                            <input type="text" value={user.UserName} onChange={(e) => setUser({ ...user, "UserName": e.target.value })} />
                            <label htmlFor="">Email</label>
                            <input type="text" value={user.email} onChange={(e) => setUser({ ...user, "Email": e.target.value })} />
                            <label htmlFor="">Password</label>
                            <input type="text" value={user.password} onChange={(e) => setUser({ ...user, "Password": e.target.value })} />
                            <label htmlFor="">Company</label>
                            <input type="text" value={user.company} onChange={(e) => setUser({ ...user, "Company": e.target.value })} />
                            <label htmlFor="">Industry</label>
                            <input type="text" value={user.industry} onChange={(e) => setUser({ ...user, "Industry": e.target.value })} />
                            <button className='button' style={{ position: 'relative', marginTop: '10px' }} onClick={updateUser}>Update</button>
                        </div>
                    </Modal>
                </>
            )}
        </>
    );
}

export default ReadEmployerDetails;
