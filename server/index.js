import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import pg from 'pg';
import dbConfig from './config/postgres-config';


const app = express(),
    pool = new pg.Pool(dbConfig),
    port = process.env.PORT;

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());



// connect to db
// initializeDb( db => {

  // // internal middleware
  // app.use(middleware({ config, db }));

  // // api router
  // app.use('/api', api({ config, db }));

app.get('/api/v1', (req, res) => {
  res.send({msg: 'welcome'});
});

app.get('/pool', (req, res) => {
  pool.connect( (err,client,done) => {
    if(err){
      console.log("not able to get connection "+ err);
      res.status(400).send(err);
      console.log(err);
    }
    else {
      console.log('successfully connected');
    }
  });
});


app.listen(port || 3000, () => {
  console.log(`Started on port ${port}`);
});
// });

export default app;