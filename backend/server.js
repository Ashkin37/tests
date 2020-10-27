import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/tests';

import testRoutes from './routes/testRoutes.js';

dotenv.config()

const app = express 


const express = require('express')
const app = express()
app.listen(5000, console.log('server running on port 5000'))