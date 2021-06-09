import express from 'express'
const router = express.Router()
import { getMaps, getCompleted } from '../controllers/mapping.js'

router.route('/').get(getMaps)
router.route('/completed').get(getCompleted)
export default router
