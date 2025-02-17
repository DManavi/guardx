export const isNull = (val: unknown): val is null => val === null;

export const isUndefined = (val: unknown): val is undefined =>
  typeof val === "undefined" || val === undefined;

export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  isNull(val) || isUndefined(val);

export const isDefined = <T = unknown>(val: T): val is NonNullable<T> =>
  isNullOrUndefined(val) === false;

export const isString = (val: unknown): val is string =>
  typeof val === "string";

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === "boolean";

export const isNumber = (val: unknown): val is number =>
  typeof val === "number";

export const isBigInt = (val: unknown): val is bigint =>
  typeof val === "bigint";

export const isSymbol = (val: unknown): val is symbol =>
  typeof val === "symbol";

export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";

export const isObject = (val: unknown): val is object =>
  typeof val === "object";
