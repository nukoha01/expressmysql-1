
const express = require('express');
const apiRouter = require('./routes');

const app = express();


app.use(express.json());

app.use('/api/size', apiRouter);
//change above to zipsize -> app.use('/api/size', apiRouter);


app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);

});

