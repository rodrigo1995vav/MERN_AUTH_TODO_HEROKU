const{Sequelize} = require("sequelize")


const database = process.env.MYSQLDB

const username = process.env.MYSQLUSER

const password = process.env.MYSQLPASS

const host = process.env.MYSQLHOST

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:"mysql"
    }
) 

const dbConnectMySql = async () =>{
    try {
        await sequelize.authenticate()
        console.log("Connection succeed")
    } catch (e) {
        console.log("Connection ERROR", e)
    }
}

module.exports = {sequelize, dbConnectMySql}