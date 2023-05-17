import App from './App.jsx'
import Login from './Components/Auth/Login.jsx'
import Register from './Components/Auth/Register.jsx'
import Delivery from './Components/Pages/Delivery.jsx'
import DiningOutList from './Components/Pages/DiningOutList.jsx'
import NightLifeList from './Components/Pages/NightLifeList.jsx'
import AksharDham from './Components/Places/AksharDham.jsx'
import Bestrest from './Components/Places/Bestrest.jsx'
import Mustres from './Components/Places/Mustres.jsx'
import Pubs from './Components/Places/Pubs.jsx'
import Taj from './Components/Places/Taj.jsx'
const Routes = [
    {
        path: "/",
        element: <App />
    },

    {
        path: "diningoutlist",
        element: <DiningOutList />
    },
    {
        path: "nightlifelist",
        element: <NightLifeList />
    },
    {
        path: "taj",
        element: <Taj />
    },
    {
        path: "akshardham",
        element: <AksharDham />
    },
    {
        path: "mustvisitrestaurantinagra",
        element: <Mustres />
    },
    {
        path: "bestindianrestaurant",
        element: <Bestrest />
    },
    {
        path: "pubs",
        element: <Pubs />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "login",
        element: <Login />
    }



]
export default Routes