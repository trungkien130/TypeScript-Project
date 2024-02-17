
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

