import { useEffect, useState } from "react"
import { adminCheckLogin } from "../../hook/adminCheckLogin"
import"./admin.css" 
import { instance } from "../../axios-instance"
import { Link } from "react-router-dom"
const Admin=()=>{
    adminCheckLogin()
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    useEffect(()=>{
        instance.get('/User')  .then(response => {
            const users = response.data
            const totalusers = users.length;
            setTotalUsers(totalusers);
          })
        instance.get('/Products')  .then(response => {
            const Products = response.data
            const totalProducts = Products.length;
            setTotalProducts(totalProducts);
          })
    },[])
    console.log(totalUsers)
return(
    <div>   
 <div className="admin_main_page">
    <Link to={'controlUsers'}>
        <div className="admin_control_products">
            <div className="total">{totalUsers}</div>
            <div className="totalTitle">Tài khoản</div>
        </div>
        </Link>

    <Link to={'controlProducts'}>
        <div className="admin_control_customer">
        <div className="total">{totalProducts}</div>
            <div className="totalTitle">Sản phẩm</div>
        </div>    
        </Link>
            </div>
    </div>
)
}

export default Admin