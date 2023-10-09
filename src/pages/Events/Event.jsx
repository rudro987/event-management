import { ToastContainer, toast } from "react-toastify";

/* eslint-disable react/prop-types */
const Event = ({ data }) => {
  const {id, name, image, price, description } = data || {};
  const handleClick = () => {
    const clickedEventArray = [];
    const clickedEvent = JSON.parse(localStorage.getItem('events'));
    if(!clickedEvent){
      clickedEventArray.push(data);
        localStorage.setItem('events', JSON.stringify(clickedEventArray));
        toast("Thank you for selecting us for your event!");
    }else{
        const isExist = clickedEvent.find(item => item.id == id);
        if(!isExist){
          clickedEventArray.push(...clickedEvent, data);
            localStorage.setItem('events', JSON.stringify(clickedEventArray));
            toast("Thank you for selecting us for your event!");
        }else{
            toast(`Already selected this event. Please go back and check some more!`);
        }
        
    }
}


  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <div data-aos="zoom-in"><img src={image} className="rounded-lg w-full" /></div>
        <div className="flex-col text-center lg:flex gap-5 justify-center items-center mt-10" data-aos="slide-up">
        <h1 className="text-3xl font-bold">Interested in going? Book your Event now </h1>
        <button onClick={handleClick} className="btn rounded-lg text-white bg-btnColor font-extrabold text-xl hover:bg-gray-500">Book Now at ${price}</button>
        </div>  
      </div>

      <div data-aos="slide-down">
        <h1 className="text-6xl text-center font-bold py-10">{name}</h1>
        <p className="text-justify mb-20 text-xl leading-8 px-5 lg:px-0">{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default Event;
