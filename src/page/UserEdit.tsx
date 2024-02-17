import { FC } from "react";
import { useForm } from "react-hook-form";
import { User } from "./Home";
import { instance } from "../axios-instance";

const UserEdit:FC<{user?:User,closeEdit:()=>void}> =({user,closeEdit})=>{
  const userId=localStorage.getItem('id')
  console.log(userId)
        const { register, handleSubmit } = useForm({
            defaultValues:user||{}
        }
        );// @ts-ignore
        const onSubmit = data => {
          instance.put(`/User/${userId}`,data).then(()=>{
            closeEdit()
            localStorage.setItem('email',data.email)
            window.location.reload()
          })

        }
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

export default UserEdit