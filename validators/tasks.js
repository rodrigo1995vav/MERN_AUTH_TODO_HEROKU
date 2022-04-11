const {check} = require ("express-validator");
const { validateResults } = require("../utils/handlerValidator");

const validatorCreateItem = [
  check("task").exists().notEmpty(),
  check("folderId").exists().notEmpty(),
  (req, res, next) => {

        return validateResults (req,res,next)
  }
];


const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
  
          return validateResults (req,res,next)
    }
  ];
  

module.exports = { validatorCreateItem, validatorGetItem}  