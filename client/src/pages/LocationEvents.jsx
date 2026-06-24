import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index)
                setLocation(locationData)
                const eventsData = await EventsAPI.getEventsByLocation(index)
                setEvents(eventsData)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image_url} />
                </div>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                </div>
            </header>
            <main>
                {events && events.length > 0 ? events.map((event) =>
                    <Event
                        key={event.id}
                        id={event.id}
                        title={event.name}
                        date={event.date}
                        image_url={event.image_url}
                        time={event.time}
                    />
                ) : <h2>No events scheduled at this location yet!</h2>}
            </main>
        </div>
    )
}

export default LocationEvents