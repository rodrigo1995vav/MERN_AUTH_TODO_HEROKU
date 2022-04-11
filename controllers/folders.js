const { matchedData} = require("express-validator")
const { foldersModel, tasksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')


const getfolders =  async(req,res) => {
    try {
        const user = req.user
        const data = await foldersModel.find({'userId':user._id})
        res.send({data})  
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getfolder = async(req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data = await foldersModel.findById(id)
        res.send({data})        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

const createfolder = async (req, res) =>{

    try {
        const  user  = req.user
        const body = req.body
        body.userId = user._id
        console.log( body )
        const data = await foldersModel.create(body)
        res.send({data , user })
        // const task = await new folderModel(req).save();
        // res.send(task);
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMSssss')
    }
}
const updatefolder = async(req, res) =>{
    try {
        const data = await foldersModel.findOneAndUpdate( { _id: req.params.id },
            req.body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }

}
const deletefolder = async (req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data = await foldersModel.deleteOne({_id:id})
        const data2 = await tasksModel.deleteMany({folderId:id})
        res.send({data, data2}) 
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = { getfolders, getfolder, createfolder, updatefolder, deletefolder}