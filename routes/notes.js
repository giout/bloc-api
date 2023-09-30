import { Router } from 'express'
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/notes.js'

const router = new Router()

router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote)

export default router