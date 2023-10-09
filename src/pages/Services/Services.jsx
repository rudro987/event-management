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
            setNoData('You have not donated yet!');
        }
    }, [])

    return (
        <div className='pt-52 pb-44'>
            {
                noData ? <p className='h-[70vh] flex justify-center items-center'>{noData}</p> 
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