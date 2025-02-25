/**
 * Check if the value is null
 * @param val Value to check
 * @returns Whether the value is null
 */
export const isNull = (val: unknown): val is null => val === null;

/**
 * Check if the value is undefined
 * @param val Value to check
 * @returns Whether the value is undefined
 */
export const isUndefined = (val: unknown): val is undefined =>
  typeof val === 'undefined' || val === undefined;

/**
 * Check if the value is null or undefined
 * @param val Value to check
 * @returns Whether the value is null or undefined
 */
export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  isNull(val) || isUndefined(val);

/**
 * Check if the value is defined (not null or undefined)
 * @param val Value to check
 * @returns Whether the value is defined (not null or undefined)
 */
export const isDefined = <T = unknown>(val: T): val is NonNullable<T> =>
  isNullOrUndefined(val) === false;

/**
 * Check if the value is a string
 * @param val Value to check
 * @returns Whether the value is a string
 */
export const isString = (val: unknown): val is string =>
  typeof val === 'string';

/**
 * Check if the value is a boolean
 * @param val Value to check
 * @returns Whether the value is a boolean
 */
export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean';

/**
 * Check if the value is a number
 * @param val Value to check
 * @returns Whether the value is a number
 */
export const isNumber = (val: unknown): val is number =>
  typeof val === 'number';

/**
 * Check if the value is a bigint
 * @param val Value to check
 * @returns Whether the value is a bigint
 */
export const isBigInt = (val: unknown): val is bigint =>
  typeof val === 'bigint';

/**
 * Check if the value is a symbol
 * @param val Value to check
 * @returns Whether the value is a symbol
 */
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === 'symbol';

/**
 * Check if the value is a function
 * @param val Value to check
 * @returns Whether the value is a function
 */
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function';

/**
 * Check if the value is an object
 * @param val Value to check
 * @returns Whether the value is an object
 */
export const isObject = (val: unknown): val is object =>
  typeof val === 'object';
