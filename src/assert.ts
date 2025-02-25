import * as check from './check.js';
import * as util from './util.js';

/**
 * Type assertion functions are a new feature in TypeScript 3.7.
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */

/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/**
 * Asserts that a value is not null.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is null
 */
export function isNotNull<T = unknown>(
  val?: T,
  errorOrMessage?: string | Error
): asserts val is NonNullable<T> {
  if (check.isNull(val) === true) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'Non-null value is expected, but null received.'
      ),
    });
  }
}

/**
 * Asserts that a value is null.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not null
 */
export function IsNull<T = unknown>(
  val?: T | null,
  errorOrMessage?: string | Error
): asserts val is null {
  if (val !== null) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'null value is expected, but non-null received.'
      ),
    });
  }
}

/**
 * Asserts that a value is not undefined.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is undefined
 */
export function isNotUndefined<T = unknown>(
  val?: T,
  errorOrMessage?: string | Error
): asserts val is NonNullable<T> {
  if (check.isUndefined(val) === true) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'Non-undefined value is expected, but undefined received.'
      ),
    });
  }
}

/**
 * Asserts that a value is undefined.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not undefined
 */
export function isUndefined<T = unknown>(
  val?: T,
  errorOrMessage?: string | Error
): asserts val is undefined {
  if (val !== undefined) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'undefined value is expected, but non-undefined received.'
      ),
    });
  }
}

/**
 * Asserts that a value is not null or undefined.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is null or undefined
 */
export function isNotNullOrUndefined<T = unknown>(
  val?: T,
  errorOrMessage?: string | Error
): asserts val is NonNullable<T> {
  if (check.isNull(val) === true || check.isNullOrUndefined(val) === true) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'non-null and non-undefined value is expected, but null or undefined received.'
      ),
    });
  }
}

/**
 * This function calls `isNotNullOrUndefined` and is used to assert that a value is defined.
 */
export function isDefined<T = unknown>(
  val?: T,
  errorOrMessage?: string | Error
): asserts val is NonNullable<T> {
  isNotNullOrUndefined(val, errorOrMessage);
}

/**
 * Asserts that a value is null or undefined.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not null or undefined
 */
export function IsNotDefined<T = unknown>(
  val?: T | null,
  errorOrMessage?: string | Error
): asserts val is null | undefined {
  if (check.isNullOrUndefined(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'Null or undefined value is expected, but non-null and non-undefined received.'
      ),
    });
  }
}

/**
 * Asserts that a value is equal to a specific value.
 * @param val Value to check
 * @param expected Expected value
 * @param errorOrMessage Error object or message to throw if the value is not equal to the expected value
 */
export function isEqual<T = unknown>(
  val: T,
  expected: T,
  errorOrMessage?: string | Error
): asserts val is T {
  if (val !== expected) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be equal to ${expected}, but received ${val}`
      ),
    });
  }
}

/**
 * Asserts that a value is not equal to a specific value.
 * @param val Value to check
 * @param expected Expected value
 * @param errorOrMessage Error object or message to throw if the value is equal to the expected value
 */
export function isNotEqual<T = unknown>(
  val: T,
  expected: T,
  errorOrMessage?: string | Error
): asserts val is T {
  if (val === expected) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be not equal to ${expected}, but received ${val}`
      ),
    });
  }
}

/**
 * Asserts that a value is one of the provided values.
 * @param val Value to check
 * @param values Array of allowed values
 * @param errorOrMessage Error object or message to throw if the value is not one of the allowed values
 */
export function isOneOf<T = unknown>(
  val: T,
  values: T[],
  errorOrMessage?: string | Error
): asserts val is T {
  for (const value of values) {
    if (val === value) {
      return;
    }
  }

  util.fail({
    errorOrMessage: util.defaultTo(
      errorOrMessage,
      `Value is expected to be one of [${values.join(
        ', '
      )}], but received ${val}`
    ),
  });
}

/**
 * Asserts that the value is true (strict equality).
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not true
 */
export function isTrue(
  val: boolean,
  errorOrMessage?: string | Error
): asserts val is true {
  if (val !== true) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'Value is expected to be true'
      ),
    });
  }
}

/**
 * Asserts that the value is false (strict equality).
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not true
 */
export function isFalse(
  val: boolean,
  errorOrMessage?: string | Error
): asserts val is false {
  if (val !== false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        'Value is expected to be false'
      ),
    });
  }
}

/**
 * Asserts that the value is a boolean.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isBoolean(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is boolean {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a boolean, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is a string.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isString(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is string {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a string, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is a number.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isNumber(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is number {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a number, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is a bigInt.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isBigInt(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is bigint {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a bigint, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is a symbol.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isSymbol(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is symbol {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a symbol, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is a function.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isFunction(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is Function {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be a function, but received ${typeof val}`
      ),
    });
  }
}

/**
 * Asserts that the value is an object.
 * @param val Value to check
 * @param errorOrMessage Error object or message to throw if the value is not a string
 */
export function isObject(
  val: unknown,
  errorOrMessage?: string | Error
): asserts val is object {
  if (check.isString(val) === false) {
    util.fail({
      errorOrMessage: util.defaultTo(
        errorOrMessage,
        `Value is expected to be an object, but received ${typeof val}`
      ),
    });
  }
}
