import useJsonLoader from "../../Hooks/useJsonLoader";
import EventCard from "./EventCard";

const EvenetsCard = () => {
    const {data, loading} = useJsonLoader('events.json');
    if(loading) return <div>Loading... </div>
    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map(event => <EventCard key={event.id} event={event}></EventCard>)
            }
        </div>
        
    );
};

export default EvenetsCard;