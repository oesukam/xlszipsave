'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CELL_TYPE_STRING = exports.CELL_TYPE_STRING = 'string';
var CELL_TYPE_NUMBER = exports.CELL_TYPE_NUMBER = 'number';
var validTypes = exports.validTypes = [CELL_TYPE_STRING, CELL_TYPE_NUMBER];

var MISSING_KEY_FILENAME = exports.MISSING_KEY_FILENAME = 'Xlszipsave config missing property filename';
var INVALID_TYPE_FILENAME = exports.INVALID_TYPE_FILENAME = 'Xlszipsave filename can only be of type string';
var INVALID_TYPE_SHEET = exports.INVALID_TYPE_SHEET = 'Xlszipsave sheet data is not of type array';
var INVALID_TYPE_SHEET_DATA = exports.INVALID_TYPE_SHEET_DATA = 'Xlszipsave sheet data childs is not of type array';

var WARNING_INVALID_TYPE = exports.WARNING_INVALID_TYPE = 'Invalid type supplied in cell config, falling back to "string"';