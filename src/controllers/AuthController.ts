import 'dotenv/config'
import { NextFunction, Request, Response } from "express"
import { Model } from "mongoose"
import { UserDocument } from "../types/auth"
import { compareCrypted, encrypt } from "../utils/bcrypt"
import jwt from "jsonwebtoken"
import CustomError from '../error/CustomError'

const signature = <string> process.env.TOKEN_SIGNATURE

export class AuthController {
    userModel: Model<UserDocument>

    constructor(model: Model<UserDocument>) {
        this.userModel = model
    }

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let { username, email, password } = req.body
            const user = await this.userModel.findOne({ email })
            
            if (user) {
                throw new CustomError('User already exists', 400)
            } else {
                if (username && email && password) {
                    // encriptando clave
                    req.body.password = encrypt(password, 10)
                    const entry = await this.userModel.create(req.body)
                    return res.status(200).json({ msg: 'User created', user: entry })
                }
            }

            throw new CustomError('All fields must be filled', 400)
            
        } catch (error) {
            next(error)
        }
    }

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // verificando si usuario existe
            const { email, password } = req.body
            const user = await this.userModel.findOne({ email })
    
            if (user) {
                const { username, _id } = user

                // verificadno si la clave concuerda
                if (compareCrypted(password, user.password)) {
                    const payload = { username, id: _id }

                    // creando y enviando token de autenticacion
                    const token = jwt.sign(payload, signature, { 
                        expiresIn: 60*60*24*7 // 7 dias
                    })
                    res.status(200).json({ token })
                }
            }
    
            throw new CustomError('User or password are invalid', 400)

        } catch (error) {
            next(error)
        }
    }
}