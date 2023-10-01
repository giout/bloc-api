import { Request, Response } from 'express'
import { Document, Model } from 'mongoose'

class MongoService<D extends Document> {
    model: Model<D> // mongoose model

    constructor(model: Model<D>) {
        this.model = model
    }

    public getAllEntries = async (req: Request, res: Response): Promise<void> =>{
        this.handleHttp(req, res, async () => {
            const entries = await this.model.find()
            res.status(200).json(entries)
        })    
    }       

    public getEntryById = async (req: Request, res: Response): Promise<void> =>{
        this.handleHttp(req, res, async() => {
            const entry = await this.model.findById(req.params.id)
            res.status(200).json(entry)
        })
    }    

    public createEntry = async (req: Request, res: Response): Promise<void> =>{
        this.handleHttp(req, res, async() => {
            const entry = new this.model(req.body)
            await entry.save()
            res.status(201).end()
        })
    }    

    public updateEntry = async (req: Request, res: Response): Promise<void> =>{
        this.handleHttp(req, res, async() => {
            const { params, body } = req
            await this.model.findByIdAndUpdate(params.id, body)
            res.status(200).end()
        })
    }    

    public deleteEntry = async (req: Request, res: Response): Promise<void> =>{
        this.handleHttp(req, res, async() => {
            await this.model.findByIdAndDelete(req.params.id)
            res.status(200).end()
        })
    }    

    // handles try/catch, taking the try or success code block as parameter
    protected handleHttp = async (req: Request, res: Response, operation: () => Promise<void>): Promise<void> =>{
        try{
            await operation()
        } catch(err) {
            res.status(500).json({msg: err})
        }
    }
}

export default MongoService