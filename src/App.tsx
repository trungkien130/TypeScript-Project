
import './App.css'
import Home from './page/Home'
import Header from './page/Header'
import Footer from './page/Footer'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './page/Signup'
import Login from './page/Login'
import Admin from './page/Admin/Admin'
import AdminHeader from './page/Admin/Admin-Header'
import UserProfile from './page/UserProfile'
import ProductsDetail from './page/ProductsDetail'
import EditProducts from './page/EditProducts'
import AdminProductsControl from './page/Admin/Admin-Products-control'
import { Provider } from 'react-redux'
import { store } from './store'
import AdminUsersControl from './page/Admin/Admin-User-control'


const Layout = () => {

  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>
}
const AdminLayout=()=>{
  return <div>
    <AdminHeader></AdminHeader>
    <Outlet/>
  </div>
}
function App() {
const router=createBrowserRouter([
  {
    path:"/admin",
    element:<AdminLayout/>,
    children:[
        {
          path:"",
          element:<Admin/>
        },
        {
          path: "controlProducts",
          element: <AdminProductsControl/>
        },
        {
          path: "controlUsers",
          element: <AdminUsersControl/>
        },

    ]
  },
    {
      path:"/",
      element:  <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/home",
          element:<Home/>
        },
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          // @ts-ignore
          element:<Signup/>
        },
        {
          path:"/userProfile",
          element:<UserProfile/>
        },
        {
          path:"/productsDetail/:id",
          element:<ProductsDetail/>
        },
        {
          path:"/editproducts/:id",
          // @ts-ignore
          element:<EditProducts/>
        },
  
      ]
  
    }
  
])
  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  )
}

export default App


/* Lý thuyêt
 react Redux: dùng để chia sẻ và cập nhật dữ liệu qua các component ko p qua các tầng
 flow của redux:
 3 thành phần chính 
 action
 store
 vỉew 
 */

/* Lý Thuyết
//prop:
+ khái niệm: là để truyền dữ liệu từ compoment cha xuống con là dữ liệu chỉ đọc không thể thay đổi dữ liệu cha muốn thay đổi chúng ta dùng state
+có thể nhận vô số kiểu dữ liệu
+1 compoment có thể nhận vô số các prop

state:
//biến được lưu trữ trong các reac trong các compoment nhằm mục đích tạo ra các sự thay đổi và cập nhập sự thay dổi đó ra giao diện
//không truyền giữ liệu giữa các compoment và chỉ sử dụng trong 1 compoment
có thể nhận vô số kiểu dữ liệu
chúng ta khởi tạo một state khi chúng ta muốn thay đổi  1 biến số trong compoment và cập  nhận sự thay đổi đó ra ui
sau khi state thay đổi thì compoment sẽ render lại với giá trị mới của state
compoment có state là :state full
compoment ko có state là: state less
controll compoment: compoment render mỗi khi mà cái state thay đổi 
uncontrol compoment: react sẽ không kiểm soát các giá trị của state mà DOM sẽ theo giõi các giá trị đầu vào 
muốn lấy giá trị của cái input mà ko dúng state chung ta dùng DOM (dung DOM trong react gán cho DOM 1 cái ref để xác định vị trí và lấy giá trị)

form :
// prop dùng để truyền từ compoment cha xuông con
//prop truyền dữ liệu nhưng mà không thể thay đổi
context:cung cấp 1 cầu nối để tương tác trực tiếp giữa các component có thể cập nhật trực tiếp chứ ko cần p đi qua từng tầng 1
Context cung cấp một cách để chia sẻ giá trị giữa các component mà không cần truyền qua nhiều cấp cha.
có thể truyền nhiều kiểu dữ liệu
Mảng: [1, 2, 3], ["apple", "orange", "banana"].
function myFunction() {  logic }.
hook: lưu trữ logic và các biến số
có 2 loại là buil in là các hook có sẵn
Effect hook : chỉ sự dụng 1 lần khi render
có thể viết nhiều trong 1 component
useeffect: được sử dụng khi mà mình muốn thay đổi 1 cái phụ thuộc nào đấy trong quá trình sử dụng (
mounting:sau khi render ra giao diện thì nó sẽ gọi vào useffect (nhảy vào 1 lần khi khởi tạo
updateting: xảy ra sau mỗi lần component được re-render do sự thay đổi của props hoặc state.
unmounting:nó sẽ nhảy vào return trong useffect  trước khi mà component unmounting))
có thể sử dụng nhiều useffect trong 1 component
return sử dụng khi cần xóa hoặc ngừng (clear) những cái hành động có thể tiếp diễn khi component đã unmounting 

mounting:render ra UI (khi component đang được khởi tạo ra và hiển thị ra )
updateting:mỗi lần khởi tạo thì sẽ thực thi một lần (khi component đã hoàn thiện và người dùng có thể sử dụng và tương tác nó)
unmounting:( khi conponent không sử dụng nữa và biến mất)
*/
