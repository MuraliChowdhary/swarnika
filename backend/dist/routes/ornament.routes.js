"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const ornament_controller_1 = require("../controllers/ornament.controller");
const router = (0, express_1.Router)();
// Public routes (anyone can view)
router.get('/', ornament_controller_1.getAllOrnaments);
router.get('/:id', ornament_controller_1.getOrnamentById);
// Protected routes
router.post('/', auth_middleware_1.isAuthenticated, auth_middleware_1.isDesignCompany, ornament_controller_1.createOrnament);
router.put('/:id', auth_middleware_1.isAuthenticated, auth_middleware_1.isDesignCompany, ornament_controller_1.updateOrnament);
router.delete('/:id', auth_middleware_1.isAuthenticated, auth_middleware_1.isDesignCompany, ornament_controller_1.deleteOrnament);
// Favorite routes
router.post('/:id/favorite', auth_middleware_1.isAuthenticated, ornament_controller_1.addFavorite);
router.get('/user/favorites', auth_middleware_1.isAuthenticated, ornament_controller_1.getUserFavorites);
router.delete('/:id/favorite', auth_middleware_1.isAuthenticated, ornament_controller_1.removeFavorite);
exports.default = router;
