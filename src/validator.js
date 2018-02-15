import {
  INVALID_TYPE_SHEET,
  INVALID_TYPE_SHEET_DATA
} from './commons/constants';

const childValidator = (array) => {
  return array.every(item => Array.isArray(item));
};

export default (sheet) => {
  if (!Array.isArray(sheet.data)) {
    console.error(INVALID_TYPE_SHEET);
    return false;
  }

  if (!childValidator(sheet.data)) {
    console.error(INVALID_TYPE_SHEET_DATA);
    return false;
  }

  return true;
};
