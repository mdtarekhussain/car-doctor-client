import img1 from "../../../assets/images/team/Ellipse 2 (1).svg";
import img2 from "../../../assets/images/team/Ellipse 2.svg";

import { FcRating } from "react-icons/fc";
import { SiComma } from "react-icons/si";
const Customer = () => {
  return (
    <div className="mt-10 lg:mb-8">
      <h1 className="text-[#FF3811] text-[20px] font-bold text-center">
        Testimonial
      </h1>
      <h1 className="text-black text-5xl font-bold text-center mt-2">
        What Customer Says
      </h1>
      <p className="text-[#867977]  font-bold text-center mt-4">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="card bg-base-100 w-full shadow-sm px-10 py-10 space-y-4">
          <div className=" flex justify-between ">
            <div className="flex gap-5">
              <img src={img1} alt="" />
              <div className="">
                <h1 className="text-[25px] font-bold">Awlad Hossain</h1>
                <h1 className="text-[20px] font-semibold">Businessman</h1>
              </div>
            </div>
            <div className="flex ">
              <SiComma className="text-pink-500 h-13" />
              <SiComma className="text-pink-500 h-13" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>

            <div className="flex gap-1">
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm px-10 py-10 space-y-4">
          <div className=" flex justify-between ">
            <div className="flex gap-5">
              <img src={img2} alt="" />
              <div className="">
                <h1 className="text-[25px] font-bold">MD : TAREK HOSSAIN</h1>
                <h1 className="text-[20px] font-semibold">Businessman</h1>
              </div>
            </div>
            <div className="flex ">
              <SiComma className="text-pink-500 h-13" />
              <SiComma className="text-pink-500 h-13" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>

            <div className="flex gap-1">
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
              <h1 className="text-2xl">
                <FcRating />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
