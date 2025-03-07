import { useState } from "react";

import ServiceCard from "./ServiceCard";

import UseService from "../../../hooks/UseService";
const Services = () => {
  // const [service, setService] = useState([]);

  const [asc, SetAst] = useState(true);
  const [search, setSearch] = useState("");
  const service = UseService(asc, search);
  // useEffect(() => {
  //   axios(`http://localhost:5000/services?sort=${ast ? "ast" : "desc"}`).then(
  //     (res) => setService(res.data)
  //   );
  // }, []);
  const handleForm = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };
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
        <div className="bg-[#BEB5A9] py-4 justify-center flex">
          <h2
            style={{
              width: "20ch",
              fontSize: "50px",
              fontWeight: "800",
              background: "#6E3482",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap",
              overflow: "hidden",
              animation: "typing 2s steps(20) infinite alternate-reverse",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            Hello World
          </h2>

          <style>
            {`
      @keyframes typing {
        from {
          width: 0ch;
        }
        to {
          width: 20ch;
        }
      }
    `}
          </style>
        </div>

        <form className="mt-3" onSubmit={handleForm}>
          <input
            type="text"
            name="search"
            className="py-[6px] px-1 rounded-lg"
            placeholder="Search Him"
          />
          <input type="submit" value="Search" className="btn ml-2" />
        </form>
        <button onClick={() => SetAst(!asc)} className="btn btn-secondary mt-4">
          {asc ? "Pricer: High To Low" : "Pricer: Low to High"}
        </button>
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
