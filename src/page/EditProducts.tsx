import"./home.css"
import {useEffect, useState} from "react";
import { Products } from "./Home.tsx";
import { instance } from "../axios-instance.tsx";
import { useForm } from "react-hook-form";
// @ts-ignore
const EditProducts=({setIsEdit,editProductId})=>{
    const [products, setProducts] = useState<Products>()
    const { register, handleSubmit,setValue,} = useForm();// @ts-ignore
    const onSubmit = (data) => {
      confirmEdit(data);
    };// @ts-ignore
    function confirmEdit(data) {// @ts-ignore
      instance.put(`/Products/${editProductId}`,data ).then(res => {
        alert("Edit success");
        setIsEdit(false);
        window.location.reload()
      });
  
    }
    useEffect(() => {
      instance.get(`/Products/${editProductId}`).then(res => {
      setProducts(res.data)
      setValue('img', res.data.Img);
      setValue('name', res.data.name);  
      setValue('price', res.data.price);
      setValue('amount', res.data.amount);
      setValue('Description', res.data.description);
      })
    }, [])
console.log(products)

function handleClose() {
    setIsEdit(false);
  }


    return <form onSubmit={handleSubmit(onSubmit)}>
    <div className="editProductsModal">
        <button className="closeEdit" onClick={handleClose}>x</button>
        <img className="editImg" src={products?.// @ts-ignore
        Img} alt="" />
        <label htmlFor="">Image</label>
        <input type="file" {...register("Img")} />
        <label htmlFor=""> Product Name: </label>
        <input type="text" {...register("name")}/>
        <label htmlFor=""> Price: </label>
        <input type="text" {...register("price")} />
        <label htmlFor=""> Amount: </label>
        <input type="text" {...register("amount")} />
        <label htmlFor=""> Description:</label>
        <input type="text" {...register("Description")} />
        <label htmlFor=""></label>
        <input type="submit"/>
    </div>
    </form>
}

export default EditProducts