import express from 'express'

import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getOrders, getOrderById, addOrder, updateOrder, removeOrder, addOrderMsg, removeOrderMsg } from './order.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getOrders)
router.get('/:id', log, getOrderById)
router.post('/', log, requireAuth, addOrder)
router.put('/:id', log, requireAuth, updateOrder)
router.delete('/:id', requireAuth, removeOrder)
// router.delete('/:id', requireAuth, requireAdmin, removeOrder)

router.post('/:id/msg', requireAuth, addOrderMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeOrderMsg)

export const orderRoutes = router