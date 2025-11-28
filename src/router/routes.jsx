import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ActiveUsers from "../components/ActiveUsers";
import DailyRevenue from "../components/DailyRevenue";
import DailySales from "../components/DailySales";
import IncomeYearly from "../components/IncomeYearly";
import PremiumSubscriptions from "../components/PremiumSubscriptions";
import StandartSubscriptions from "../components/StandartSubscriptions";
import SupportTickets from "../components/SupportTickets";
import UserVisits from "../components/UserVisits";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <ActiveUsers /> },
            { path: '/daily_revenue', element: <DailyRevenue /> },
            { path: '/daily_sales', element: <DailySales /> },
            { path: '/income_yearly', element: <IncomeYearly /> },
            { path: '/premium_subscriptions', element: <PremiumSubscriptions /> },
            { path: '/standart_subscriptions', element: <StandartSubscriptions /> },
            { path: '/support_tickets', element: <SupportTickets /> },
            { path: '/user_visits', element: <UserVisits /> }
        ]
    }
])