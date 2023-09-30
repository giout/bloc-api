import Note from '../models/notes.js'

export const getNotes = async (req, res) => {
    const notes = await Note.find()

    res.status(200).json(notes)
}

export const getNoteById = async (req, res) => {
    const note = await Note.findById(req.params.id)

    res.status(200).json(note)
}

export const createNote = async (req, res) => {

    const { title, content, folderId } = req.body

    const note = new Note({
        title, 
        content, 
        folderId
    })    

    await note.save()

    res.status(201).end()
}

export const updateNote = async (req, res) => {
    const { title, content } = req.body

    await Note.findByIdAndUpdate(
        req.params.id,
        {
            title, 
            content
        }
    )

    res.status(200).end()
}

export const deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    
    res.status(200).end()
}