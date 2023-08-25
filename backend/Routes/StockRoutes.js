import express from 'express'
import { createStock, deleteStock, getAllStock, getStock, updateStock } from '../DAO/StockDao.js';

const Stockrouter = express.Router();

Stockrouter.get('/',getAllStock);
Stockrouter.get('/:id',getStock);
Stockrouter.post('/create',createStock);
Stockrouter.put('/update/:id',updateStock);
Stockrouter.delete('/:id',deleteStock);



export default Stockrouter;