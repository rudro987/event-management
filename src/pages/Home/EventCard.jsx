/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, name, image, price, description } = event;
  return (
    <div className="card glassc rounded-md bg-slate-100">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-extrabold">{name}</h2>
        {description.length > 200 ? (
          <p className="leading-7 text-gray-500 text-lg">{description.slice(0, 200)}...</p>
        ) : (
          <p className="leading-7 text-gray-500 text-lg">{description}</p>
        )}
        <p className="font-bold text-xl py-2">Price: ${price}</p>
        <div className="card-actions justify-start">
          <Link to={`/eventdetails/${id}`} className="btn bg-btnColor font-semibold text-white hover:bg-gray-500">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
