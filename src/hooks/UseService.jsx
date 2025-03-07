import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxios";

// const UseService = (asc) => {
//   const [service, SetService] = useState([]);
//   useEffect(() => {
//     axiosSecure(`/services?sort=${asc ? "asc" : "desc"}`).then((res) =>
//       SetService(res.data)
//     );
//   }, [asc]);
//   return service;
// };

const UseService = (asc, search) => {
  const [service, SetService] = useState([]);
  useEffect(() => {
    axiosSecure(`/services?sort=${asc ? "asc" : "desc"}&search=${search}`).then(
      (res) => SetService(res.data)
    );
  }, [asc, search]);
  return service;
};
export default UseService;
