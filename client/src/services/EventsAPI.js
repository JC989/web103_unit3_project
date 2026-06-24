const API_URL = '/api/events'

const EventsAPI = {
    getAllEvents: async () => {
        const response = await fetch('/api/events')
        return await response.json()
    },
    getEventsByLocation: async (location_id) => {
        const response = await fetch(`/api/events/${location_id}`)
        return await response.json()
    }
}

export default EventsAPI