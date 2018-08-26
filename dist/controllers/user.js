'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transformer = require('../utils/transformer');

var _transformer2 = _interopRequireDefault(_transformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {};

user.create = function (req, res) {
  res.send(_transformer2.default.transformResponse(1, 'ok', 'user created'));
};

user.login = function (req, res) {
  res.send(_transformer2.default.transformResponse(1, 'ok', 'user logged in'));
};

user.logout = function (req, res) {
  res.send(_transformer2.default.transformResponse(1, 'ok', 'user logged out'));
};
exports.default = user;