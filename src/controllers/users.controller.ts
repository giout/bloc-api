import MongoController from "./MongoController"
import { AuthRequest, UserDocument } from "../types/auth"
import User from "../models/User"
import { Request, Response, NextFunction } from "express"
import { JwtPayload } from "jsonwebtoken"
import { encrypt } from "../utils/bcrypt"

class UserController extends MongoController<UserDocument> {
    public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const payload = <JwtPayload> (req as AuthRequest).user
            await this.verifyExistence(payload.id)
            const user = await this.model.findById(payload.id)
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { body } = req
            const payload = <JwtPayload> (req as AuthRequest).user
            await this.verifyExistence(payload.id)

            // si la clave existe, es necesario encriptarla antes de que sea modificada
            if (body.password) body.password = encrypt(body.password, 10) 
            
            await this.model.findByIdAndUpdate(payload.id, body)
            const updatedEntry = await this.model.findById(payload.id)
            res.status(200).json(updatedEntry)
        } catch (err) {
            next(err)
        }
    }
    public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const payload = <JwtPayload> (req as AuthRequest).user
            await this.verifyExistence(payload.id)
            await this.model.findByIdAndDelete(payload.id)
            res.status(200).end()
        } catch (err) {
            next(err)
        }
    }
}

const controller = new UserController(User)

export default controller