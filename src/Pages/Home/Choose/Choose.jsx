import img5 from "../../../assets/icons/check.svg";
import img6 from "../../../assets/icons/deliveryt.svg";

// import img1 from "../../../assets/icons/group.svg";
import img1 from "../../../assets/icons/Group 38729.svg";
import img3 from "../../../assets/icons/person.svg";
import img2 from "../../../assets/icons/quote.svg";
import img4 from "../../../assets/icons/Wrench.svg";
const Choose = () => {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-[#FF3811] text-[20px] font-bold text-center">
          Core Features
        </h1>
        <h1 className="text-black text-5xl font-bold text-center mt-2">
          Why Choose Us
        </h1>
        <p className="text-[#867977]  font-bold text-center mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-5">
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img src={img1} alt="Shoes" className="rounded-xl h-[30px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img
                src={img2}
                alt="Shoes"
                className="rounded-xl bg-black h-[30px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Timely Delivery</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img src={img3} alt="Shoes" className="rounded-xl h-[30px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">24/7 Support</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img src={img4} alt="Shoes" className="rounded-xl h-[30px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Best Equipment</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img src={img5} alt="Shoes" className="rounded-xl h-[30px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Best Equipment</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-sm hover:bg-[#ff3911e0] hover:text-white">
            <figure className="px-2 pt-5">
              <img src={img6} alt="Shoes" className="rounded-xl h-[30px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Timely Delivery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
