import Main from '../layouts/Main';
import { Table } from 'react-bootstrap';

const Student = () => {
    return (
        <>
       <Main>
        <div className="row mt-3">
            <h2>Students</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
                    <th>Is Degree Completed</th>
                    <th> Education</th>
                    <th>Skills</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>1</td>
                    <td>Jack</td>
                    <td>Daniel</td>
                    <td>110839</td>
                    <td>jack@gmail.com</td>
                    <td>st.Thomas</td>
                    <td>Bachlor's</td>
                    <td>Yes</td>
                 <td>HTML, CSS, JavaScript</td>
                  </tr>
                  <tr>
                  <td>2</td>
                    <td>Elison</td>
                    <td>Martin</td>
                    <td>112839</td>
                    <td>elison@gmail.com</td>
                    <td>London</td>
                    <td>Master's</td>
                    <td>Yes</td>
                 <td>HTML, CSS, JavaScript,PHP, Reactjs</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td> J.K. </td>
                    <td>  Rowling</td>
                    <td>113839</td>
                    <td>rowling@gmail.com</td>
                    <td>UK city</td>
                    <td>Master's</td>
                    <td>Yes</td>
                 <td>HTML, CSS, JavaScript,PHP, </td>
                  </tr>
                  <tr>
                  <td>4</td>
                  <td>Emilie</td>
                    <td>Durkhim</td>
                    <td>114839</td>
                    <td>emilie@gmail.com</td>
                    <td>Lavendar</td>
                    <td>Master's</td>
                    <td>Yes</td>
                 <td>HTML, CSS, JavaScript,PHP, </td>
                  </tr>
                  <tr>
                  <td>5</td>
                  <td>Austin</td>
                    <td>Lark</td>
                    <td>115839</td>
                    <td>austin@gmail.com</td>
                    <td>US</td>
                    <td>Master's</td>
                    <td>Yes</td>
                 <td>HTML, CSS, JavaScript,PHP,</td>
                  </tr>
                  
      </tbody>
    </Table>
        </div>
       </Main>

        </>
    );
}

export default Student;