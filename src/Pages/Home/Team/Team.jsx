import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Team = () => {
  return (
    <div className="mt-10">
      <h1 className="text-[#FF3811] text-[20px] font-bold text-center">Team</h1>
      <h1 className="text-black text-5xl font-bold text-center mt-2">
        Meet Our Team
      </h1>
      <p className="text-[#867977]  font-bold text-center mt-4">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div className="card bg-base-100 w-full shadow-sm py-">
          <figure className="px-2 pt-5">
            <img src={img1} alt="Shoes" className="rounded-xl h-[200px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="items-center justify-center flex gap-4 mt-2">
              <h1>
                {" "}
                <IoLogoFacebook className="text-3xl text-sky-900" />
              </h1>
              <h1>
                {" "}
                <FaTwitter className="text-3xl text-blue-600" />
              </h1>
              <h1>
                {" "}
                <FaLinkedin className="text-3xl text-blue-400" />
              </h1>
              <h1>
                {" "}
                <FaSquareInstagram className="text-3xl text-red-400" />
              </h1>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm py-">
          <figure className="px-2 pt-5">
            <img src={img2} alt="Shoes" className="rounded-xl h-[200px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="items-center justify-center flex gap-4 mt-2">
              <h1>
                {" "}
                <IoLogoFacebook className="text-3xl text-sky-900" />
              </h1>
              <h1>
                {" "}
                <FaTwitter className="text-3xl text-blue-600" />
              </h1>
              <h1>
                {" "}
                <FaLinkedin className="text-3xl text-blue-400" />
              </h1>
              <h1>
                {" "}
                <FaSquareInstagram className="text-3xl text-red-400" />
              </h1>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm py-">
          <figure className="px-2 pt-5">
            <img src={img3} alt="Shoes" className="rounded-xl h-[200px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="items-center justify-center flex gap-4 mt-2">
              <h1>
                {" "}
                <IoLogoFacebook className="text-3xl text-sky-900" />
              </h1>
              <h1>
                {" "}
                <FaTwitter className="text-3xl text-blue-600" />
              </h1>
              <h1>
                {" "}
                <FaLinkedin className="text-3xl text-blue-400" />
              </h1>
              <h1>
                {" "}
                <FaSquareInstagram className="text-3xl text-red-400" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
