import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/tests';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


import testRoutes from './routes/testRoutes.js';

dotenv.config()

connectDB()

const app = express 


const express = require('express')
const app = express()
app.listen(5000, console.log('server running on port 5000'))