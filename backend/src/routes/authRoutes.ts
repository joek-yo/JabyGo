// backend/src/routes/authRoutes.ts

import { Router } from 'express'
import { signup, login } from '../controllers/authController'
import { protect } from '../middleware/authMiddleware'

const router = Router()

router.post('/signup', signup)
router.post('/login', login)

// Example protected route
router.get('/me', protect, (req, res) => {
  res.json({ message: 'You are authorized!', user: req.user })
})

export default router
