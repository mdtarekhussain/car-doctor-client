import img1 from "../.././assets/images/checkout/checkout.png";
import img2 from "../../assets/images/banner/3.jpg";
import img3 from "../../assets/images/banner/2.jpg";
import img4 from "../../assets/logo.svg";
import { FaSimCard } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div className="mt-10">
      <div className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl bg-cover bg-no-repeat" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="pl-12 ">
            <h2 className="text-6xl text-white font-bold">Service Details</h2>
          </div>
          <div className="mt-[245px]  ">
            <button className="btn btn-outline btn-secondary py-5 rounded-t-3xl rounded-b-[6px]">
              Home/Service Details
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 gap-5 ">
        <div className="col-span-2  ">
          <div className="space-y-8">
            <img src={img2} alt="" className="h-[300px] w-full rounded-[5px]" />
            <div>
              <h1 className="text-[35px] font-bold">
                Unique Car Engine Service
              </h1>
              <p className="text-[#737373] mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there is not anything embarrassing
                hidden in the middle of text.{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
            <div className="bg-[#F3F3F3] border-2 border-white border-t-[#FF3811] px-10 py-8 rounded-[10px]">
              <h1 className="text-5 font-bold">Instant Car Services</h1>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="bg-[#F3F3F3] border-2 border-white border-t-[#FF3811] px-10 py-8 rounded-[10px]">
              <h1 className="text-5 font-bold">24/7 Quality Service</h1>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="bg-[#F3F3F3] border-2 border-white border-t-[#FF3811] px-10 py-8 rounded-[10px]">
              <h1 className="text-5 font-bold">Easy Customer Service</h1>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="bg-[#F3F3F3] border-2 border-white border-t-[#FF3811] px-10 py-8 rounded-[10px]">
              <h1 className="text-5 font-bold">Quality Cost Service</h1>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className=" text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text.{" "}
            </h1>
            <h1 className="mt-4 text-[#151515] text-[35px] font-bold">
              3 Simple Steps to Process
            </h1>
            <p className=" mt-2 text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col justify-center w-full items-center  py-4 px-7 rounded-[7px] bg-[#E8E8E8]">
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
              </h1>

              <div className="justify-center mt-2 text-center">
                <h1 className="text-5 font-bold">Step One</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full items-center  py-4 px-7 rounded-[7px] bg-[#E8E8E8]">
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
              </h1>

              <div className="justify-center mt-2 text-center">
                <h1 className="text-5 font-bold">Step Two</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full items-center  py-4 px-7 rounded-[7px] bg-[#E8E8E8]">
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
              </h1>

              <div className="justify-center mt-2 text-center">
                <h1 className="text-5 font-bold">Step Threee</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <img src={img3} alt="" className="rounded-[10px]" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#F3F3F3] rounded-[10px] px-7 py-5">
            <h1 className="text-8 font-bold text-black">Services</h1>
            <div className="mt-3 space-y-5">
              <button className="flex group justify-between bg-[#FFF] rounded-[6px] text-black font-semibold w-full items-center px-4 py-4 hover:bg-[#FF3811] hover:text-white">
                Full Car Repair{" "}
                <GoArrowRight className="text-[#FF3811] text-12 group-hover:text-white" />
              </button>
              <button className="flex group justify-between bg-[#FFF] rounded-[6px] text-black font-semibold w-full items-center px-4 py-4 hover:bg-[#FF3811] hover:text-white">
                Engine Repair
                <GoArrowRight className="text-[#FF3811] text-12 group-hover:text-white" />
              </button>
              <button className="flex group justify-between bg-[#FFF] rounded-[6px] text-black font-semibold w-full items-center px-4 py-4 hover:bg-[#FF3811] hover:text-white">
                Automatic Services
                <GoArrowRight className="text-[#FF3811] text-12 group-hover:text-white" />
              </button>
              <button className="flex group justify-between bg-[#FFF] rounded-[6px] text-black font-semibold w-full items-center px-4 py-4 hover:bg-[#FF3811] hover:text-white">
                Engine Oil Change
                <GoArrowRight className="text-[#FF3811] text-12 group-hover:text-white" />
              </button>
              <button className="flex group justify-between bg-[#FFF] rounded-[6px] text-black font-semibold w-full items-center px-4 py-4 hover:bg-[#FF3811] hover:text-white">
                Battery Charge
                <GoArrowRight className="text-[#FF3811] text-12 group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="bg-black rounded-[10px] px-7 py-5 mt-6">
            <h1 className="text-white text-2xl font-bold">Download</h1>
            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center items-center gap-3 ">
                <FaSimCard className="text-white text-2xl font-bold" />
                <div className="text-white text-5 font-bold">
                  <h1>Our Brochure</h1>
                  Download
                </div>
              </div>
              <div className="px-4 h-[35px] items-center flex rounded-[7px] bg-[#FF3811]">
                <GoArrowRight className="text-white font-extrabold text-[16px]" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaSimCard className="text-white text-2xl font-bold" />
                <div className="text-white text-5 font-bold">
                  <h1>Company Details</h1>
                  Download
                </div>
              </div>
              <div className="px-4 items-center h-[35px] flex rounded-[7px] bg-[#FF3811]">
                <GoArrowRight className="text-white  font-extrabold text-[16px]" />
              </div>
            </div>
          </div>
          <div className="bg-black rounded-[10px]  px-7 py-15 mt-6">
            <div className=" flex flex-col justify-center items-center">
              <img src={img4} className="w-[130px]" alt="" />

              <h1 className="text-[20px] items-center flex justify-center mt-2 font-bold text-white">
                Need Help? We Are Here <br />
                To Help You
              </h1>
            </div>
            <div className="relative justify-center  ">
              <div className="bg-[#FFF] rounded-[10px] px-5 py-5 text-center mt-3">
                <h1 className="text-[#FF3811] text-[20px] font-bold">
                  {" "}
                  Car Doctor<span className="text-black"> Special</span>
                </h1>
                <h1 className="bg-[#FFF] text-[16px] font-bold mb-8">
                  Save up to <span className="text-[#FF3811]">60% off</span>
                </h1>
              </div>
              <div className="absolute ml-[80px] -mt-8">
                <button className="px-4 py-2 rounded-[10px] text-white bg-[#FF3811] text-[18px] font-bold">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-[35px] font-bold text-black">Price $250.00</h1>
            <Link to={`/checkout/${id}`}>
              <button className="w-full bg-[#FF3811] rounded-[5px] text-[18px] font-bold text-white   mt-3 py-2 text-center">
                Proceed Checkout
              </button>
            </Link>
          </div>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
