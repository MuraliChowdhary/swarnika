"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getAllCategories = exports.createCategory = void 0;
const prisma_service_1 = __importDefault(require("../db/prisma.service"));
// NOTE: These are placeholder functions. You would add the full logic here.
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Category name is required.' });
    }
    const category = yield prisma_service_1.default.category.create({
        data: {
            name,
            description: description || '',
        },
    });
    // Placeholder response
    // You would typically return the created category or some confirmation message
    res.status(201).json({ message: 'Category created successfully (placeholder)', category });
});
exports.createCategory = createCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma_service_1.default.category.findMany();
    res.status(200).json({ message: 'All categories fetched (placeholder)', categories });
});
exports.getAllCategories = getAllCategories;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: `Category with id ${req.params.id} updated (placeholder)` });
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: `Category with id ${req.params.id} deleted (placeholder)` });
});
exports.deleteCategory = deleteCategory;
