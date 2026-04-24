import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoute';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/crmDB');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send('Nodemon with Babel is working and running on port ' + PORT + '!');
});

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});