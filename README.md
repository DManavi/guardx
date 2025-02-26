# GuardX

Protect your typescript/javascript projects from unnecessary if/else branches to check null/undefined values.

GuardX help developers to have type-safety during development (compile time) and type-check on runtime. Your IDE understands better when a value is null/undefined, and your app won't crash because of accessing a property of null or undefined value.

## Purpose

As a TypeScript/Javascript developer you may end up being in a situation like this.

```typescript

/**
 * A function that may return undefined
 */
function findUserById(userId: number): User | undefined {
  // an operation that may return undefined or the user
}

function updateUserInfo(userId: number, emailAddress: string;): void {
  const user = findUserById(userId); // Now the user is either a User or an undefined value

  // I should either type-check the user like below
  if (typeof user === 'undefined') {
    throw Error('User not found');
  }

  user.emailAddress = emailAddress;

  // or use ? operator
  user?.emailAddress = emailAddress;
}
```

Seems easy?

- What if I have tons of places like this (which we always have)?
- What if I want to catch the error and behave differently based on the error?

## Usage

### assert

Assert module help you to throw error based on a certain criteria. This way the app won't run and an error is thrown immediately.

```typescript
import * as assert from 'guardx/assert';

/**
 * A function that may return undefined
 */
function findUserById(userId: number): User | undefined {
  // an operation that may return undefined or the user
}

const user = findUserById(123);

assert.isDefined(user); // or assert.isNotNullOrUndefined(user);

// from now on, the user is always an instance of User
// I can safely access user properties both in development time and runtime
user.emailAddress = 'new-email@somewhere.com';
```

There are other methods available. Check [them](#references) in API references page.

### check

Check module helps typescript to have understand types better by type guards. But, it doesn't break the application on runtime. So developer is responsible for reacting to the unwanted types (e.g. null or undefined).

```typescript
import * as check from 'guardx/check';

/**
 * A function that may return undefined
 */
function findUserById(userId: number): User | undefined {
  // an operation that may return undefined or the user
}

const user = findUserById(123);

if (check.isNullOrUndefined(user)) {
  // custom logic to handle null or undefined values
  return;
}

// from now on, the user is always an instance of User
// I can safely access user properties both in development time and runtime
user.emailAddress = 'new-email@somewhere.com';
```

There are other methods available. Check [them](#references) in API references page.

### run

Run module help developers to run both sync and async functions and get both result and error on the same line w/o writing a try/catch block. This helps you have a cleaner and more readable code.

```typescript
/**
 * A function that may return undefined
 */
function findUserById(userId: number): User | undefined {
  // an operation that may return undefined or the user
}

// w/o guardx

let user: User | undefined;

try {
  user = findUserById(123);
} catch (err) {
  // log the error or set an alarm
}

// do something with the user object

// w/ guardx
import * as run from 'guardx/run';

const result = run.safe(() => findUserById(123)); // or you can use bind method here

// it also works with async functions

const result = run.safeAsync(async () => findUserById(123)); // or you can use bind method here

// failed to execute the function
if (!result.success) {
  // Now typescript knows result is an object like this
  // {
  //    success: false,
  //    error: Error
  // }

  console.error('Failed', result.error);
}

// code was executed successfully
if (result.success) {
  // Now typescript knows result is an object like this
  // {
  //    success: true,
  //    output: Error
  // }
}
```

There are other methods available. Check [them](#references) in API references page.

### util

TBD.

There are other methods available. Check [them](#references) in API references page.

## Development

TBD.

## References

[API Documentation](https://dmanavi.github.io/guardx_website/)

[Compile Typescript Packages to Multiple format](https://nx.dev/recipes/tips-n-tricks/compile-multiple-formats)
