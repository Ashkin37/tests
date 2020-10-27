import express from 'express'
const router = express.Router()
import {
  getTests,
  getTestsById,
  deleteTest,
  createTest,
  updateTest,
  createTestReview,
  getTopTests,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createTest)
router.route('/:id/reviews').post(protect, createTestReview)
router.get('/top', getTopTests)
router
  .route('/:id')
  .get(getTestById)
  .delete(protect, admin, deleteTest)
  .put(protect, admin, updateTest)

export default router
