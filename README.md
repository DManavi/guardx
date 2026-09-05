<div align="center">

# GuardX

**Runtime guards and type-safe results for TypeScript and JavaScript.**

[![npm version](https://img.shields.io/npm/v/guardx.svg)](https://www.npmjs.com/package/guardx)
[![npm downloads](https://img.shields.io/npm/dm/guardx.svg)](https://www.npmjs.com/package/guardx)
[![license](https://img.shields.io/npm/l/guardx.svg)](https://github.com/DManavi/guardx/blob/main/LICENSE.md)

[Installation](#installation) · [Quick start](#quick-start) · [API](#api) · [Development](#development)

</div>

GuardX helps you validate values at runtime while preserving TypeScript's type
narrowing. Use assertion functions when invalid data should stop execution,
type guards when you want to handle it yourself, or result objects when you
want to avoid repetitive `try`/`catch` blocks.

## Why GuardX?

- **Type-safe assertions** narrow values after a runtime check.
- **Composable type guards** fit naturally into conditionals and filters.
- **Result-based error handling** keeps success and failure paths explicit.
- **ESM and CommonJS support** lets you use the same API in either module system.
- **Focused imports** keep call sites clear: `guardx/assert`, `guardx/check`,
  `guardx/run`, and `guardx/util`.

## Installation

```bash
npm install guardx
```

```bash
pnpm add guardx
```

```bash
yarn add guardx
```

## Quick start

### Assert that a value is defined

Assertions throw at runtime and narrow the value for all code that follows.

```typescript
import * as assert from 'guardx/assert';

type User = {
  id: number;
  emailAddress: string;
};

declare function findUserById(userId: number): User | undefined;

const user = findUserById(123);

assert.isDefined(user, 'User not found');

// TypeScript now knows that user is a User.
user.emailAddress = 'new-email@example.com';
```

You can pass either an error message or an `Error` instance:

```typescript
assert.isDefined(user, new Error('User not found'));
```

### Narrow a value with a type guard

Checks return booleans and leave the response to your application.

```typescript
import * as check from 'guardx/check';

declare const value: string | null | undefined;

if (check.isNullOrUndefined(value)) {
  console.log('No value was provided');
} else {
  // value is narrowed to string.
  console.log(value.toUpperCase());
}
```

### Replace `try`/`catch` with a result

`safe` and `safeAsync` return a discriminated union, so checking `success`
narrows the result to either its output or error.

```typescript
import * as run from 'guardx/run';

const result = run.safe(() => JSON.parse('{"ready":true}'));

if (result.success) {
  console.log(result.output);
} else {
  console.error(result.error);
}
```

For promises, use `safeAsync`:

```typescript
const result = await run.safeAsync(() => fetch('/api/users/123'));

if (!result.success) {
  console.error('Request failed', result.error);
}
```

## API

You can import every module from the package root:

```typescript
import { assert, check, run, util } from 'guardx';
```

Or import only the module you need:

```typescript
import * as assert from 'guardx/assert';
import * as check from 'guardx/check';
import * as run from 'guardx/run';
import * as util from 'guardx/util';
```

| Module | Purpose | Available functions |
| --- | --- | --- |
| `assert` | Validate a value or throw | `isDefined`, `isNotNullOrUndefined`, `isNotNull`, `isNotUndefined`, `isUndefined`, `isEqual`, `isNotEqual`, `isOneOf`, `isTrue`, `isFalse`, `isBoolean`, `isString`, `isNumber`, `isBigInt`, `isSymbol`, `isFunction`, `isObject`, `isArray` |
| `check` | Narrow values with type guards | `isDefined`, `isNullOrUndefined`, `isNull`, `isUndefined`, `isString`, `isBoolean`, `isNumber`, `isBigInt`, `isSymbol`, `isFunction`, `isObject` |
| `run` | Capture function output or errors | `safe`, `safeAsync` |
| `util` | Shared utility helpers | `defaultTo`, `fail` |

See the generated [documentation](https://dmanavi.github.io/guardx_website/)
for additional API details.

## Development

GuardX uses [pnpm](https://pnpm.io/), [Nx](https://nx.dev/), and
[Vitest](https://vitest.dev/). Node.js 20 is used in CI.

```bash
pnpm install
pnpm exec nx test guardx
pnpm exec nx lint guardx
pnpm exec nx build guardx
```

To generate the API documentation locally:

```bash
pnpm exec nx docs guardx
```

## Contributing

Bug reports and pull requests are welcome. Before opening a pull request,
please run the test, lint, and build commands above.

- [Report a bug or request a feature](https://github.com/DManavi/guardx/issues)
- [View the changelog](https://github.com/DManavi/guardx/blob/main/CHANGELOG.md)

## License

GuardX is available under the [MIT License](https://github.com/DManavi/guardx/blob/main/LICENSE.md).
