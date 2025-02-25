import * as check from "./check";

type FailOpts = {
  /**
   * The error object or message to be thrown.
   */
  errorOrMessage: string | Error;
};

/**
 * Creates an error object and throw it if the provided value is a string, otherwise throws the provided error object.
 */
export function fail({ errorOrMessage }: FailOpts): never {
  if (check.isString(errorOrMessage)) {
    throw new Error(errorOrMessage);
  }

  throw errorOrMessage;
}
