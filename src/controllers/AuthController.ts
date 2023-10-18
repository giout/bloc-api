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
            
            if (username && email && password) {
                const user = await this.userModel.findOne({ email })

                if (!user) { 
                    this.validateEmail(email)
                    this.validatePassword(password)
                    req.body.password = encrypt(password, 10)
                    const entry = await this.userModel.create(req.body)
                    return res.status(201).json(entry)        
                }

                throw new CustomError('El usuario ya existe', 400)
            } 
                
            throw new CustomError('Todos los campos deben llenarse', 400)
            
        } catch (error) {
            next(error)
        }
    }

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // verificando si usuario existe
            const { email, password } = req.body

            if (email && password) {
                const user = await this.userModel.findOne({ email })

                if (user) {
                    const { _id } = user
                    // verificadno si la clave concuerda
                    if (compareCrypted(password, user.password)) {
                        const payload = { id: _id }
    
                        // creando y enviando token de autenticacion
                        const token = jwt.sign(payload, signature, { 
                            expiresIn: 60*60*24*7 // 7 dias
                        })
                        res.status(200).json({ token })
                    }
                }
        
                throw new CustomError('Email o clave invalida', 400)    
            }

            throw new CustomError('Todos los campos deben llenarse', 400)
            
        } catch (error) {
            next(error)
        }
    }

    private validateEmail(email: string): void {
        const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/

        if (regex.test(email)) return 

        throw new CustomError('La direccion de email no es valida.', 400)
    }

    private validatePassword(password: string): void {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

        if (regex.test(password)) return 

        throw new CustomError('La clave debe tener 8 caracteres, letras y numeros', 400)
    }
}