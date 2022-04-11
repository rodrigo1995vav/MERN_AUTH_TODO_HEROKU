const express = require ("express")
const router = express.Router()
const {validatorCreateFolder, validatorGetFolder} = require ("../validators/folders")
//const customHeader = require("../middleware/customHeader")
const {getfolders, getfolder, createfolder, updatefolder, deletefolder} = require ("../controllers/folders")
const authMiddleware = require("../middleware/session")
const checkRole = require("../middleware/role")


router.get("/", authMiddleware, getfolders )

////In case is needed to retrieve for a single folder, not in use 
//router.get("/:id", authMiddleware,validatorGetFolder, getfolder)

router.put("/:id", authMiddleware, validatorGetFolder, validatorCreateFolder,  updatefolder )

router.delete("/:id", authMiddleware,validatorGetFolder , deletefolder )

router.post("/",authMiddleware, checkRole(["user","admin"]) ,validatorCreateFolder , createfolder )





module.exports = router