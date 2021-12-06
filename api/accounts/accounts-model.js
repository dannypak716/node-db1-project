const db = require('../../data/db-config')

const getAll = async () => {
  // select * from accounts;
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id=1;
  return db('accounts')
    .where('id', id)
    .first()
}

const create = account => {

}

const updateById = (id, account) => {

}

const deleteById = id => {
  
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
