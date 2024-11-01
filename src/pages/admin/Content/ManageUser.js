import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ManageUser = (props)=> {



    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    // đóng

    
    return (
        <div className="manage-user-container">
            <div className="title">
            ManageUser
            </div>
        <div className="users-content"> 
            <div>
            <button> Add new user</button>
            
            </div>
            <div className='cha'>
                table user
              <Button type="primary" onClick={showModal}>
        Open Modal
            </Button>
            <Modal title="Basic Modal" className='test' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                
    
    
      </Modal>

                    
            </div>
     
        </div> 


        </div>
    )
}
export default ManageUser;