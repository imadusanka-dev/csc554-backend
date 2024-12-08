import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config'

const PORT = 3001;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});