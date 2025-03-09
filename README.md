# Demo Stryker on Roman numbers

Just a trivial demo for a [Stryker](https://stryker-mutator.io/).
This is a demo code for my talk 
[Mutational testing in js](https://ilya.storks.cloud/talks/mutational-testing-in-js).

There is a function to convert decimal numbers to roman numbers and 
unit tests for it.

It is easy to see that code has 100% coverage with
```shell
npm run test:coverage
```

But Stryker identifies missing gaps:
```shell
npm run test:stryker
```
