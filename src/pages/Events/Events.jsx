
import { useParams } from "react-router-dom";
import useJsonLoader from "../../Hooks/useJsonLoader";
import Event from "./Event";
import { useEffect, useState } from 'react';

const Events = () => {
    const [singleEvent, setSingleEvent] = useState({});
    const {id} = useParams();
    const {data, loading} = useJsonLoader('../../../events.json');
    
    useEffect(() => {
        const foundEvent = data?.find(event => event.id == id);
        setSingleEvent(foundEvent);
    }, [data, id, loading]);
    
    return (
        <div>
            <Event data={singleEvent}></Event>
        </div>
    );
};

export default Events;