export type FailSafeRunResult<T = Error> = {
  /**
   * Indicate that the run failed.
   */
  success: false;

  /**
   * Error that occurred during the run.
   */
  error: T;
};

export type SuccessSafeRunResult<T = unknown> = {
  /**
   * Indicate that the run succeeded.
   */
  success: true;

  /**
   * Result of the run.
   */
  result: T;
};

export type SafeRunResult<T = unknown, E = Error> =
  | FailSafeRunResult<E>
  | SuccessSafeRunResult<T>;

/**
 * Run a function safely and return the result (or the thrown error).
 * @param fn Function to run
 * @returns Result of the run
 */
export const safe = <T = unknown, E = Error>(
  fn: () => T
): SafeRunResult<T, E> => {
  try {
    return {
      success: true,
      result: fn(),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

/**
 * Run an async function safely and return the result (or the thrown error).
 * @param fn Async function to run
 * @returns Result of the run
 */
export const safeAsync = <T = unknown, E = Error>(
  fn: () => Promise<T>
): Promise<SafeRunResult<T, E>> => {
  return new Promise<SafeRunResult<T, E>>((resolve) => {
    fn()
      .then((result) =>
        resolve({
          success: true,
          result,
        })
      )
      .catch((error) =>
        resolve({
          success: false,
          error,
        })
      );
  });
};
