import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCart, deleteProductsFromCart } from "../slices/addToCartSlice";

const Cart=({setCart}:{setCart:any})=>{
    const dispatch=useDispatch()
    const [isPay, setIsPay] = useState(false);// @ts-ignore
    const { cart } = useSelector((state) => state.products);
    function plusAmount (productId:number)  {// @ts-ignore
        dispatch(addProductsToCart({ id: productId }));
      };

  function minusAmount(productId:number) {
    dispatch(deleteProductsFromCart(productId));
    };
    function deleteProduct(productId:number) {
        dispatch({ type: 'products/deleteProduct', payload: productId });
    }
    useEffect(() => {
        setIsPay(cart.length > 0);
      }, [cart]);
      console.log({ cart })
      const calculateTotal = (cart:any) => {
        return cart.reduce((total:any, product:any) => total + (product.quantity * product.price), 0);
      };
      const formatCurrency = (amount:number) => {
        return amount.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      };
return (
    <div className="cartModal">
      <div className="cartDivTitle">
      <p className="closeCart" onClick={()=>setCart(false)}>X</p>
        <p className="cartTitle">Giỏ hàng</p>
      </div>
        <div className="cartContent">
        {cart&&cart.map(// @ts-ignore
        product=>(
            <div className="cartProducst" >
                <p className="deleteProduct" onClick={()=>{deleteProduct(product.id)}}>X</p>
                <img className="imgCart" src={product?.Img} alt="" />
                <p className="nameCart">Name:{product?.name}</p>
                <p className="priceCart">Price:{product?.price}</p>
                <p className="amountCart" >Amount: {product?.amount}</p>
                <div className="amountCartControl">
                    <button className="minusAmount" onClick={()=>minusAmount(product.id)}>-</button>
                    <input className="showAmount" type="number" readOnly value={product.quantity } />
                    <button className="plusAmount" onClick={()=>plusAmount(product.id)}>+</button>
                </div>
            </div>
        ))}
        {isPay&&
        <div className="payDiv">
            <p>Tạm tính:{formatCurrency(calculateTotal(cart))}</p>
            <button className="payButton">Thanh toán </button>
            </div>}
        </div>

    </div>
)
}

export default Cart