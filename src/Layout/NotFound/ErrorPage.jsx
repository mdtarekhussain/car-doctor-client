import { useRouteError, Link } from "react-router-dom";
import img from "../../assets/images/banner/error.avif";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ textAlign: "center", marginTop: "30px", padding: "10px" }}>
        <h1 style={{ fontSize: "3rem", color: "red" }}>Oops! 😢</h1>
        <h2>Something went wrong!</h2>
        <p style={{ color: "gray", fontSize: "1.2rem" }}>
          {error?.statusText || error?.message || "Unknown Error Occurred"}
        </p>
        <img src={img} alt="" className="w-full h-[350px]" />
        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🔙 Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
