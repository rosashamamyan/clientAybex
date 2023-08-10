import axios from "axios";
import $api, { API_URL } from "../../http";

const Dashboard = () => {
  const logout = async () => {
    console.log("logout");
    const x = await axios.post(`${API_URL}/api/auth/logout`);
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Dashboard;
