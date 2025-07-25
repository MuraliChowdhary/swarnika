"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const ornament_routes_1 = __importDefault(require("./routes/ornament.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// API Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/ornaments', ornament_routes_1.default);
app.use('/api/categories', category_routes_1.default);
// Health Check Route
app.get('/', (req, res) => {
    res.send('GoldDesignHub API is running...');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
