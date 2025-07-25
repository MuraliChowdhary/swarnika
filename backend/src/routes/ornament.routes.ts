import { Router } from 'express';
import { isAuthenticated, isDesignCompany, isAdmin } from '../middleware/auth.middleware';
import {
  createOrnament,
  getAllOrnaments,
  getOrnamentById,
  updateOrnament,
  deleteOrnament,
  addFavorite,
  getUserFavorites,
  removeFavorite
} from '../controllers/ornament.controller';

const router = Router();

// Public routes (anyone can view)
router.get('/', getAllOrnaments);
router.get('/:id', getOrnamentById);

// Protected routes
router.post('/', isAuthenticated, isDesignCompany, createOrnament);
router.put('/:id', isAuthenticated, isDesignCompany, updateOrnament);
router.delete('/:id', isAuthenticated, isDesignCompany, deleteOrnament);

// Favorite routes
router.post('/:id/favorite', isAuthenticated, addFavorite);
router.get('/user/favorites', isAuthenticated, getUserFavorites);
router.delete('/:id/favorite', isAuthenticated, removeFavorite);


export default router;