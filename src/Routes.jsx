import App from './App.jsx'
import Delivery from './Components/Pages/Delivery.jsx'
import DiningOutList from './Components/Pages/DiningOutList.jsx'
import NightLife from './Components/Pages/NightLife.jsx'
import AksharDham from './Components/Places/AksharDham.jsx'
import Bestrest from './Components/Places/Bestrest.jsx'
import Mustres from './Components/Places/Mustres.jsx'
import Taj from './Components/Places/Taj.jsx'
const Routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "delivery",
        element: <Delivery />
    },
    {
        path: "diningoutlist",
        element: <DiningOutList />
    },
    {
        path: "nightlife",
        element: <NightLife />
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
    }



]
export default Routes