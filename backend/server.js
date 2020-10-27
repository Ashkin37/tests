import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products';

dotenv.config()

const app = express 


const express = require('express')
const app = express()
app.listen(5000, console.log('server running on port 5000'))