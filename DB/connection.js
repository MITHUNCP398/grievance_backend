const mongoose = require ('mongoose')
const connectionString = process.env.DB_CONNECTION

const dbConnection = () => {
    mongoose.connect(connectionString).then(()=>{
        console.log("mongoDB Atlas succecssfully connected with server");
    }).catch((err)=>{
        console.log(`mongoDB connection failed!! error :${err}`);
    })
}

module.exports = dbConnection;