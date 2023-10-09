import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServicesCard = ({ events }) => {
    const {id, name, image, description} = events;
  return (
    <div className="hero mb-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
      <div data-aos="flip-right">
      <img
          src={image}
          className="max-w-sm rounded-lg"
        />
      </div>
        
        <div className="text-center lg:text-left" data-aos="flip-left">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6 text-lg">
            {description.slice(0,300)} ...
          </p>
          <Link to={`/events/${id}`} className="btn bg-btnColor font-bold text-lg text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
