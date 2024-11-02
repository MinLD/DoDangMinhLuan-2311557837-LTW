import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";

const ModalCeateUser = ()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [Username,setUsername]=useState("");
    const [Images,setImages]=useState("");
    const [Rol,setRol]=useState("USER");
    const [PreviewImages,setPreviewImages] =useState("");

    const handleUploadImages =(event)=>{
      if(event.target && event.target.files && event.target.files[0]){
        setPreviewImages(URL.createObjectURL(event.target.files[0]))
        setImages((event.target.files[0]))
      }else{

      }

       

    }
    
    return (
  <>
            <Button variant="primary" onClick={handleShow}>
        Đăng ký tài khoản
      </Button>

      <Modal
      className="modal-add-users" 
      show={show} 
      onHide={handleClose}
      size ="xl"
      backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" className="form-control"
     value={Email}
     onChange={(event)=>setEmail(event.target.value)}
     />
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" 
    onChange={(event)=>setPassword(event.target.value)}
    value={Password}/>
  </div>

  <div className="col-md-6">
    <label  className="form-label">Username</label>
    <input type="text" className="form-control" 
    onChange={(event)=> setUsername(event.target.value)}
    value={Username} />
  </div>
  <div className="col-md-4">
    <label  className="form-label">Role </label>
    <select  className="form-select" onChange={(event)=>setRol(event.target.value)}>
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
    </select>
  </div>
  <div className='col-md-12 upload-file-title'>
      <label className="form-label label-upload" htmlFor='fileUpload'> <FcPlus />Update File Images</label>
      <input type="file" hidden id='fileUpload' onChange={(event)=>handleUploadImages(event)}/>
  </div>
  <div className="col-md-12 img-preview">
    {PreviewImages ?
<img src={PreviewImages}/>
  :
  <span>preview images</span>
  }
  
     
      
  </div>

</form>

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
                    
      </>
    )
}
export default ModalCeateUser;