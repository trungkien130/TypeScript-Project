import {  useEffect, useState } from "react";
import "./home.css"
import slide1 from "/poject-cuoi-khoa/poject_cuoi_khoa/img/slide 1.jpg"
import slide2 from "/poject-cuoi-khoa/poject_cuoi_khoa/img/slide 2.jpg"
import slide3 from "/poject-cuoi-khoa/poject_cuoi_khoa/img/slide 3.jpg"
import slide4 from "/poject-cuoi-khoa/poject_cuoi_khoa/img/sach onlie.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { instance } from "../axios-instance";
import { Link } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store";
import { saveUser } from "../slices/accountSlice";
import { addProductsToCart } from "../slices/addToCartSlice";

export type User={
    id: number,
    email: string,
    name: string,
    password: string,
    phoneNumber: number,
    borndate:number,
    address:string,
    gender:string,
  }
export type Products ={
    name:string,
    img:string,
    price:number,
    description:string,
    id:number,
}

const Home=()=>{
    const [sortOption, setSortOption] = useState<string>("");
    function addTocard(product: Products){
        dispatch(addProductsToCart(product));
      }
    const [products,setProducts]=useState<Array<Products>>()
    const dispatch=useDispatch()

    const sortedProducts = () => {
        if (sortOption === "hightolow") {// @ts-ignore
          return [...products].sort((a, b) => b.price - a.price);
        } else if (sortOption === "lowtoghigh") {
          return [...products].sort((a, b) => a.price - b.price);
        } else {
          return products;
        }
      };
    function getList() {
        instance.get('/Products').then(response => {
            setProducts(response.data)
        })
      }

      useEffect(() => {
        getList();
        dispatch(saveUser(localStorage.getItem('email')||'')) 
      }, [])
console.log(sortOption)
    return(
    <Provider store={store}>
        <div className="listMenu">
        <ul className="Listtitle">
            <li className="menu-item">Sách ngoại văn <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách kinh tế <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách văn học trong nước <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách văn học nước ngoài <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách giáo khoa <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách thiếu nhi <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách tin học-Ngoại ngữ <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
            <li className="menu-item">Sách tin chuyên ngành <i className="fa-solid fa-angle-right"></i>
                <ul className="submenu">
                    <li><a href="#">Thể loại 1</a></li>
                    <li><a href="#">Thể loại 2</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div id="slideshow">
        <div className="slide-wrapper">
                <div className="slide" id="slide-1">
                    <img className="imgSlide" src={slide1} alt=""/>
                </div>
                <div className="slide" id="slide-2">
                    <img className="imgSlide" src={slide2} alt=""/>
                </div>
                <div className="slide" id="slide-3">
                    <img className="imgSlide" src={slide3}alt=""/>
                </div>
                <div className="slide" id="slide-4">
                    <img className="imgSlide" src={slide4} alt=""/>
                </div>
        </div>
    </div>
    <div>
        <h1>Danh sách sản phẩm</h1>
        <select name="" id="" onChange={(event) => setSortOption(event.target.value)} value={sortOption}>
          <option value="">reset</option>
          <option value="hightolow">lớn đến bé</option>
          <option value="lowtoghigh">bé đến lớn</option>
        </select>
          <div className="listProducts" >
          {products &&// @ts-ignore
           sortedProducts().map((product) => (
            <div className="product" key={product.id}>
                <div className="Products">
                <button className="addToCart" onClick={() => addTocard(product)}>Thêm vào giỏ hàng</button>
                <Link to={`/productsDetail/${product.id}`} className="LinkToDetail">
                  <img className="productsImg" src={product.// @ts-ignore
                  Img} alt={product.name} />
                  <p className="productsName">{product.name}</p>
                  <p className="productsPrice">Giá: {product.price}</p>
                  <p className="productsAmount">Amount: {product.// @ts-ignore
                  amount}</p>
                  </Link>
                </div>
            </div>
          ))}
          </div>
      </div>
    
    </Provider>
  );
};
export default Home