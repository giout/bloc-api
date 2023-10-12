import 'dotenv/config'
import { connection } from './config/database'
import app from './config/app'

const port = process.env.PORT

connection().then(() => console.log('Connected.')) // conectando a base de datos

export const server = app.listen(port, () => console.log('Listening on port', port))

