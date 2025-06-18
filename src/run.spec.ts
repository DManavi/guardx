import * as assert from './assert';
import * as mdl from './run';

describe('run', () => {
  describe('safe', () => {
    it('should return a success result', () => {
      const sampleFunc = () => 1;
      const result = mdl.safe(sampleFunc);

      assert.isTrue(result.success);
      assert.isEqual(result.output, 1);
    });

    it('should return a failed result', () => {
      const sampleFunc = () => {
        throw new Error('Failed');
      };
      const result = mdl.safe(sampleFunc);

      assert.isFalse(result.success);
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error.message).toEqual('Failed');
    });
  });

  describe('safeAsync', () => {
    it('should return a success result', async () => {
      const sampleFunc = async () => 1;
      const result = await mdl.safeAsync(sampleFunc);

      assert.isTrue(result.success);
      assert.isEqual(result.output, 1);
    });

    it('should return a failed result', async () => {
      const sampleFunc = async () => {
        throw new Error('Failed');
      };
      const result = await mdl.safeAsync(sampleFunc);

      assert.isFalse(result.success);
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error.message).toEqual('Failed');
    });
  });
});
