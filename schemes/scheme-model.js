const knex = require('knex');
const db = knex(require('../knexfile').development);

find = () => { 
    return db('schemes')
}
findById = (id) => {
    return db('schemes').where({ id: id })
}

findSteps = (id) => {
    console.log('I am Firing')
    return db('schemes').select(
        'schemes.scheme_name',
        'steps.step_number',
        'steps.instructions'
    ).from('steps').innerJoin(
        'schemes',
        'steps.scheme_id',
        'schemes.id').where('schemes.id', id).orderBy('step_number')
    
}
module.exports = {
    find,
    findById,
    findSteps,
}
