import express from 'express';
import { readCsv, separateNumberByFirstDigit } from '../dist';
import uploadFile from './services/uploadFile';
import bodyParser from 'body-parser';
import {
  getBenfordFirstDigitExpected,
  getDeviationByFirstDigit,
} from './../src/benford/law/index';

const app = express();

const port = 3333;

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/benford-law', (req, res) => {
  res.status(200).send(getBenfordFirstDigitExpected());
});

app.post('/separate', (req, res, next) => {
  const { array } = req.body;
  if (array) {
    const arrayNumber = array.filter((item: number | string) => Number(item));
    res.status(200).send(separateNumberByFirstDigit(arrayNumber));
  }
  res.status(400).send('Please send an array');
});
app.post('/benford-law', (req, res, next) => {
  const { d1, d2, d3, d4, d5, d6, d7, d8, d9 } = req.body;
  const array = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
  res.send(
    array.map((item, index) =>
      getDeviationByFirstDigit(index + 1, item.percent)
    )
  );
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
