import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { Products } from "./Home.tsx";
import { instance } from "../axios-instance.tsx";
import { useDispatch, useSelector } from "react-redux";
import  { addProductsToCart } from "../slices/addToCartSlice.ts"
const ProductsDetail = () => {

  const params = useParams();
  const [products, setProducts] = useState<Products>()// @ts-ignore
  const { cart } = useSelector((state) => state.products);
  const dispatch=useDispatch()

  useEffect(() => {
    instance.get(`/Products/${params.id}`).then(res => {
      setProducts(res.data)
    })
  }, [])
  console.log(cart)
function addTocard(){// @ts-ignore
  dispatch(addProductsToCart(products));
}// @ts-ignore
  return <div>
        <img src={products?.// @ts-ignore
        Img} alt="" />
        <div className="productsDetailContents">
        <p className="productsDetailName">Products name: {products?.name}</p>
        <p className="productsDetailPrice">Price: {products?.price}</p>
        <p className="productsDetailAmount">Amount: {products?.// @ts-ignore
        amount}</p>
        <p className="productsDetailDescription">Description: {products?.description}</p>
        <button className="addButton" onClick={addTocard}>Thêm vào giỏ hàng</button>
        <button className="buyButton">Mua ngay</button>
        </div>
  </div>
}

export default ProductsDetail