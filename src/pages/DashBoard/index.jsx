import { useNavigate } from "react-router-dom";
import DashboardBlock1 from "../../components/Modals/DashBoard/DashboardBlock1";
import DashBoardBlock2 from "../../components/Modals/DashBoard/DashBoardBlock2";
import DashBoardBlock3 from "../../components/Modals/DashBoard/DashBoardBlock3";
import {GiGreekTemple} from 'react-icons/gi'
import {PiUsersThreeBold} from 'react-icons/pi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {BsPhone, BsPlusSquare} from 'react-icons/bs'
import './style.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-bg">
        <small>Ibex Aspen Ideas Conference 2021</small>
      </div>
      <div className="dashboards">
        <DashboardBlock1 Icon={<GiGreekTemple />} title={"Balances"} buttonText1={"upload"} buttonText2={"manage"} mode={"darkMode"} navigateTo={navigateTo} path1={"/dashboard/balanceUpload"} path2={"/dashboard/balanceManagment"}/>
        <DashboardBlock1 Icon={<PiUsersThreeBold />} title={"User Managment"} buttonText1={"view all"} buttonText2={"+ new user"} mode={"lightMode"} navigateTo={navigateTo} path1={"/dashboard/userManagment"} path2={"/dashboard/userManagment"}/>
        <DashBoardBlock3  navigateTo={navigateTo} path={"/dashboard/accountManagment"}/>
        <DashboardBlock1 Icon={<HiOutlineDocumentText />} title={"Documents"} buttonText1={"upload"} buttonText2={"manage"} mode={"darkMode"} navigateTo={navigateTo} path1={"/dashboard/documentUpload"} path2={"/dashboard/documentManagment"}/>
        <DashBoardBlock2 Icon={<BsPhone />} title={"Push Notifications"} mode={"lightMode"} navigateTo={navigateTo} path={"/dashboard/pushNotifications"}/>
        <DashBoardBlock2 Icon={<BsPlusSquare />} title={"Subscription Managment"} mode={"blackMode"} navigateTo={navigateTo} path={"/dashboard/subscriptionManagment"}/>
      </div>
    </div>
  );
};

export default Dashboard;
