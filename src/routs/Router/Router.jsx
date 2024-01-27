import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../layout/Main/Main";
import HostingDashboard from "../../layout/HostingDashboard/HostingDashboard";
import Reservations from "../../pages/Reservations/Reservations";
import Earnings from "../../pages/Earnings/Earnings";
import Insights from "../../pages/Insights/Insights";
import GuideBooks from "../../pages/GuideBooks/GuideBooks";
import CreateNewList from "../../pages/CreateNewList/CreateNewList";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Profile from "../../pages/Profile/Profile";
import PrivateRout from "./PrivateRout";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    },


    {
        path: 'hosing-dashboard',
        element: <PrivateRout><HostingDashboard></HostingDashboard></PrivateRout>,
        children: [
            {
                path:'reservation',
                element: <Reservations></Reservations>

            },
            {
                path: 'earnings',
                element: <Earnings></Earnings>
            },
            {
                path: 'insights',
                element: <Insights></Insights>
            },
            {
                path: 'guide-books',
                element: <GuideBooks></GuideBooks>
            },
            {
                path: 'create-new-list',
                element: <CreateNewList></CreateNewList>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    }
])