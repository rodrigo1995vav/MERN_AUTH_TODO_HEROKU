const {check} = require ("express-validator");
const { validateResults } = require("../utils/handlerValidator");

const validatorCreateFolder = [
  check("name").exists().notEmpty(),
  (req, res, next) => {

        return validateResults (req,res,next)
  }
];


const validatorGetFolder = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
  
          return validateResults (req,res,next)
    }
  ];
  

module.exports = { validatorCreateFolder, validatorGetFolder}  