import * as mdl from './util';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('util', () => {
  describe('fail', () => {
    it('should throw an error if the provided value is a string', () => {
      const error = 'error message';

      expect(() => mdl.fail({ errorOrMessage: error })).toThrow(error);
    });

    it('should throw the provided error object if the provided value is not a string', () => {
      const error = new Error('error message');

      expect(() => mdl.fail({ errorOrMessage: error })).toThrow(error);
    });
  });

  describe('defaultTo', () => {
    it('should return the value if it is not null or undefined', () => {
      [() => {}, {}, 0, '', 1, false].forEach((val) =>
        expect(mdl.defaultTo(val, 'default')).toBe(val)
      );
    });

    it('should return the value if it is either null or undefined', () => {
      [null, undefined].forEach((val) =>
        expect(mdl.defaultTo(val, 'default')).toBe('default')
      );
    });
  });
});
