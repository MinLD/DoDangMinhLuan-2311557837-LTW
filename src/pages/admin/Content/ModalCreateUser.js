import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ModalCreteUser = (props)=> {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 

    
    return (
        <div className="manage-user-container">
            <div className="title">
            ManageUser
            </div>
        <div className="users-content"> 
            <div>
            <button> Add new user</button>
            
            </div>
            <div >
   
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
  
      <Form.Group as={Col} controlId="formGridUser">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="User" placeholder="UserName" />
        </Form.Group>

</Row>
      <Row className="mb-3">
  
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>User</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Row>
   

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Đồng Ý
          </Button>
        </Modal.Footer>
      </Modal>
                    
            </div>
     
        </div> 


        </div>
    )
}
export default ModalCreteUser;