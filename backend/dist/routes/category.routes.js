"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const category_controller_1 = require("../controllers/category.controller");
const router = (0, express_1.Router)();
// Public route
router.get('/', category_controller_1.getAllCategories);
// Admin-only routes
router.post('/', auth_middleware_1.isAuthenticated, auth_middleware_1.isAdmin, category_controller_1.createCategory);
router.put('/:id', auth_middleware_1.isAuthenticated, auth_middleware_1.isAdmin, category_controller_1.updateCategory);
router.delete('/:id', auth_middleware_1.isAuthenticated, auth_middleware_1.isAdmin, category_controller_1.deleteCategory);
exports.default = router;
