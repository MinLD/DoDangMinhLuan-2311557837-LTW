import ModalCeateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import axios from "axios";
import { getAllUsers } from "Services/apiservices";
import ModalUpdateUser from "./ModalUpdateUser";

      const ManageUser = (props)=> {   
        const [ShowModalCreateUser,setShowModalCreateUser] = useState(false);
        const [ShowModalUpdateUser, setShowModalUpdateUser]= useState (false);
        const [dataUpdate, setDataUpdate] = useState ({});
        const [listUsers, setListUsers] = useState ([
   
        ])
    
            //componentDidMount
        useEffect(()=>{
        fetchlistUsers();
        },[]);
        const fetchlistUsers = async() =>{
        let res = await getAllUsers()

        if (res.EC === 0 ){
            setListUsers(res.DT)
        }
    
        }  
        const handleClickBtnUpdateUser=(user)=>{
            setShowModalUpdateUser(true);
            setDataUpdate(user)
        
  
        }
        const resetUpdate=()=>{
            setDataUpdate({});
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
                    <TableUser 
                    handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                    listUsers={listUsers}         
                    />
                  </div>
                  <ModalCeateUser 
                  setShow={setShowModalCreateUser}
                  show={ShowModalCreateUser}
                  fetchListUsers ={fetchlistUsers}/>
                    <ModalUpdateUser 
                  show={ShowModalUpdateUser}
                  setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers ={fetchlistUsers}
                    resetUpdate={resetUpdate}
              />
              </div> 


              </div>
          )
      }
      export default ManageUser;