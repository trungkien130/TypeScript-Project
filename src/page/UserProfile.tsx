import {useEffect, useState} from "react";
import { instance } from "../axios-instance";
import { useCheckLogin } from "../hook/useCheckLogin";
import UserEdit from "./UserEdit";



const UserProfile = () => {
  const [isEdit,setIsEdit]=useState(false)
  const [user, setUser] = useState()
  const userId = localStorage.getItem('id');
  useCheckLogin()
  useEffect(() => {
    if (userId) {
      instance.get(`/User/${userId}`).then(res => {
        setUser(res.data);
      })
    }
  }, [userId]);
  console.log(user);

  return <div>
    <div >
      <p>Email: {user?.// @ts-ignore
      email}</p>
      <p>Họ và Tên: {user?.// @ts-ignore
      name}</p>
      <p>Ngày sinh: {user?.// @ts-ignore
      borndate}</p>
      <p>Password: {user?.// @ts-ignore
      password}</p>
      <p>Số điển thoại: {user?.// @ts-ignore
      phoneNumber}</p>
      <p>Địa chỉ: {user?.// @ts-ignore
      address}</p>
      <p>Giới tính: {user?.// @ts-ignore
      gender}</p>
      <button onClick={()=>setIsEdit(true)}>Sửa thông tin</button>
    </div>
    {isEdit&&<UserEdit user={user} closeEdit={()=>setIsEdit(false)} />}
  </div>
}
export default UserProfile