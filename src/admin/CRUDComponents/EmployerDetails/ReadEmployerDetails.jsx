import Button from "../../../Shared/Button";
import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ReadEmployerDetails.css'
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { Modal } from 'react-responsive-modal';



 
function ReadEmployerDetails(details){
    // const details = props.jobDetails
    const { EmployerId } = useParams();

    // const [details, setEmployerDetails] = useState(null); // Stores fetched data
    // useEffect (()  => {
    //     const fetchData = async () => {
        
    //         try {
    //             const url = "https://jobconnectapi-1.onrender.com/jobs/" + {EmployerId}; // Replace with your API endpoint
    //             const response = await fetch (url, {
    //                 method: 'GET', 
    //                 headers: {
    //                     'Content-Type': 'application/json' // Adjust if your API requires headers
    //                 }
    //             });
    //             const data = await response.json();
    //             console.log('data is $'+{data})
    //             setEmployerDetails (data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
            
    //     };
    //     fetchData();
    // }, []); // Runs only on component mount


    const blankuser = {
        "name":"",
        "email":"",
        "address":""
      }
    
      const [open, setOpen] = useState(false);
      const [action,setAction] = useState('Update');
      const [userdata, SetEmployerrData] = useState([]);
      const [user,  SetEmployer] = useState(blankuser);
      const [editIndex, setEditIndex] = useState(null);
    
    
      const onOpenModal = () => setOpen(true);
      const onCloseModal = () => {
        setOpen(false);
        setAction('Update')
      }
    
      const editUser = (index) => {
        console.log("index",index);
        setAction('Edit');
        const selectedEmployer = userdata.find((x,i) => i == index);
        SetEmployer(selectedEmployer);
        setEditIndex(index);
        onOpenModal(); 
      }
    
      const UpdateEmployer = () => {
        const newusers = userdata.map((x,i) => {
          if(i === editIndex){
            x = user
          }
          return x
        });
        SetEmployerData(newusers);
        SetEmployer(blankuser);
        setEditIndex(null);
        onCloseModal();
      }
    
      const DeleteEmployer = (index) => {
        const newusers = userdata.filter((x,i) => {return i !== index});
        SetEmployerData(newusers);
      }
    

    

    return (
        <>

                <>

                <div>
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
                    
                        {/* {action === 'Add' && <button className='button' style={{position:'relative', marginTop: '10px'}}
                                                    onClick={() => AddEmployer()}
                                                    >
                                                    Submit
                                            </button>} */}
                        {action == 'Update' && <button className='button' style={{position:'relative', marginTop: '10px'}}
                        onClick={() => UpdateEmployer()}>Update</button>}

                    </div>
                </Modal>

                    <div className="employer-name">
                            <h1>Name:{details.name}</h1>
                        </div>
                        
                        <div>
                            <ul className="employer-details">
                                {/* <li><b>Employer Name : </b> {details.name}</li> */}
                                <li><b>Email : </b> {details.email}</li>
                                <li><b>Company : </b> {details.company}</li>
                                <li><b>Industry : </b> {details.industry}</li>
                                
                            </ul>
                        </div>

                        <div className="btn-container">
                            <button className="button" 
                              style={{marginRight: '60px'}}
                            onClick={DeleteEmployer} >Delete</button>
                        </div>
                         
                         <div className="btn-contanier2">
                             <button className="button" 
                             style={{marginRight: '40px'}}
                             onClick={onOpenModal}>
                                   Update
                            </button>
                        </div>
                    
                      

                </div>
                   

                 
                    
                </>

            {/* {details && (
                <>
                    <div className="Employer-Name">
                        <h1>{details.Employer_Name}</h1>
                    </div>
                    
                    <div>
                        <ul className="Employer-details">
                            <li><b>Employer_Id : </b> {details.Employer_Id}</li>
                            <li><b>Employer_Email : </b> {details.Employer_Email}</li>
                            <li><b>Company : </b> {details.Company}</li>
                            <li><b>Industry : </b> {details.Idustry}</li>
                            
                        </ul>
                    </div>
                 
                    
                </>
            )} */}
        </>
    );
}


export default ReadEmployerDetails
