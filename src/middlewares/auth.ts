import { Response, NextFunction } from "express"
import { AuthRequest } from "../types/auth"
import jwt, { JwtPayload } from 'jsonwebtoken'
import CustomError from "../error/CustomError"
import { Request } from "express"

const signature = <string> process.env.TOKEN_SIGNATURE 

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] || ''

    // Esquema de autenticacion Bearer token
    try {
        if (auth.toLowerCase().startsWith('bearer') && 
            auth.split(' ').length === 2) {
            const token = auth.split(' ')[1] // Bearer[0] jf8jf8rf9ff4[1]
            
            // Verificando que el token sea valido
            jwt.verify(token, signature, (err, decoded) => {
                if (err) {
                    throw new CustomError('Session is invalid', 401)
                }
                // Asignando datos del token a objeto Request
                (req as AuthRequest).user = <JwtPayload> decoded 
            })

            return next()
        } else {
            throw new CustomError('Invalid Bearer token', 400)
        }

    } catch (error) {
        next(error)
    }
}