import EmployerCard from "./EmployerCard/EmployerCard";
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';

function EmployersList(){

    const jobsList = [
        { employerId: 1, name: 'Item 1', email: 'email', company: 'company', industry:'industry' },
        { employerId: 2, name: 'Item 1', email: 'email', company: 'company', industry:'industry' },
        { employerId: 3, name: 'Item 1', email: 'email', company: 'company', industry:'industry' },
        { employerId: 4, name: 'Item 1', email: 'email', company: 'company', industry:'industry' },
        { employerId: 5, name: 'Item 1', email: 'email', company: 'company', industry:'industry' },
    ];

    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('Add');
    const [userdata, SetEmployerrData] = useState([]);
    const [user, SetEmployer] = useState({
        "name": "",
        "email": "",
        "address": ""
    });
    const [editIndex, setEditIndex] = useState(null);

    const blankuser = {
        "name":"",
        "email":"",
        "address":""
    };

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setAction('Add')
    };

    const AddEmployer = () => {
        SetEmployerrData([...userdata,user]);
        SetEmployer(blankuser);
        onCloseModal();
    };
      
    return(
        <>
        <div className="add-btn-contanier">
                <button onClick={onOpenModal} style={{marginTop: '25px', display:'flex', position:'absolute', right:'2%'}}>
                    <PlusCircle size={16}></PlusCircle>
                    <span> Add Employer</span>
                    </button>
        </div>
            <h2 style={{ marginLeft: '20px' }}>Employers</h2>
            

            <Modal open={open} onClose={onCloseModal} center>
                <h2>{action} User</h2>
                <div className='form'>
                <label htmlFor="">Id</label>
                    <input type="text" value={user.employerId} onChange={(e) => SetEmployer({...user,"employerId":e.target.value})} />
                    <label htmlFor="">Name</label>
                    <input type="text" value={user.name} onChange={(e) => SetEmployer({...user,"name":e.target.value})} />
                    <label htmlFor="">Email</label>
                    <input type="text" value={user.email} onChange={(e) => SetEmployer({...user,"email":e.target.value})} />
                    <label htmlFor="">Company</label>
                    <input type="text" value={user.company} onChange={(e) => SetEmployer({...user,"company":e.target.value})} />
                    <label htmlFor="">Industry</label>
                    <input type="text" value={user.industry} onChange={(e) => SetEmployer({...user,"industry":e.target.value})} />
                   
                    {action === 'Add' && <button className='button' style={{position:'relative', marginTop: '10px'}}
                                                onClick={() => AddEmployer()}
                                                >
                                                Submit
                                        </button>}
                </div>
            </Modal>
            <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {jobsList.map(employer => (
                    <li style={{textDecoration: 'none'}}>
                        <EmployerCard 
                            name={employer.name} 
                            employerId={employer.employerId}
                            email={employer.email}
                            company={employer.company}
                            industry={employer.industry}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EmployersList;
