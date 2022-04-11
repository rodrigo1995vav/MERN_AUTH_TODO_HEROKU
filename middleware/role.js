const { handleHttpError } = require("../utils/handleError")

const checkRole = (role) => (req, res , next) =>{
    try {
        const { user } = req
        const rolesByUser = user.role
        const checkValueRole = role.some((rolesSingle) => rolesByUser.includes(rolesSingle))
        if (!checkValueRole) {
            handleHttpError(res, "USER_NOT_PREMISSIONS", 403)
            return
        }
        next()
    } catch (error) {
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRole