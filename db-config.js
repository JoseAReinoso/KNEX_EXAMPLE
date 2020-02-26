const knex = require('knex');

//NOT BEST PRACTICE, BUT OK FOR NOW TO GET STARTED UNTIL We learn better way
const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/users.db3'
    },

    useNullAsDefault: ture

};

const db = knex(config)

module.exports = db;