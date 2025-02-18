import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import AuthContext from "../../Private/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        const user = { email };

        console.log("✅ Logged In User:", loggedUser); // Debugging

        if (result.user.email) {
          axios
            .post("http://localhost:5000/jwt", user, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("🎯 JWT Response:", res.data);

              if (res.data.success) {
                Swal.fire({
                  icon: "success",
                  title: "Login success",
                  text: "You are successfully logged in!",
                });

                navigate(location?.state ? location?.state : "/");
              }
            });
        }
      })
      .catch((error) => {
        console.error("❌ Login Error:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen mt-6">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 flex mr-7">
          <img src={svg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Login"
              />
            </fieldset>
            <p className="text-center ">
              New to Car Doctor
              <Link to="/singUp" className="btn btn-link">
                Sing UP
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
