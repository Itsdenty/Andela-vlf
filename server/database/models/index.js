import { Client } from 'pg';
import config  from '../../config/postgres-config';
import userDb from './users';
import questionDb from './questions';
import answerDb from './answers';
import commentDb from './comments';

console.log(config);
const makeQuery = (query) => {
  const client = new Client(config);
  client.connect();
  console.log('connection successful');
  client.query(query)
    .then((res) => {
      console.log(res);
      client.end()})
    .catch((err) => {
      console.log(err);
      client.end()});
};
makeQuery(`${userDb}${questionDb}${answerDb}${commentDb}`);