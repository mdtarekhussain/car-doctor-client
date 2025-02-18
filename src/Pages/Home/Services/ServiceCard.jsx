import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const ServiceCard = ({ serCard }) => {
  const { _id, img, title, price } = serCard;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>

        <div className="flex justify-between">
          <p className="text-[#FF3811] text-5 font-[500]">Price :{price}$</p>
          <Link to={`/ServiceDetails/${_id}`}>
            {" "}
            <h1>
              <GoArrowRight className="text-[30px] text-[#FF3811] " />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
