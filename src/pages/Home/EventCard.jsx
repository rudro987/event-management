/* eslint-disable react/prop-types */

const EventCard = ({event}) => {
    const {name, image, price, description} = event;
    return (
        <div className="card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    );
};

export default EventCard;