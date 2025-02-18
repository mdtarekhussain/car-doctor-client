import { Link } from "react-router-dom";
import svg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import AuthContext from "../../Private/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
  const { NewUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    NewUser(email, password, name)
      .then((result) => {
        console.log(result.user);
        if (result.user.email) {
          Swal.fire({
            icon: "success", // ✅ Use a valid icon
            title: "Booking success",
            text: "Your Sing Up is confirmed!",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log("error", error.message);
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
            <h1 className="text-3xl font-bold text-center">Sing Up</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Name"
              />
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
                value="Sign Up"
              />
            </fieldset>
            <p className="text-center ">
              Already Have a Account
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
