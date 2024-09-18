// loads env file cntents into process.env by default

require ('dotenv').config()

const express= require('express')
const cors=require('cors')
const dbConnection = require('./DB/connection')
const router = require('./Router/router')

const app =express()

//data  sharing

app.use(cors())

//parse json

app.use(express.json())
app.use(router)


const PORT =3000||process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started listening at PORT:${PORT},and waiting for the client request`);
})

app.get('/',(req,res)=>{
    res.send('<h1>server started and waiting for the client request</h1>')
})

dbConnection();




