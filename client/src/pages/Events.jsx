import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await EventsAPI.getAllEvents()
                setEvents(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    return (
        <div>
            <h1>All Events</h1>
            <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {events && events.length > 0 ? events.map((event) =>
                    <Event
                        key={event.id}
                        id={event.id}
                        title={event.name}
                        date={event.date}
                        image_url={event.image_url}
                        time={event.time}
                    />
                ) : <h2>No events found!</h2>}
            </main>
        </div>
   )
}

export default Events