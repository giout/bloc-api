import Folder from '../models/folders.js'

export const getFolders = async (req, res) => {
    const folders = await Folder.find()

    res.status(200).json(folders)
}

export const getFolderById = async (req, res) => {
    const folder = await Folder.findById(req.params.id)
    
    res.status(200).json(folder)
}

export const createFolder = async (req, res) => {
    const { title, userId } = req.body
    
    const folder = new Folder({
        title,
        userId 
    })

    folder.save()

    res.status(201).end()
}

export const updateFolder = async (req, res) => {
    await Folder.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title }
    )

    res.status(200).end()
}

export const deleteFolder = async (req, res) => {
    await Folder.findByIdAndDelete(req.params.id)
    
    res.status(200).end()
}