const getEveryBird = async (connection : any): Promise<object> => {
    return await connection.query("SELECT * FROM `birds`;")
}

const getOneBird = async (connection : any, id : number): Promise<object> => {
    return await connection.query('SELECT * FROM `birds` WHERE `id` =' + `${id}` + ' ;')
}

const createBird = async (connection : any, data : any) => {
    const name = data.name
    const origin = data.origin
    const diet = data.diet
    const age = data.age
    const real = data.real
    const strength = data.strength
    const intelligence = data.intelligence
    const image = data.image
    return await connection.query('INSERT `birds` (`name`, `origin`,`diet`, `age`, `real`, `strength`, `intelligence`, `image`)' +
    'VALUES' + `('${name}', '${origin}', '${diet}', '${age}', '${real}', '${strength}', '${intelligence}', '${image}');`)
}

module.exports.getEveryBird = getEveryBird
module.exports.getOneBird = getOneBird
module.exports.createBird = createBird