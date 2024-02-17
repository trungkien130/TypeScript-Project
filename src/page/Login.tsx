import { Link, useNavigate } from "react-router-dom"
import { instance } from "../axios-instance"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
type UserData = {
    email: string;
    password: string;
  };
  const Admin={
    UserName:"Admin",
    Password:"admin"
  }
    const Login=()=>{

    const navigate = useNavigate();
    const[userInfor,setUserInfor]=useState<Array<UserData>>()
    useEffect(() => {
        instance.get('/User').then(response=>{
    setUserInfor(response.data)
    })
    },[])
    console.log(userInfor)
    const { register, handleSubmit,reset } = useForm();// @ts-ignore
    const onSubmit = data => {// @ts-ignore
        const user = userInfor.find((user) => user.email === data.EmailLogin && user.password === data.PasswordLogin);
        if (user) {
          navigate('/home');// @ts-ignore
          localStorage.setItem('id',user.id)
          localStorage.setItem('email',user.email)
          window.location.reload(); 
          reset()
        }else if(data.EmailLogin===Admin.UserName&&data.PasswordLogin===Admin.Password){
            navigate('/admin')
            localStorage.setItem('admin',Admin.UserName)
        }
        else{
            alert("Sai tài khoản hoặc mật khẩu")
        }
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h2 className="loginTiltle">Đăng Nhập</h2>
            <div className="login_content">
                <div className="input inputUsername">
                    <label htmlFor="username">Email:</label>
                    <input type="text"  className="inputInFor" {...register("EmailLogin")} />
                </div>
                <div className="input inputPassword">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password"   className="inputInFor" {...register("PasswordLogin")} />
                </div>
                <div>
                    <span className="registerUser">Chưa có tài khoản <Link className="linkToSignup" to={"/signup"}>Đăng kí ngay</Link> </span>
                </div>
                <button type="submit" className="login_comfirm" name="login_btn" >Đăng Nhập</button>
            </div>
        </div>
        </form>
    )
}

export default Login