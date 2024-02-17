import vnblogo from"/poject-cuoi-khoa/poject_cuoi_khoa/img/vnb_logo_2x.png"
import { useEffect, useState } from "react";
import"./home.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { clearUser, saveUser } from "../slices/accountSlice";
import Cart from "./Cart";

const Header=() => {
  const navigate = useNavigate();
  const[isLogin,setIsLogin]=useState(false)
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.account)
  const [cart,setCart]=useState(false)
  useEffect(() => {
    if (localStorage.getItem('email')) {
      dispatch(saveUser(localStorage.getItem('email') || ''))
    }
  }, [])

useEffect(()=>{
  if(localStorage.getItem('id')){
    setIsLogin(true)
  }
},[])

 console.log(account)

  function logout(){
    dispatch(clearUser())
    navigate('/home')
  }
  function openCart(){
    setCart(true)
  }
  function openSignup () {
    navigate('/signup')
  }
  function openLogin () {
    navigate('/login')
  }
  console.log(openCart)
  // console.log(account.email)
  const [test,setTest]=useState<string>('')
  console.log(test)
    return(
            <>
              <header>
                <div>
                  <div>
                    <Link to={'/home'}><img src={vnblogo} alt="" /></Link>
                  </div>
                  <div>
                    <input className="searchItem" type="search" id="keyword" placeholder="Tìm kiếm tựa sách, tác giả" onChange={(e)=>setTest(e.target.value)} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <button className="search_btn" type="submit">Tìm sách</button>
                    <i className="fa-solid fa-cart-shopping" onClick={openCart}></i>
                  </div>
                  <div>
                   {!isLogin &&<button className="sigup_btn" onClick={openSignup}>Đăng kí</button>} 
                   {!isLogin &&<button className="login_btn" onClick={openLogin}>Đăng nhập</button>} 
                   {isLogin &&<button className="logout_btn" onClick={logout}>Đăng xuất</button>} 
                    {isLogin &&<Link to={'/userProfile'} className="thongtinkh" >Xin chào:{account.email}</Link>}
                    
                  </div>
                </div>
              </header>
              <nav>
                <div>
                  <i className="fa-solid fa-bars-staggered"></i>
                  <span className="listBook">Danh mục sách</span>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div>
                  <i className="fa-solid fa-phone"></i>
                  <span className="Hotline">Hotline: 1900 6401</span>
                  <i className="fa-solid fa-comments"></i>
                  <a href="" className="supportOnl">Hỗ trợ trực tuyến</a>
                </div>
              </nav>
            {cart&& <Cart setCart={setCart}/>}
            </>
          )
}
export default Header
