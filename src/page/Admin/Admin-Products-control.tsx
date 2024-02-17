import { useEffect, useState } from "react";
import "./admin.css";
import { instance } from "../../axios-instance";
import { Products } from "../Home";
import EditProducts from "../EditProducts";
import AddNewProduct from "./Admin-AddNewProducts";
import { adminCheckLogin } from "../../hook/adminCheckLogin";
const AdminProductsControl = () => {
  adminCheckLogin()
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  const [products, setProducts] = useState<Products[]>([]);
  const [addNew,setAddNew]=useState(false)
  const [sortByPrice, setSortByPrice] = useState(false);
    useEffect(() => {
        instance.get('/Products').then((res) => setProducts(res.data));
      }, []);

      useEffect(() => {
        instance.get('/Products').then((res) => {// @ts-ignore
          const sortedProducts = sortByPrice ? res.data.filter(product => product.price >= 100 && product.price <= 500).sort((a, b) => b.price - a.price) : res.data;
          setProducts(sortedProducts);
        });
      }, [sortByPrice]);

  function openEditModal(productId: number) {
    setIsEdit(true);
    setProductId(productId);
  }

  function openDeleteModal(productId: number) {
    setIsDelete(true);
    setProductId(productId);
  }

  function confirmDelete() {
    instance.delete(`/Products/${productId}`).then(() => {
      setIsDelete(false);
      setProductId(null);   
      instance.get('/Products').then((res) => setProducts(res.data));
    });
  }
  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
  };
  return (
    <div className="control_products">
      <div className="control_products_head_content">
        <b>Danh sách sản phẩm</b>
      </div>
      <div className="control_products_content">
            <button  className="addNewButton" onClick={()=>setAddNew(true)}><i className="fa-solid fa-plus"></i> Tạo mới sản phẩm </button>
            </div>

            <div> 
              <button onClick={handleSortByPrice}> Sắp xếp giá từ 500 đến 100</button>
            </div>

      <div className="control_products_content">
      <table // @ts-ignore
       border="1px" width="100%" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img src=// @ts-ignore
                {product.Img} alt={product.name} className="ImageControl" />
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{// @ts-ignore
              product.amount}</td>
              <td>
                <div className="Actions">
                  <button onClick={() => openEditModal(product.id)}>Sửa</button>
                  <button onClick={() => openDeleteModal(product.id)}>Xóa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {isEdit && <EditProducts setIsEdit={setIsEdit} editProductId={productId} />}
      {addNew&& <AddNewProduct setAddNew={setAddNew}/>}
      {isDelete && (
        <div className="deleteModal">
          Are you sure to delete
          <div>
            <button onClick={() => setIsDelete(false)}>Close</button>
            <button onClick={confirmDelete}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductsControl;