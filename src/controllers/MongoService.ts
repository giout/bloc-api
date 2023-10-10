import { Request, Response, NextFunction } from 'express'
import { Document, Model } from 'mongoose'

class MongoService<D extends Document> {
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
            const entry = await this.model.findById(req.params.id)
            res.status(200).json(entry)
        } catch (err) {
            next(err)
        }
    }    

    public createEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const entry = new this.model(req.body)
            await entry.save()
            res.status(201).end()
        } catch (err) {
            next(err)
        }
    }    

    public updateEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const { params, body } = req
            await this.model.findByIdAndUpdate(params.id, body)
            res.status(200).end()
        } catch (err) {
            next(err)
        }
    }    

    public deleteEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            await this.model.findByIdAndDelete(req.params.id)
            res.status(200).end()
        } catch (err) {
            next(err)
        }
    }    
}

export default MongoService