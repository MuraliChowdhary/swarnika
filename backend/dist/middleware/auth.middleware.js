"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isDesignCompany = exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware to verify JWT token
const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authentication token required.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id, role: decoded.role }; // Attach user payload to request
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};
exports.isAuthenticated = isAuthenticated;
// Middleware to check for 'DesignCompany' role
const isDesignCompany = (req, res, next) => {
    var _a, _b;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'DesignCompany' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.role) !== 'Admin') {
        return res.status(403).json({ message: 'Forbidden: Access restricted to Design Companies.' });
    }
    next();
};
exports.isDesignCompany = isDesignCompany;
// Middleware to check for 'Admin' role
const isAdmin = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'Admin') {
        return res.status(403).json({ message: 'Forbidden: Access restricted to Admins.' });
    }
    next();
};
exports.isAdmin = isAdmin;
