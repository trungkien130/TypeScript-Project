
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../axios-instance";
export type User={
    name:string,
    password:string,
    phoneNumber:number,
    address:string,
    email:string,
    dateBirth:number,
    gender:string,
}// @ts-ignore
const Signup=({setUserProfile,userProfile}:{userProfile:User})=>{  
    useEffect(()=>{
        instance.get('/User').then(response=>{
            setUserProfile(response.data)
        })
    },[])


    console.log(userProfile)
    const navigate=useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();// @ts-ignore
  const onSubmit = data =>{

    if (userProfile && userProfile.email === data.email) {
        alert("Email đã tồn tại");
      } else {
        // Thực hiện POST request
        instance.post('/User', data)
          .then(response => {
            console.log('Đăng kí thành công:', response.data);
            reset();
            navigate('/home')
          })
          .catch(error => {
            console.error('Đăng kí không thành công:', error);
          });
      }
    }

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div id="Sigup" className="Signup">
                        <div className="Sigup-content">
                            <h2 className="titleSigup">Đăng kí tài khoản</h2>
                            <div className="input nameInput">
                                <label htmlFor="">Họ và Tên</label>
                                <input type="text" className="inputInFor" {...register("name" ,{required:true})}   />
                            </div>
                            <div className="input passwordInput">
                                <label htmlFor="">Mật khẩu</label>
                                <input type="password" className="inputInFor"{...register("password", {required:true ,minLength:6})}  />
                                {errors.password && (<p style={{ color: 'red' }}>Mật khẩu ít nhât 6 kí tự</p>)}
                            </div>
                            <div className="input phoneInput">
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text" className="inputInFor" {...register("phoneNumber", {required:true})}   />
                            </div>
                            <div className="input addrestInput">
                                <label htmlFor="">Địa chỉ</label>
                                <input type="text" className="inputInFor" {...register("address", {required:true})}   />
                            </div>
                            <div className="input emailInput">
                                <label htmlFor="">Email</label>
                                <input type="email" className="inputInFor"  {...register("email", {required:true})} />
                            </div>
                            <div className="input borndateInput">
                                <label htmlFor="">Ngày Sinh</label>
                                <input type="date" className="inputInFor" {...register("borndate" ,{required:true})}   />
                            </div>
                            <div className="input genderInput">
                                <label>Giới tính</label>
                                <input type="radio"  {...register("gender" ,{required:true})} value="Nam" />Nam
                                <input type="radio" {...register("gender" ,{required:true})}  value="Nữ" />Nữ
                            </div>
                            <div>
                                <span className="userLogin">Đã có tài khoản <Link className="linkToSignup" to={"/login"}>Đăng nhập</Link></span>
                            </div>
                            <div className="dangki_btn">
                                <button type="submit" name="sigup_btn" value="Đăng kí">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            );
}
export default Signup