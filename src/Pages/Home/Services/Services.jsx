import { useEffect, useState } from "react";

import ServiceCard from "./ServiceCard";
const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mt-6">
      <div className="text-center space-y-3">
        <h1 className="text-orange-500 text-3xl font-bold">Service</h1>
        <h1 className="text-5xl font-bold ">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-9">
        {service.map((serCard) => (
          <ServiceCard key={serCard._id} serCard={serCard}></ServiceCard>
        ))}
        
      </div>
    </div>
  );
};

export default Services;
