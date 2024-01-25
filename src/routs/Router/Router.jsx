import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../layout/Main/Main";
import HostingDashboard from "../../layout/HostingDashboard/HostingDashboard";
import Reservations from "../../pages/Reservations/Reservations";
import Earnings from "../../pages/Earnings/Earnings";

export const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element:<Main></Main>,
    //     children:[
    //         {
    //             path:'/',
    //             element:<HostingDashboard></HostingDashboard>,
                
    //         }
    //     ]
    // },

    
    {
        path: '/',
        element: <HostingDashboard></HostingDashboard>,
        children: [
            {
                path:'reservation',
                element: <Reservations></Reservations>

            },
            {
                path: 'earnings',
                element: <Earnings></Earnings>
            }
        ]
    }
])