import { Router } from 'express';
import { isAuthenticated, isAdmin } from '../middleware/auth.middleware';
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
} from '../controllers/category.controller';

const router = Router();

// Public route
router.get('/', getAllCategories);

// Admin-only routes
router.post('/', isAuthenticated, isAdmin, createCategory);
router.put('/:id', isAuthenticated, isAdmin, updateCategory);
router.delete('/:id', isAuthenticated, isAdmin, deleteCategory);

export default router;
