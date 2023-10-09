import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [noData,setNoData] = useState('');

    useEffect(() =>{
        const clickedEvents = JSON.parse(localStorage.getItem('events'));
        if(clickedEvents){
            setEvents(clickedEvents);
        }else{
            setNoData('You have not selected any event yet!');
        }
    }, [])

    return (
        <div className='pt-20 pb-20 max-w-[1440px] mx-auto'>
            {
                noData ? <p className='h-[40vh] lg:h-[70vh] flex justify-center items-center text-2xl lg:text-4xl'>{noData}</p> 
                : 
                <div className='p-2'>
                <div className=''>
                    {
                        events?.map(eventItems => <ServicesCard key={eventItems.id} events={eventItems}></ServicesCard>)
                    }
                </div>

                
                </div>}
        </div>
    );
};

export default Events;