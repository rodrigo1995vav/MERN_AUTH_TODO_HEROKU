const express = require ("express")
const { registerCtrl, loginCtrl } = require("../controllers/auth")
const router = express.Router()
const {validatorLoginItem, validatorRegisterItem} = require("../validators/auth")



router.post("/register",validatorRegisterItem,registerCtrl)

router.post("/login", validatorLoginItem, loginCtrl)





module.exports = router