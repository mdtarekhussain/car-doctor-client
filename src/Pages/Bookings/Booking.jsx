const Booking = ({ booking, handleDelete, bookingConfirm, status }) => {
  const {
    _id,
    date,
    img,
    service,

    price,
  } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn   btn-square">
          X
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded  h-24 w-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>

      <th>
        {status === "confirm" ? (
          <span className="text-green-500 font-bold text-8">confirm</span>
        ) : (
          <button
            onClick={() => bookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Place Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default Booking;
