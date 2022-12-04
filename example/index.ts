import express from 'express';
import { separateNumberByFirstDigit } from '../dist';

const app = express();

const port = 3333;
const array = [
  10230, 1293, 60909, 70909, 80045, 945904, 10203, 234030, 2394839, 2384938,
  29349, 340940, 49549, 506090,
];
app.get('/', (req, res) => {
  res.send(separateNumberByFirstDigit(array));
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
