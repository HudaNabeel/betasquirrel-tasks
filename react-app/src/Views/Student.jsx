import React,  { useState } from 'react';
import Main from '../layouts/Main';
import { Table, Row, Col, Button,Modal, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import StudentForm from './Student/StudentForm';



const Student = () => {

    const [Students, setStudents] = useState([ ]) ;
  const [show, setShow] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:4000/student")
    .then((res) => res.json())
    .then((data) => setStudents(data.data))
    .catch((err) => console.log(err));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
                  

        setTimeout (() => {
        setStudents ([
          { name: "Jack", mobile: "110839", email: "jack@gmail.com", address: "st.Thomas", education: "Bachlors", skills: "HTML, CSS, JavaScript" },
           { name: "Elison", mobile: "112839", email: "elison@gmail.com",  address: "London", education: "Masters", skills: " JavaScript,vue.js"},
           { name: "J.K",  mobile: "113839", email: "rowling@gmail.com" ,  address: "UK city", education: "Bachlors", skills: " Php,Laravel,wordpress"},
           { name: "Emilie", mobile: "114839", email: "emilie@gmail.com" ,  address: "Lavendar", education: "Masters", skills: " Python,Mongo DB"},
           { name: "Austin",  mobile: "115839",email: "austin@gmail.com",  address: "US", education: "Masters", skills: "HTML, CSS, JavaScript,Php,Vue.js,Mysql"},
        ]);
       } , 5000 )

  console.log (Students);
  return (
        <>
       <Main>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
              <StudentForm  onClose={handleClose}/>        
      </Modal>
      
        <div className="row mt-3">
            <h2>Students</h2>
            <Row>
              <Col className='mb-3 text-end' >
              <Button variant="success" size='sm' onClick={handleShow}>
               +Add Student</Button>
              </Col>
            </Row>
            <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className='text-center'>#</th>
          <th> Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
                    <th> Education</th>
                    <th>Skills</th>
        </tr>
      </thead>
      <tbody>
       
          {
            Students.length === 0 ?(
              <tr><td colSpan={7} className='text-center'>No records found!</td></tr>
            ) : (
              Students.map((student,index) => (
                <tr key={index}> 
                  <td className='text-center'>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.mobile}</td>
                        <td>{student.email}</td>
                        <td>{student.address}</td>
                        <td>{student.education}</td>
                     <td>{student.skills}</td>
                      </tr>
              ))
              )  } 
     
      
                 
                  
      </tbody>
    </Table>
        </div>
       </Main>
      

        </>
    );
}

export default Student;