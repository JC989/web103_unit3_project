const LocationsAPI = {
    getAllLocations: async () => {
        const response = await fetch('/api/locations')
        return await response.json()
    },
    getLocationById: async (id) => {
        const response = await fetch(`/api/locations/${id}`)
        return await response.json()
    }
}

export default LocationsAPI