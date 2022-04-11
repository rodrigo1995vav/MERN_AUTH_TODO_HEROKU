require("dotenv").config()

const express = require('express')

const cors = require('cors')

const morganBody = require('morgan-body')

const path = require("path")

const dbConnectNoSql = require('./config/mongo')

const {dbConnectMySql} = require('./config/mysql')
const { loggerStream } = require("./utils/handleLoger")

const app = express()

const ENGINE_DB = process.env.ENGINE_DB

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")))

const port = process.env.PORT || 8080



morganBody(app, {
    noColors:true,
    stream: loggerStream,
    skip: function(req,res){
        return res.statusCode < 400 
    }

})




/*Here we call the routes*/
app.use("/api", require("./routes/"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen (port, () => {
    console.log(`Your app is ready and running on http://localhost:${port}`)
})


//(ENGINE_DB === "nosql") ? dbConnectNoSql() : dbConnectMySql()

if (ENGINE_DB === "mysql") {
    dbConnectMySql()
  }
if (ENGINE_DB === "nosql") {
    dbConnectNoSql()
}