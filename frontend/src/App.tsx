import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
const App = ()=>{

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/signup",
          element:<SignUp />
        }
      ]
    }    
  ])

  return <RouterProvider router={router}/>
}

export default App;