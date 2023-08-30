import { useRoutes } from "react-router-dom";
import Sign from "../pages/Sign";
import Layout from "../components/Layout";
import AccountManagment from "../pages/AccountManagment";
import AdminManagment from "../pages/AdminManagment";
import AdminNotifications from "../pages/AdminNotification";
import BalanceUpload from "../pages/BalanceUpload";
import BalanceManagment from "../pages/BalanceManagment";
import CapitalCallManagment from "../pages/CapitalCallManagment";
import DocumentUpload from "../pages/DocumentUpload";
import DocumentManagment from "../pages/DocumentManagment";
import EventManagment from "../pages/EventManagment";
import IndicationManagment from "../pages/IndicationManagment";
import NewsfeedManagment from "../pages/NewsfeedManagment";
import PushNotifications from "../pages/PushNotifications";
import StrategyManagment from "../pages/StrategyManagment";
import SubscriptionManagment from "../pages/SubscriptionManagment";
import UserManagment from "../pages/UserManagment";
import Dashboard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import ContactInfo from "../pages/Profile/ContactInfo";
import InvestorFunds from "../pages/Profile/InvestorFunds";
import InvestorEntities from "../pages/Profile/InvestorEntities";
import Documents from "../pages/Profile/Documents";
import AddEditStrategy from "../pages/AddEditStrategy";
import StrategyOverView from "../pages/AddEditStrategy/StrategyOverview";
import Universal from "../pages/DocumentUpload/Universal";
import StrategySpecific from "../pages/DocumentUpload/StrategySpecific";
import SubFundSpecific from "../pages/DocumentUpload/SubFundSpecific";
import AccountSpecific from "../pages/DocumentUpload/AccountSpecific";
function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Sign />,
    },
    {
      path: '/dashboard',
      element: <Layout />,
      children: [
         {
            path: "",
            element: <Dashboard />,
         },
         {
            path: "accountManagment",
            element: <AccountManagment />,
         },
         {
            path: "adminManagment",
            element: <AdminManagment />,
         },
         {
            path: "adminNotifications",
            element: <AdminNotifications />,
         },
         {
            path: "balanceUpload",
            element: <BalanceUpload />,
         },
         {
            path: "balanceManagment",
            element: <BalanceManagment />,
         },
         {
            path: "capitalCallManagment",
            element: <CapitalCallManagment />,
         },
         {
            path: "documentUpload",
            element: <DocumentUpload />,
            children: [
               {
                  path: "",
                  element: <Universal />
               },
               {
                  path: "universal",
                  element: <Universal />
               },
               {
                  path: "strategySpecific",
                  element: <StrategySpecific />
               },
               {
                  path: "subFundSpecific",
                  element: <SubFundSpecific />
               },
               {
                  path: "accountSpecific",
                  element: <AccountSpecific />
               },
            ]
         },
         {
            path: "documentManagment",
            element: <DocumentManagment />,
         },
         {
            path: "eventManagment",
            element: <EventManagment />,
         },
         {
            path: "indicationManagment",
            element: <IndicationManagment />,
         },
         {
            path: "newsfeedManagment",
            element: <NewsfeedManagment />,
         },
         {
            path: "pushNotifications",
            element: <PushNotifications />,
         },
         {
            path: "strategyManagment",
            element: <StrategyManagment />,
         },
         {
            path: "subscriptionManagment",
            element: <SubscriptionManagment />,
         },
         {
            path: "userManagment",
            element:  <UserManagment />
         },
         {
            path: "userManagment/viewProfile/:id",
            element: <Profile />,
            children: [
               {
                  path: "",
                  element: <ContactInfo />
                },
                {
                  path: "contactInfo",
                  element: <ContactInfo />
                },
               {
                  path: "investorFunds",
                  element: <InvestorFunds />
               },
               {
                  path: "investorEntities",
                  element: <InvestorEntities />
               },
               {
                  path: "documents",
                  element: <Documents />
               }
            ]
         },
         {
            path: "strategyManagment/addEditStrategy/:id",
            element: <AddEditStrategy />,
            children: [
               {
                  path: "",
                  element: <StrategyOverView />
               }
            ]
         },
         {
            path: "strategyManagment/addEditStrategy",
            element: <AddEditStrategy />,
            children: [
               {
                  path: "",
                  element: <StrategyOverView />
               }
            ]
         }
      ]
    },
  ]);
  return element;
}

export default Router;
