require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')


// middlewares
app.use(cors())
app.use(express.json())





const start = async () => {
    try {
        app.listen(process.env.PORT, ()=>{
            console.log(`Server started on port ${process.env.PORT}`)
        }) 
    } catch (error) {
      console.log(error)  
    }
};

start();