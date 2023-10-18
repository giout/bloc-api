import { Request, Response, NextFunction } from 'express'
import { Document, Model } from 'mongoose'
import CustomError from '../error/CustomError'

class MongoController<D extends Document> {
    model: Model<D> 

    constructor(model: Model<D>) {
        this.model = model
    }

    public getAllEntries = async (req: Request, res: Response, next:  NextFunction): Promise<void> =>{
        try {
            const entries = await this.model.find()
            res.status(200).json(entries) 
        } catch (err) {
            next(err)
        }
    }       

    public getEntryById = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {   
            const { id } = req.params
            await this.verifyExistence(id)
            const entry = await this.model.findById(id)
            res.status(200).json(entry)
        } catch (err) {
            next(err)
        }
    }    

    public createEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const document = await this.model.create(req.body)
            res.status(201).json(document)
        } catch (err) {
            next(err)
        }
    }    

    public updateEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const { params, body } = req
            await this.verifyExistence(params.id)
            const entry = await this.model.findByIdAndUpdate(params.id, body)
            res.status(200).json(entry)
        } catch (err) {
            next(err)
        }
    }    

    public deleteEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const { id } = req.params
            await this.verifyExistence(id)
            await this.model.findByIdAndDelete(id)
            res.status(200).end()
        } catch (err) {
            next(err)
        }
    }    

    public verifyExistence = async (id: string): Promise<void> => {
        const entry = await this.model.findById(id)
        if (!entry) {
            throw new CustomError('Recurso no obtenido', 404)
        }
    }
}

export default MongoController