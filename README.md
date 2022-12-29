# benford-analysis

A lib to analisys datasets by newcomb-benford's law

## Instalation

```
yarn add benford-analysis
```

## Usage

```
import {
  readCsv,
  separateNumberByFirstDigit,
  getDeviationByFirstDigit,
  getBenfordFirstDigitExpected,
} from 'benford-analisys';
```

### `readCsv`

You can read files and receive a array with the function

props:

- csvPath: `string`

it expect receive the path where you save the upload file, check on [example](https://github.com/JonathanThomaz/benford-analysis/tree/main/example)

### `separateNumberByFirstDigit`

You can send an array from a selected column, remember to remove the head or return only number

props:

- array: `Array<number>`

This function return an object with the digit d1, d2, d3,..., d9 contains percent and total numbers analized to each digit.

Check on [example](https://github.com/JonathanThomaz/benford-analysis/tree/main/example)

### `getDeviationByFirstDigit`

You can define a d number, it to refer the digit. And define a percent about that digit d.

props:
- d: `number`
- percent: `number`

It return the digit d, expect percent, percent and the deviation

Check on [example](https://github.com/JonathanThomaz/benford-analysis/tree/main/example)

### `getBenfordFirstDigitExpected`

It return the expected percent about digits from 1 to 9

Check on [example](https://github.com/JonathanThomaz/benford-analysis/tree/main/example)

### `getDefaultDeviation`

It return the default deviation of a array of numbers

Check on [example](https://github.com/JonathanThomaz/benford-analysis/tree/main/example)
