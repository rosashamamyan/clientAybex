import { useForm } from "react-hook-form";
import { login } from "../../service/Auth";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (loginData) => {
    const {email, password, isRemembered} = loginData
    const data = await login({
      email,
      password
    });
    if (data) {
      localStorage.setItem("isRemembered", isRemembered)
      localStorage.setItem("token", data.data.accessToken);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="login-input">
            <label>Email</label>
            <input type="email" {...register("email", { required: true })} />
          </div>
          <div className="login-input">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="remember-me">
            <div>
              <input type="checkbox" {...register("isRemembered")}/>
              <label>Remember me</label>
            </div>
            <p>
              <a href="#" className="login-link">
                Forgot password?
              </a>
            </p>
          </div>
          <div className="agree">
            <input type="checkbox" />
            <p>
              I agree with the boring fine print (
              <a href="#" className="login-link">
                Terms of use
              </a>
              )
            </p>
          </div>
          <div className="form-btns">
            <button className="login-btn">Login</button>
            <button
              className="login-btn login-btn-pr"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              go to register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
