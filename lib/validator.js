'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./commons/constants');

var childValidator = function childValidator(array) {
  return array.every(function (item) {
    return Array.isArray(item);
  });
};

exports.default = function (sheet) {
  if (!Array.isArray(sheet.data)) {
    console.error(_constants.INVALID_TYPE_SHEET);
    return false;
  }

  if (!childValidator(sheet.data)) {
    console.error(_constants.INVALID_TYPE_SHEET_DATA);
    return false;
  }

  return true;
};