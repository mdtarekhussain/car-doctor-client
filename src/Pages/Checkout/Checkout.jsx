import { Link, useLoaderData } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../.././assets/images/checkout/checkout.png";
import { useContext } from "react";
import AuthContext from "../../Private/AuthProvider";
import Swal from "sweetalert2";
const Checkout = () => {
  const services = useLoaderData();
  const { title, _id, price, img } = services;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const email = user?.email;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      message,
      date,
      img,
      service: title,
      Service_id: _id,
      price: price,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success", // ✅ Use a valid icon
            title: "Booking success",
            text: "Your booking has been confirmed!",
          });
          if (data.acknowledged === true) {
            navigate(location?.state ? location?.state : "/");
          }
        }
      });
  };
  return (
    <div>
      <div className="carousel-item relative mt-8 w-full">
        <img src={img1} className="w-full rounded-xl bg-cover bg-no-repeat" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="pl-12 ">
            <h2 className="text-6xl text-white font-bold">Check Out</h2>
          </div>
          <div className="mt-[247px] ml-[120px] ">
            <button className="btn btn-outline btn-secondary py-5 rounded-t-3xl rounded-b-[6px]">
              Home/Check Out
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] mt-12 px-15 py-15">
        <h1 className="text-center mb-4 text-2xl">
          CheckOut: <span className="text-pink-500 font-bold">{title}</span>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="flex gap-8">
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                placeholder="First Name"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
              <input
                type="date"
                name="date"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
            </div>
            <div className="flex gap-8">
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
              <input
                type="text"
                name="taka"
                defaultValue={"$" + price}
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
            </div>
          </div>
          <div className="mt-6">
            <textarea
              name="message"
              className="w-full h-[250px] rounded-[10px] bg-[#FFF] p-6"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              type="submit"
              className="bg-[#FF3811] text-center py-3 w-full text-white  rounded-[10px]"
              value="Order Confirm"
            />
          </div>
          <div className="mt-5">
            <Link to={`/newService/${_id}`}>
              <button className="bg-pink-500 text-center py-3 w-full text-white   rounded-[10px]">
                Add Nwe Service
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
