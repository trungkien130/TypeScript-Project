import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { User } from "../Home";
import { instance } from "../../axios-instance";
import { getListUser } from "../../slices/accountSlice";
import { adminCheckLogin } from "../../hook/adminCheckLogin";
// import { updateUser } from "../../slices/accountSlice";


const AdminUserEdit:FC<{user?:User,closeEdit:()=>void}> =({user,closeEdit})=>{
  adminCheckLogin()
  const dispatch=useDispatch()
        const { register, handleSubmit} = useForm({
            defaultValues:user||{}
        }
        );// @ts-ignore
        const onSubmit = data =>{
          instance.put(`/User/${user?.id}`,data).then(()=>{
            closeEdit()// @ts-ignore
            dispatch(getListUser());
            window.location.reload()
          })

        }
          console.log(user)
        function handleClose(){
          closeEdit()
        }
      console.log(user)
      return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="editUserModal">
                <button className="closeUserEdit" onClick={handleClose}>x</button>
            <label htmlFor="">Email</label>
            <input type="text"  {...register("email")}/>
            <label htmlFor="">Password</label>
            <input type="text" {...register("password")}/>
            <label htmlFor="">Họ và tên</label>
            <input type="text" {...register("name")}/>
            <label htmlFor="">Ngày sinh</label>
            <input type="text" {...register("borndate")}/>
            <label htmlFor="">Số điện thoại</label>
            <input type="text" {...register("phoneNumber")}/>
            <label htmlFor="">Địa chỉ</label>
            <input type="text" {...register("address")}/>
            <label htmlFor="">Giới tính</label>
            <input type="text" {...register("gender")}/>

            <label htmlFor=""></label>
            <button type="submit">Gửi</button>
            </div>

        </form>
      )
}

export default AdminUserEdit