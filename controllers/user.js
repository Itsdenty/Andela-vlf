'use strict';
import transformer from '../utils/transformer';
import bcrypt from "bcrypt";
const user = {};

user.create = (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  const email = req.body.email.trim().toLowerCase();
  res.send(transformer.transformResponse(1, 'ok', 'user created'));
};

user.login = (req, res) => {
  res.send(transformer.transformResponse(1, 'ok', 'user logged in'));
};

user.logout = (req, res) => {
  res.send(transformer.transformResponse(1, 'ok', 'user logged out'));
};
export default  user;