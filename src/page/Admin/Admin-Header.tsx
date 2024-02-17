import { Link, useNavigate } from "react-router-dom"
import vnblogo from"/poject-cuoi-khoa/poject_cuoi_khoa/img/vnb_logo_2x.png"
import { adminCheckLogin } from "../../hook/adminCheckLogin";
const AdminHeader=()=>{
  adminCheckLogin()
  const navigate=useNavigate()
  function logout(){
    localStorage.removeItem('admin')
    navigate("/home")
  }
    return(
        <div className="admin-dashboard">
        <div className="logout_button">
          <button className="Logout" onClick={logout}>
           
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
          
          </button>
        </div>
        <div className="warpper">
          <div className="logo">
            <Link to="/admin">
              <img src={vnblogo} alt="" />
            </Link>
            <h3>Trung Kiên</h3>
            <span>Chào mừng trở lại</span>
          </div>
          <div>
            <ul className="list-setting">
              <li>
                <Link to="">
                  <i className="fa-solid fa-wrench"></i>{' '}
                  <span className="menu-lable">Bảng điều khiển</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="controlUsers">
                  <i className="fa-solid fa-users"></i>{' '}
                  <span className="menu-lable">Quản lý khách hàng</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="controlProducts">
                  <i className="fa-solid fa-tag"></i>{' '}
                  <span className="menu-lable">Quản lý sản phẩm</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-solid fa-clipboard-check"></i>{' '}
                  <span className="menu-lable">Quản lý đơn hàng</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-solid fa-list-check"></i>{' '}
                  <span className="menu-lable">Quản lý danh mục</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-solid fa-address-book"></i>{' '}
                  <span className="menu-lable"> Quản lý slide </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-solid fa-gear"></i>{' '}
                  <span className="menu-lable">Cài đặt hệ thống</span>{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default AdminHeader