// Proper way to initialize and share the Database object
const pgp = require("pg-promise")();

// Preparing the connection details:
const cn = 'postgres://postgres:Fatima@123@localhost:5432/ODIMS_Database';

const db = pgp(cn);

db.connect()
    .then(obj => {
        console.log('Connected to the database');
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.error('Error connecting to the database:', error.message || error);
    });

module.exports = db;
