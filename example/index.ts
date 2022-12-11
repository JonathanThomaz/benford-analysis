import express, { NextFunction } from 'express';
import { readCsv, separateNumberByFirstDigit } from '../dist';
import uploadFile from './services/uploadFile';

const app = express();

const port = 3333;
const array = [
  10230, 1293, 60909, 70909, 80045, 945904, 10203, 234030, 2394839, 2384938,
  29349, 340940, 49549, 506090,
];
app.get('/', (req, res) => {
  res.send(separateNumberByFirstDigit(array));
});

app.post('/read-csv', async (req, res, next) => {
  try {
    await uploadFile(req, res);
    if (req.file === undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }

    const array = readCsv(req.file.path);

    res.status(200).send({
      message: 'Uploaded the file successfully: ' + req.file.originalname,
      contentFile: array,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file?.originalname}. ${err}`,
    });
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
