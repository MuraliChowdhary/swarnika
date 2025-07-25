import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import ornamentRoutes from './routes/ornament.routes';
import categoryRoutes from './routes/category.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/ornaments', ornamentRoutes);
app.use('/api/categories', categoryRoutes);


// Health Check Route
app.get('/', (req: Request, res: Response) => {
  res.send('GoldDesignHub API is running...');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
