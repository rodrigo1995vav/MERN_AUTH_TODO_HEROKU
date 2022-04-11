const {check} = require ("express-validator");
const { validateResults } = require("../utils/handlerValidator");


const validatorLoginItem= [
  check("email").exists().notEmpty(), 
  check("password").exists().notEmpty(), 
  (req, res, next) => {
        validateResults (req,res,next)
  }
];
const validatorRegisterItem= [
  check("name").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({min:4, max:40}),
  (req, res, next) => {
    validateResults(req, res, next);
  },
  ];

 
  

module.exports = { validatorLoginItem, validatorRegisterItem}  