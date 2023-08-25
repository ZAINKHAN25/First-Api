import express from 'express';
import { registrationcontroller } from '../controllers/authcontroller.js';


var authroutes = express.Router();

authroutes.get('/registration', registrationcontroller)

export default authroutes;