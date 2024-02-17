import { useEffect, useState } from "react"
import { instance } from "../../axios-instance"
import { User } from "../Home"
import AdminUserEdit from "./Admin-UserEdit"
import { adminCheckLogin } from "../../hook/adminCheckLogin";

const AdminUsersControl=()=>{
  adminCheckLogin()
    const[isEdit,setIsEdit]=useState(false)
    const [users,setUser]=useState<Array<User>>([])
    const [isDelete,setIsDelete]=useState(false)
    const [editUserId, setEditUserId] = useState(null);
    useEffect(()=>{
        instance.get('/User').then((res)=>
        setUser(res.data))
    },[])
console.log(users)
// @ts-ignore
function confirmDelete(userId) {

    instance.delete(`/User/${userId}`).then(() => {
        instance.get('/User').then((res)=>  
        setUser(res.data))
        setIsDelete(false);

    })
  }// @ts-ignore
  const handleEditClick = (userId) => {
    setEditUserId(userId);
    setIsEdit(true);
  };
  console.log(editUserId)
    return( 
        <div className="control_products">
        <div className="control_products_head_content">
            <b> <a href="data-table-user.php" className="control_products_head_content_link">Danh sách khách hàng</a></b>
        </div>
        <div className="table_user_content">
        <table // @ts-ignore
         border="1px" width="100%" cellSpacing="0" cellPadding="5">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Gender</td>
                    <td>Phone number</td>
                    <td>Address</td>
                    <td>Date of birth</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.address}</td>
              <td>{user.borndate}</td>
              <td>
              <div className="Actions">
            <button onClick={()=>setIsDelete(true)}>Xóa</button>
            <button onClick={() => handleEditClick(user.id)}>Sửa</button>
              </div>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
        </div>
        {isDelete && (
        <div className="deleteModal">
          Are you sure to delete
          <div>
            <button onClick={() => setIsDelete(false)}>Close</button>
            <button onClick={()=>confirmDelete(users[0]?.id)}>Confirm</button>
          </div>
        </div>
      )}
          {isEdit&&<AdminUserEdit user={users.find((user) => user.id === editUserId)} closeEdit={()=>setIsEdit(false)} />}
        </div>
    )
}


export default AdminUsersControl