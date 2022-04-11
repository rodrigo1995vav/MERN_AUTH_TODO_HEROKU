const mongoose = require("mongoose")

const dbConnectNoSql = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }, 
        (err, res) => {
            if(!err){
                console.log('***CONNECTION ESTABLISHED***')
            }else{
                console.log('***ERROR TRYING TO CONNECT***')
            }
        }

    )
}

module.exports = dbConnectNoSql
