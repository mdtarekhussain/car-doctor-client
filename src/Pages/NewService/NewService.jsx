// import { useLoaderData } from "react-router-dom";
import img1 from "../.././assets/images/checkout/checkout.png";

const NewService = () => {
  // const services = useLoaderData();
  // const { title, _id, price } = services;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl bg-cover bg-no-repeat" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="pl-12 ">
            <h2 className="text-[55px] text-white font-bold">
              Add New Service
            </h2>
          </div>
          <div className="mt-[247px] ">
            <button className="btn btn-outline btn-secondary px-[27px] py-5 rounded-t-3xl rounded-b-[6px]">
              Home/Service
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] mt-12 px-15 py-15">
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="flex gap-8">
              <input
                type="text"
                name="service"
                placeholder="Service Name"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
              <input
                type="text"
                name="price"
                placeholder="Service Price"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
            </div>
            <div className="flex gap-8">
              <input
                type="text"
                name="text"
                placeholder="Text here"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
              <input
                type="text"
                name="type"
                placeholder="Service Type"
                id=""
                className="w-full bg-[#FFF] rounded-[10px] text-[16px] font-semibold text-[#A2A2A2] px-4 py-3"
              />
            </div>
          </div>
          <div className="mt-6">
            <textarea
              name="description"
              className="w-full h-[250px] rounded-[10px] bg-[#FFF] p-6"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              type="submit"
              className="bg-[#FF3811] text-center py-3 w-full text-white  rounded-[10px]"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewService;
