import useJsonLoader from "../../Hooks/useJsonLoader";
import EventCard from "./EventCard";

const EvenetsCard = () => {
    const {data, loading} = useJsonLoader('events.json');
    if(loading) return <span className="loading loading-dots loading-lg"></span>
    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 px-5 lg:px-0">
            {
                data.map(event => <EventCard key={event.id} event={event}></EventCard>)
            }
        </div>
        
    );
};

export default EvenetsCard;