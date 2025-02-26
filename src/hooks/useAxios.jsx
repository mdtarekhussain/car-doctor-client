import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../Private/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
const useAxios = () => {
  const navig = useNavigate();
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("message error :", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then((result) => {
              console.log(result.user);
              navig("/login");
            })
            .catch((error) => {
              console.log("error", error.message);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
