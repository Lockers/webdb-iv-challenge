const knex = require('knex');
const db = knex(require('../knexfile').development);

find = () => { 
    return db('schemes')
}
findById = (id) => {
    return db('schemes').where({ id: id })
}

findSteps = (id) => {
    return db('schemes').select(
        'schemes.scheme_name',
        'steps.step_number',
        'steps.instructions'
    ).from('steps').innerJoin(
        'schemes',
        'steps.scheme_id',
        'schemes.id').where('schemes.id', id).orderBy('step_number')
    
}

addScheme = (newScheme) => {
    console.log('I am firing')
    return db('schemes').insert(newScheme)
}

update = (changes, id) => {
    updated = changes.scheme_name
    return db('schemes')
        .where({ id })
        .update({
        scheme_name: updated
    })
}

remove = (id) => {
    return db('schemes')
        .where({ id })
        .del()
    }
module.exports = {
    find,
    findById,
    findSteps,
    addScheme,
    update,
    remove
}
