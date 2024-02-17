import { useForm } from "react-hook-form";
import { instance } from "../../axios-instance";
import { adminCheckLogin } from "../../hook/adminCheckLogin";
// @ts-ignore
const AddNewProduct =({setAddNew})=>{
    adminCheckLogin()
    const { register, handleSubmit } = useForm();
    // @ts-ignore
    const onSubmit = data =>{
        instance.post('/Products',data).then(()=>{
            setAddNew(false)
            window.location.reload()
        })
        console.log(data.Img);
    } 

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="AddNewModal">
            <button className="closeBtn" onClick={()=>setAddNew(false)}>X</button>
            <label htmlFor="">Image</label>
            <input type="file"  {...register("Img")}/>
            <label htmlFor="">Name</label>
            <input type="text" {...register("name")} />
            <label htmlFor="">Price</label>
            <input type="number" {...register("price")} />
            <label htmlFor="">Description</label>
            <textarea   {...register("description")}/>
            <label htmlFor="">Amount</label>
            <input type="number"  {...register("amount")}/>
            <label htmlFor=""></label>
            <button>Add</button>
        </div>
        </form>
    )
}

export default AddNewProduct