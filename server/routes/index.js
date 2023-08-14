
const express = require('express');

const db = require('../db');

const router = express.Router();

//START OF USING TEST DB

router.get('/', async (req,res,next) =>{

//res.json({test: 'test'});
            try {
                let results = await db.all();
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
});

router.get('/market/:msa/:Product', async (req,res,next) =>{

    //res.json({test: 'test'});
            try {
                let results = await db.one(req.params.msa,req.params.Product);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
    });

        router.get('/msasum/:msa/:Product?', async (req, res, next) => {
            try { 
                const msa = req.params.msa;
                const Product = req.params.Product;
        
                if (Product) {
                    const trimmedProduct = Product.trim(); // Remove leading and trailing whitespace
                    const results = await db.msasum(msa, trimmedProduct);
                    res.json(results);
                } else {
                    const results = await db.msasum(msa);
                    res.json(results);
                }
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
        });



        router.get('/countysum/:county/:Product?', async (req, res, next) => {
            try { 
                const county = req.params.county;
                const Product = req.params.Product;
        
                if (Product) {
                    const trimmedProduct = Product.trim(); // Remove leading and trailing whitespace
                    const results = await db.countysum(county, trimmedProduct);
                    res.json(results);
                } else {
                    const results = await db.countysum(county);
                    res.json(results);
                }
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
        });

router.get('/countypop/:county', async (req,res,next) =>{

    //res.json({test: 'test'});
            try {
                let results = await db.countypop(req.params.county);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
    });
router.get('/msapop/:msa', async (req,res,next) =>{

    //res.json({test: 'test'});
            try {
                let results = await db.msapop(req.params.msa);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
    });

/*
    router.get('/zip/:zipcode', async (req, res, next) => {
        try {
            let results = await db.one(req.params.zipcode);
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    router.get('/pop/:population', async (req,res,next) =>{

        //res.json({test: 'test'});
            try {
                let results = await db.condition(req.params.population);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
        }); 
    router.get('/vals/:values', async (req,res,next) =>{

    //res.json({test: 'test'});
            try {
                let results = await db.sums(req.params.values);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
    }); 

    router.get('/max/:maxxed', async (req,res,next) =>{

        //res.json({test: 'test'});
            try {
                let results = await db.maxxed(req.params.maxxed);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
        }); 

    router.get('/avg/:average', async (req,res,next) =>{

        //res.json({test: 'test'});
            try {
                let results = await db.avg(req.params.average);
                res.json(results);
            } catch(e){
                console.log(e);
                res.sendStatus(500); 
            }
        }); 
*/
    //END OF USING TESTDB

module.exports = router;
