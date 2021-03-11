## [4.1.0](https://github.com/conekta/conekta-node/releases/tag/4.1.0) - 2021-03-10
- Adds checkout object and specs (also required for payment link)
## [4.0.1](https://github.com/conekta/conekta-node/releases/tag/4.0.1) - 2020-01-09
This version is a massive rewrite of the core functionality, and though the
public interfaces should remain unchanged, we suggest that you test your
integation as we correct a lot of non-intuitive behavior in the previous version.
### Fix
- Massive overhaul of the Resource object and the addition of ResourceList object.
- Fixes subscription spec interdepencies
- nextPage return object
### Cleanup
- Dependency updates
- Changes Nesh for Repl
- Prefixes several private methods (buildChildren, listObjectsToArray, post, del, put, custom) with _
### Feature
- Alternative nested object querying `{ customer: { email: 'example@example.com' }}`
- Adding previousPage method

## [3.7.0](https://github.com/conekta/conekta-node/releases/tag/3.7.0) - 2019-08-01
### Feature
- Updated deprecated modules and dependencies

## [3.6.1](https://github.com/conekta/conekta-node/releases/tag/v3.5.2) - 2018-12-05
### Feature
- We've made the library compatible with promises

## [3.5.1](https://github.com/conekta/conekta-node/releases/tag/3.5.1) - 2018-04-13
### fix
- fix Error certificate location

## [3.4.1](https://github.com/conekta/conekta-node/releases/tag/3.4.1) - 2018-04-13
### Bugfix
- Bugfix Error certificate location

## [3.3.1](https://github.com/conekta/conekta-node/releases/tag/3.3.1) - 2017-11-23
### Bugfix
- Bugfix when req is undefined and err exists

## [3.2.0](https://github.com/conekta/conekta-node/releases/tag/3.1.6) - 2017-09-11
### Change
- Change Cert file bundle with public one

## [3.1.6](https://github.com/conekta/conekta-node/releases/tag/3.1.6) - 2017-08-01
### Fix
- This version solves the error that only brings the last order of a list

## [3.1.5](https://github.com/conekta/conekta-node/releases/tag/3.1.5) - 2017-06-29
### Fix
- This version fixes the issue about undefined response (issue #36)

## [2.2.1](https://github.com/conekta/conekta-node/releases/tag/2.2.1) - 2017-05-29
### Feature
- Tag created for conekta admin consumer

## [3.1.0](https://github.com/conekta/conekta-node/releases/tag/3.1.0) - 2017-02-27
### Feature
- We've added modules to work with customer subscription

## [3.0.0](https://github.com/conekta/conekta-node/releases/tag/3.0) - 2017-02-16
### Update
- Library upgrade for payments api 2 support

## [2.2.0](https://github.com/conekta/conekta-node/releases/tag/2.2-stable) - 2017-02-16
### Change
- Change to support orders from payments api 2

## [1.6.5](https://github.com/conekta/conekta-node/releases/tag/1.6.5) - 2016-07-08
### Feature
- Now it can be used with node 6.2.2 support
###Fix
- Fixed some bugs on specs

## [1.5.0](https://github.com/conekta/conekta-node/releases/tag/v1.5.0) - 2015-10-20
### Feature
- Brand new enhancements for our contributors

## [1.1.1](https://github.com/conekta/conekta-node/releases/tag/v1.1.1) - 2015-09-23
### Change
- We were setting data into Base Resources instead instances at build_children function

## [1.1.0](https://github.com/conekta/conekta-node/releases/tag/v1.1.0) - 2015-09-16
### Change
- Node.js Callback style
- Add strict mode
- Add scope binding in order to reduce use of _this variable
- Specs updated
- Node JS support since 0.10.3 until 4.0.0

## [1.0.11](https://github.com/conekta/conekta-node/releases/tag/v1.0.11) - 2015-09-15
### Fix
- Fix to introduced global attr variable which leaked in mocha tests
- Add spec for subscription card update
- Update changelog
- Ignored .npmrc

## [1.0.10]() -
### Feature
- Add changelog
- Add code comments
- Add API Version validator

## [1.0.9](https://github.com/conekta/conekta-node/releases/tag/v1.0.9) - 2015-06-26
### Fix
- Fix conekta objects were not populating their attributes right
- Add specs updated to validate the bugs fixed

## [1.0.7](https://github.com/conekta/conekta-node/releases/tag/v1.0.7) - 2015-06-08
### Fix
- Customer creation with no subscription return failure
- Fix base64 node core library instead custom base64 code

## [1.0.6](https://github.com/conekta/conekta-node/releases/tag/v1.0.6) - 2015-05-26
### Feature
- Enhance Documentation
### Change
- Node core base64 library instead custom

## [1.0.5](https://github.com/conekta/conekta-node/releases/tag/v1.0.5) - 2015-05-18
### Update
- Finish first version of conekta node wrapper
