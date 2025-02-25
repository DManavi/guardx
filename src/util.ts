import * as check from './check.js';

/**
 * Fail options.
 */
export type FailOpts = {
  /**
   * The error object or message to be thrown.
   */
  errorOrMessage: string | Error;
};

/**
 * Creates an error object and throw it if the provided value is a string, otherwise throws the provided error object.
 */
export function fail(opts: FailOpts): never {
  const { errorOrMessage } = opts;

  if (check.isString(errorOrMessage)) {
    throw new Error(errorOrMessage);
  }

  throw errorOrMessage;
}

/**
 * Sets a default value if the provided value is null or undefined.
 * @param value Value to check
 * @param defaultValue Default value to set
 * @returns Either the provided value or the default value
 */
export function defaultTo<T = unknown>(value: T, defaultValue: T): T {
  return check.isNullOrUndefined(value) ? defaultValue : value;
}
