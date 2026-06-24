import express from 'express'
import { getAllEvents, getEventsByLocation } from '../controllers/public_events.js'

const router = express.Router()

router.get('/', getAllEvents)
router.get('/:location_id', getEventsByLocation)

export default router