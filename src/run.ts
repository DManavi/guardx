import { IfAny } from "type-fest";

import * as check from "./check";

/**
 * Runs a function if a condition is true, otherwise runs another function.
 * @param condition Condition to check
 * @param then
 * @param otherwise
 * @returns Either the result of the then function or the otherwise function
 */
export function when(
  condition: boolean,
  then: (...args: any) => any,
  otherwise?: (...args: any) => any
): IfAny<
  typeof condition,
  ReturnType<typeof then>,
  IfAny<
    typeof otherwise extends (...args: any) => any,
    ReturnType<typeof otherwise>,
    never
  >
> {
  // If the condition is true, call the then function
  if (condition === true) {
    return then();
  }

  // If the condition is false and the otherwise function is provided, call the otherwise function
  if (check.isFunction(otherwise)) {
    return otherwise();
  }
}
