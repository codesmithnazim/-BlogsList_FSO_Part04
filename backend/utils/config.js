import 'dotenv/config'

const PORT= process.env.PORT
const mongoUrl= process.env.MONGODB_URI


export default {PORT, mongoUrl}