
const mysql = require('mysql'); 
const pool = mysql.createPool({
    connectionLimit: 10, 
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    port: '3306',
    acquireTimeout: 60000
}); 

// BEGINNING OF TEST DB
let popdb  = {} 

popdb.all = () => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT SUM(premium)  FROM tex_sales_msa`, (err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });
};

/*

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



popdb.msasum = (msa, Product) => {
    return new Promise((resolve, reject) => {
        if (Product) {
            const trimmedProduct = Product.trim(); // Remove leading and trailing whitespace
            pool.query(`SELECT SUM(premium) FROM tex_sales_msa WHERE msa = ? AND Product = ?`, [msa, trimmedProduct], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        } else {
            pool.query(`SELECT SUM(premium) FROM tex_sales_msa WHERE msa = ?`, [msa], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
    });
};



popdb.countysum = (county, Product) => {
    return new Promise((resolve, reject) => {
        if (Product) {
            const trimmedProduct = Product.trim(); // Remove leading and trailing whitespace
            pool.query(`SELECT SUM(premium) as total_amount FROM tex_sales_county WHERE county = ? AND Product = ?`, [county, trimmedProduct], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        } else {
            pool.query(`SELECT SUM(premium) as total_amount FROM  tex_sales_county WHERE county = ?`, [county], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
    });
};


popdb.countypop = (county) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT SUM(total_pop) FROM tex_pop_county WHERE county = ?`,[county],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};

popdb.msapop = (msa) => {
    return new Promise (( resolve, reject) => {
        pool.query(`SELECT SUM(total_pop) FROM tex_pop_msa WHERE msa = ?`,[msa],(err, results) =>{
            if(err) {
                return reject(err);
            } 
             return resolve(results);
        });
    });

};


module.exports = popdb;
