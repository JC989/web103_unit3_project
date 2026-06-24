import { pool } from '../config/database.js'

export const getEventsByLocation = async (req, res) => {
    try {
        const { location_id } = req.params
        const result = await pool.query(
            'SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC',
            [location_id]
        )
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events ORDER BY date ASC')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}