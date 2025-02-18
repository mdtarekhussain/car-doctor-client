import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Private/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [data1, setData] = useState([]);

  useEffect(() => {
    if (!user) {
      return <p>Loading...</p>; // বা রিডাইরেক্ট করো
    }

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    axios
      .get(url, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/bookings/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
              setData((prevData) =>
                prevData.filter((booking) => booking._id !== id)
              );
            }
          })
          .catch((err) => console.error("Error deleting booking:", err));
      }
    });
  };

  const bookingConfirm = (id) => {
    axios
      .put(
        `http://localhost:5000/bookings/${id}`,
        { status: "confirm" },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success!", "Your booking has been confirmed!", "success");
          setData((prevData) =>
            prevData.map((booking) =>
              booking._id === id ? { ...booking, status: "confirm" } : booking
            )
          );
        }
      })
      .catch((err) => console.error("Error updating booking:", err));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <h1>Please log in to see your bookings</h1>;
  }

  return (
    <div>
      <h1>Bookings: {data1.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Services</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data1.length > 0 ? (
              data1.map((booking) => (
                <Booking
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  bookingConfirm={bookingConfirm}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
