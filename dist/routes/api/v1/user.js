'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const router = express.Router();
var router = _express2.default.Router();

router.get('/');
router.post('/');
router.post('/login');
router.get('/logout');

exports.default = router;