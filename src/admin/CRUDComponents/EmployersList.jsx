import EmployerCard from "./EmployerCard/EmployerCard";
import {PlusCircle, Edit, Trash2} from 'react-feather';
import {Modal} from 'react-responsive-modal';
import React, {useState, useEffect} from 'react';
import AdminHeader from "../AdminHeader";

function EmployersList() {

    const token = localStorage.getItem('token');
    const [error, setError] = useState('');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const employersList = [
        {id: 1, userName: 'Item 1', email: 'email', company: 'company', industry: 'industry'},
        {id: 2, userName: 'Item 1', email: 'email', company: 'company', industry: 'industry'},
        {id: 3, userName: 'Item 1', email: 'email', company: 'company', industry: 'industry'},
        {id: 4, userName: 'Item 1', email: 'email', company: 'company', industry: 'industry'},
        {id: 5, userName: 'Item 1', email: 'email', company: 'company', industry: 'industry'},
    ];

    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('Add');
    const [employers, setEmployersData] = useState([]);
    const [user, SetEmployer] = useState({
        "Email": "",
        "Password": "",
        "Company": "",
        "Industry": "",
        "UserName": "",
        'Role': "Employer"
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        fetchEmployersList();
    }, []);

    const fetchEmployersList = async () => {
        const url = `https://jobconnectapi-1.onrender.com/admin/employers`
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzODc1MWMxLTQ5ZjctNDNmZC05ZDJmLTljYjA0Y2U4NzFhNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xMjMiLCJleHAiOjE3MTQ5OTM0NDUsImlzcyI6ImpvYkNvbm5lY3QifQ.net0LJuj85FCpfO12pcpfvZDocGzUvXl0DWOuvzAIqw"
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setEmployersData(data);
            console.log(`user data is ${employers}`)
        } catch (error) {
            console.error('Error fetching employers list:', error);
        }
    };

    const addNewEmployer = async (e) => {
        e.preventDefault();

        if(!isFormValid){
            setError("Please fill all the fields.");
            return;
        }
        if (!regex.test(password)) {
            setError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
            return;
        }
        try {
            const url = `http://localhost:5109/admin/employers`
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0OTYyNjYyLCJpc3MiOiJqb2JDb25uZWN0In0.CZV4pNmyRSR4d03TqGv450ay_UnE9AFa2FbE6rxI6pg"

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            setEmployersData([...employers, data]);
            SetEmployer(user);
            onCloseModal(); // Close the modal after adding the new employer
            setError("");
        } catch (error) {
            console.error('Error adding new employer:', error);
        }
    };

    useEffect(() => {
        // Check if all fields are filled with valid data
        const isValid = Object.values(user).every(value => value !== "");
        setIsFormValid(isValid);
    }, [user]);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setAction('Add')
    };

    return (
        <>
            <AdminHeader/>
            <div className="add-btn-contanier">
                <button onClick={onOpenModal}
                        style={{marginTop: '25px', display: 'flex', position: 'absolute', right: '2%'}}>
                    <PlusCircle size={16}></PlusCircle>
                    <span> Add Employer</span>
                </button>
            </div>
            <h2 style={{marginLeft: '20px'}}>Employers</h2>


            <Modal open={open} onClose={onCloseModal} center>
                <h2>{action} User</h2>
                {error && <div className="error-message2" style={{color: "red"}}>{error}</div>}
                <div className='form'>
                    <label htmlFor="">User Name</label>
                    <input type="text" required value={user.UserName}
                           onChange={(e) => SetEmployer({...user, "UserName": e.target.value})}/>
                    <label htmlFor="">Email</label>
                    <input type="email" required value={user.email}
                           onChange={(e) => SetEmployer({...user, "Email": e.target.value})}/>
                    <label htmlFor="">Password</label>
                    <input type="text" required value={user.Password}
                           onChange={(e) => SetEmployer({...user, "Password": e.target.value})}/>
                    <label htmlFor="">Company</label>
                    <input type="text" required value={user.company}
                           onChange={(e) => SetEmployer({...user, "Company": e.target.value})}/>
                    <label htmlFor="">Industry</label>
                    <input type="text" required value={user.industry}
                           onChange={(e) => SetEmployer({...user, "Industry": e.target.value})}/>

                    {action === 'Add' && <button className='button' style={{position: 'relative', marginTop: '10px'}}
                                                 onClick={addNewEmployer}
                                                 disabled={!isFormValid}>
                        Submit
                    </button>}
                </div>
            </Modal>
            {employers && employers.length > 0 ? (
            <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {employers.map(employer => (
                    <li key={employer.id}>
                        <EmployerCard
                            name={employer.userName}
                            employerId={employer.id}
                            email={employer.email}
                            company={employer.company}
                            industry={employer.industry}
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{ textAlign: 'center' }}>No employers available.</p>
            )}

        </>
    );
}

export default EmployersList;
