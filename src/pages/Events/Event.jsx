/* eslint-disable react/prop-types */
const Event = ({ data }) => {
  const { name, image, price, description } = data || {};

  return (
    <div>
      <div>
        <img src={image} className="rounded-lg w-full" />
        <div className="flex gap-5 justify-center items-center mt-10">
        <h1 className="text-2xl font-bold">Interested in going? Book your Event now </h1>
        <button className="btn rounded-lg text-white bg-btnColor font-extrabold text-xl hover:bg-gray-500">Book Now at ${price}</button>
        </div>  
      </div>

      <div>
        <h1 className="text-3xl text-center font-bold py-10">{name}</h1>
        <p className="text-justify mb-20">{description}</p>
      </div>
    </div>
  );
};

export default Event;
