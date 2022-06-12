const jsonResponseService = (
    data : Array<any> = [], 
    success : Boolean = false,
    message : String = 'Error',
    status : Number = 500
) => {
    return {
        "success": success, 
        "message": message, 
        "status": status, 
        "data" : data
    }
}

module.exports = jsonResponseService