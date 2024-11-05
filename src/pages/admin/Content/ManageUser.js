import ModalCeateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import axios from "axios";
import { getAllUsers } from "Services/apiservices";

      const ManageUser = (props)=> {   
        const [ShowModalCreateUser,setShowModalCreateUser] = useState(false);
        const [listUsers, setListUsers] = useState ([
   
        ])
    
            //componentDidMount
        useEffect(()=>{
        fetchlistUsers();
        },[]);
        const fetchlistUsers = async() =>{
        let res = await getAllUsers()
        console.log (res.EC)
        if (res.EC === 0 ){
            setListUsers(res.DT)
        }
    
        }  
        return (
              <div className="manage-users-container">
                  <div className="manage-title">
                  ManageUser
                  </div>
              <div className="users-content "> 
                  <div className="btn-add-new">
                  <button className="btn btn-primary " onClick={()=> setShowModalCreateUser(true)}><FcPlus/>Add new user</button>
                  </div>
                  <div className="table-users-container" >
                    <TableUser listUsers={listUsers}/>
                  </div>
                  <ModalCeateUser 
                  setShow={setShowModalCreateUser}
                  show={ShowModalCreateUser}
                  fetchListUsers ={fetchlistUsers}
/>
              </div> 


              </div>
          )
      }
      export default ManageUser;