import ModalCeateUser from "./ModalCreateUser";

      const ManageUser = (props)=> {   
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
                      table ussr
                      <ModalCeateUser/>
                  </div>
          
              </div> 


              </div>
          )
      }
      export default ManageUser;