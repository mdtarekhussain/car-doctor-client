import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" w-1/2 absolute right-5 top-1/2 border-7 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-3 p-4">
          <h1 className="text-[#FF3811] text-[20px] font-bold">About Us</h1>
          <h1 className="text-5xl w-[376px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary bg-[#FF3811] text-white ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
