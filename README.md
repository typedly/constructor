<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="A collection of TypeScript packages for precise, type-safe development."
  />
</a>

## typedly/constructor

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package to handle various types of constructors.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - Namespace
    - [`Typedly`](#typedly)
  - Interface
    - [`ConstrainedConstructor`](#constrainedconstructor)
    - [`Constructor`](#constructor)
    - [`DataConstructor`](#dataconstructor)
    - [`MapTypeConstructor`](#maptypeconstructor)
    - [`SetTypeConstructor`](#settypeconstructor)
    - [`WeakMapTypeConstructor`](#weakmaptypeconstructor)
    - [`WeakSetTypeConstructor`](#weaksettypeconstructor)
  - Type
    - [`ExtractConstructorArgs`](#extractconstructorargs)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

---

## Installation

```bash
npm install @typedly/constructor --save-peer
```

## Api

```typescript
import {
  // Namespace.
  Typedly,

  // Interface.
  ConstrainedConstructor,
  Constructor,
  DataConstructor,
  MapTypeConstructor,
  SetTypeConstructor,
  WeakMapTypeConstructor,
  WeakSetTypeConstructor,

  // Type.
  ExtractConstructorArgs
} from '@typedly/constructor';
```

## Namespace

### `Typedly`

```typescript
import { ConstrainedConstructor } from '@typedly/constructor';
```

## Interface

### `ConstrainedConstructor`

```typescript
import { ConstrainedConstructor } from '@typedly/constructor';
```

### `Constructor`

```typescript
import { Constructor } from '@typedly/constructor';
```

### `DataConstructor`

```typescript
import { DataConstructor } from '@typedly/constructor';
```

### `MapTypeConstructor`

```typescript
import { MapTypeConstructor } from '@typedly/constructor';
```

### `SetTypeConstructor`

```typescript
import { SetTypeConstructor } from '@typedly/constructor';
```

### `WeakMapTypeConstructor`

```typescript
import { WeakMapTypeConstructor } from '@typedly/constructor';
```

### `WeakSetTypeConstructor`

```typescript
import { WeakSetTypeConstructor } from '@typedly/constructor';
```

## Type

### `ExtractConstructorArgs`

```typescript
import { ExtractConstructorArgs } from '@typedly/constructor';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/check](https://github.com/typedly/check)**: A **lightweight TypeScript** type definitions library for type comparison.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/constructor
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/constructor
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/constructor
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/constructor
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/constructor/issues
  [typedly-forks]: https://github.com/typedly/constructor/network
  [typedly-license]: https://github.com/typedly/constructor/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/constructor/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fconstructor.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fconstructor

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
