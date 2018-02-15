import validator from '../src/validator';
import {
  INVALID_TYPE_SHEET,
  INVALID_TYPE_SHEET_DATA
} from '../src/commons/constants';
import baseConfig from './baseConfig';

const configDescription = expect.objectContaining({
  data: expect.arrayContaining(baseConfig.data)
});
const errorObjectDescription = expect.objectContaining({
  error: expect.any(String),
});

console.error = jest.genMockFn();

describe('Validator', () => {
  it('Should ensure that being called with correct config', () => {
    expect(baseConfig).toEqual(configDescription);
  });

  it('If validation is successfull return true', () => {
    expect(validator(baseConfig)).toBe(true);
  });

  describe('Sheet data', () => {
    it('Should ensure that sheet data key is an array', () => {
      let config = Object.assign({}, baseConfig, { data: { test: 'test'} });
      expect(validator(config)).toBe(false);
      expect(console.error).toBeCalledWith(INVALID_TYPE_SHEET);
    });

    it('Should ensure each of the childs is an array', () => {
      let config = Object.assign({}, baseConfig, { data: [{test: 'demo'}] });
      expect(validator(config)).toBe(false);
      expect(console.error).toBeCalledWith(INVALID_TYPE_SHEET_DATA);
    });
  })
});
