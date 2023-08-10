const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10, 
    password: 'Changeme1^',
    user: 'root',
    database: 'table1',
    host: 'localhost',
    port: '3306'
}); 

// BEGINNING OF TEST DB
let popdb  = {}

/*
popdb.all = () => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT * FROM total_population_all`, (err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });
};

popdb.one = (zipcode,year) => {
    return new Promise (( resolve, reject) => {
    if(year) {
        pool.query(`SELECT * FROM total_population_all WHERE zipcode = ? AND year = ?`,[zipcode,year],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    } else {
        // 
        pool.query(`SELECT * FROM total_population_all WHERE zipcode = ?`, [zipcode], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    }
    });

};

popdb.condition = (population) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT * FROM total_population_all WHERE total_pop < ? AND year = 2021`,[population],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};

popdb.sums = (vals) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT SUM(total_pop) FROM total_population_all WHERE year = ?`,[vals],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};


popdb.maxxed = (num) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT * FROM total_population_all WHERE total_pop = (SELECT MAX(total_pop) FROM total_population_all WHERE year = ? );`,[num],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};


popdb.avg = (nums) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT AVG(total_pop) FROM total_population_all WHERE year = ?`,[nums],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};
*/
//END OF TESTDB
popdb.one = (msa,year) => {
    return new Promise (( resolve, reject) => {
    if(year) {
        pool.query(`SELECT * FROM mark_msa WHERE msa = ? AND year = ?`,[zipcode,year],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    } else {
        // 
        pool.query(`SELECT * FROM total_population_all WHERE msa = ?`, [msa], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    }
    });

};



module.exports = popdb;
