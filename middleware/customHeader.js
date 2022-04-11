
//middleware not in use, here just for testing 


const customHeader = (req, res ,next) => {
    try {
        const apiKey = req.headers.api_key
        if(apiKey === "Rodrigo--REC.709") {
            next()
        }else{
            res.status(403)
            res.send({error: "API_KEY_DENIED"})
        }
        next()
    } catch (e) {
        res.status(403)
        res.send({error: "SOMETHING WENT WRONG"})
        
    }

}

module.exports = customHeader 