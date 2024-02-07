import express from 'express'
import { userLogin, userRegister } from '../controller/AuthController.js'
export const authRoute = express.Router()

authRoute.post('/login',userLogin )

authRoute.post('/register', userRegister)