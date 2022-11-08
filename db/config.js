const mysql = require('mysql');

const db = {
    connectionLimit : 100,
    host : 'localhost',
    user: 'root',
    password: 'password.01',
    database: 'world',
    port:3306,
    acquireTimeout: 5000
}

const dbConnect = mysql.createPool(db);

module.exports = dbConnect;


/////////////////COnexion con mysql connect ///////////////////////////////////

// const dbConnect = mysql.createConnection(db);

// dbConnect.connect((err)=> {
//     if(err){
//         console.log('Failed to connect',err);
//     }
//     else {

//         console.log('Connect successful');
//     }
// });

///////////////////////////////////////////////////////

