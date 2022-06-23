require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')
const imageRoutes = require('./route/imageRoutes')



// middlewares
app.use(cors())
app.use(express.json())


app.use('/uploads', imageRoutes);
 

const start = async () => {
    try {
        await db
        app.listen(process.env.PORT, ()=>{
            console.log(`Server started on port ${process.env.PORT}`)
        }) 
    } catch (error) {
      console.log(error)  
    }
    
};
start();