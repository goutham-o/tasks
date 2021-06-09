import express from 'express'
const router = express.Router()
import { createCustomer, getCustomer } from '../controllers/customer.js'


router.route('/create').post(createCustomer)
router.route('/').get(getCustomer)

export default router
