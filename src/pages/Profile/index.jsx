import { useState } from "react";
import $api, { API_URL } from "../../http";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState({})
  const navigate = useNavigate();
  const logout = async () => {
    await $api.post(`${API_URL}/api/auth/logout`);
    localStorage.removeItem("token");
    navigate("/");
  };

  const getUser = async () => {
    const user = await $api.post(`${API_URL}/api/auth/user`);
    setLoggedUser({...user.data})
  };

  return (
    <>
      <div>Dashboard</div>
      <h3>{loggedUser.email}</h3>
      <button onClick={logout}>logout</button>
      <button onClick={getUser}>getUser</button>
    </>
  );
};

export default Dashboard;
