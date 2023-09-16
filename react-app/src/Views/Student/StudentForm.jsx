import { useState } from "react";
import { Form, Checkbox, Radio, Modal,Button   } from "react-bootstrap";

const StudentForm = ({onClose}) => {
   const [educations] = useState([
    
    { id: 1, name: "BA"},
    { id: 2, name: "B.sc"},
    { id: 3, name: "B.tech"},
    { id: 4, name: "MA"},
    { id: 5, name: "M.sc"},
    { id: 6, name: "M.tech"},

   ]);

   const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    education: "",
    is_degree_completed: true,
    skills: [],
   
   });
   

   const handleChange = (e) => {
     setForm ({
      ...form,
      [e.target.name]: e.target.value,
     });
    
   };

   const handleRadio = (e) => {
    console.log(e.target.value,);
    setForm ({
     ...form,
     [e.target.name]: Boolean(Number(e.target.value)),
    });
    };

    const handleCheck = (value) => {
      if(form.skills.includes(value)) {
        setForm({
          ...form,
          skills: form.skills.filter((skill) => skill !==value)
        });
      }else {
        setForm({
          ...form,
          skills:[...form.skills, value],
        });
      }
    }
   
    const handleFormSubmit = (e) => {
      e.preventDefault();

      console.log(form);
    }


   return (
   
    <Form onSubmit={handleFormSubmit}>
       <Modal.Body>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Full Name"  value={form.name} onChange={handleChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Email"  value={form.email} onChange={ handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile"  value={form.mobile}  onChange={ handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3}  value={form.address}  onChange={ handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="education">
        <Form.Label>Highest Education</Form.Label>
        <Form.Select value={form.education} name="education"  onChange={ handleChange}>
      <option> Select </option>
   {
    educations.map((education) =>   <option value="{education.id}" >{education.name}</option> )
  } 
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="is-degree-completed">
        <Form.Label>Is Degree Completed?</Form.Label>
       <div>
       <Form.Check
            inline
            label="Yes"
            name="is-degree-completed"
            type='radio'
            value={1}
            checked= { form.is_degree_completed }
            onChange={handleRadio}
           
          />
          <Form.Check
            inline
            label="No"
            name="is-degree-completed"
            type='radio'
            value={0}
            checked= { form.is_degree_completed }
            onChange={handleRadio}
           
          />
          

       </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="skills">
        <Form.Label>Skills</Form.Label>
       <div>
               <Form.Check
            inline
            label="HTML5"
            name="skills[]"
            type='checkbox'
            value= "HTML5"
            checked= { form.skills.find((skill) => skill === "HTML5")}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
           <Form.Check
            inline
            label="CSS3"
            name="skills[]"
            type='checkbox'
            value= "CSS3"
            checked= { form.skills.find((skill) => skill === "CSS3")}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
          />
           <Form.Check
            inline
            label="JavaScript"
            name="skills[]"
            type='checkbox'
            value= "JavaScript"
            checked= { form.skills.find((skill) => skill === "JavaScript")}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
           <Form.Check
            inline
            label="Php"
            name="skills[]"
            type='checkbox'
            value= "Php"
            checked= { form.skills.find((skill) => skill === "Php")}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
           <Form.Check
            inline
            label="Mysql"
            name="skills[]"
            type='checkbox'
            value= "Php"
            checked= { form.skills.find((skill) => skill === "Mysql")}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
           <Form.Check
            inline
            label="Vue.js"
            name="skills[]"
            type='checkbox'
            value= "Php"
            checked= { form.skills.find((skill) => skill === "Vue.js")}
             onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
           <Form.Check
            inline
            label="Laravel"
            name="skills[]"
            type='checkbox'
            value= "Php"
            checked= { form.skills.find((skill) => skill === "Laravel"    )}
            onChange={(e) => {
              handleCheck(e.target.value);
            }}
           
          />
       </div>
      </Form.Group>
      </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={onClose} type='reset'>
         
            Reset
          </Button>
          <Button variant="primary" onClick={onClose} type='submit'>
            Save 
          </Button>
        </Modal.Footer>
       </Form>
     
  
   )
}



export default StudentForm;