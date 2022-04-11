const { matchedData} = require("express-validator")
const { tasksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')


const getItems =  async(req,res) => {
    try {
        const id = req.body.folderId
        const data = await tasksModel.find({'folderId':id})
        res.send(data)  
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getItem = async(req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data = await tasksModel.findById(id)
        res.send({data})        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

const createItem = async (req, res) =>{

    try {
        const  user  = req.user
        const body = req.body
        body.userId = user._id
        console.log( body )
        const data = await tasksModel.create(body)
        res.send({data})
        // const task = await new tasksModel(req).save();
        // res.send(task);
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS' + matchedData(req).task)
    }
}
const updateItem = async(req, res) =>{
    try {
        const data = await tasksModel.findOneAndUpdate({ _id: req.params.id },
            req.body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }

}
const deleteItem = async (req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data = await tasksModel.deleteOne({_id:id})
        res.send({data}) 
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}