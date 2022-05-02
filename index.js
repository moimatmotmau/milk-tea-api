import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import products from './routers/products.js'
import users from './routers/users.js'
import orders from './routers/orders.js'
import mongoose from 'mongoose';
// require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;
const URI = `mongodb+srv://vuongpham:monsterbaby562k@vmilktea.qtdx9.mongodb.net/VMilkTea?retryWrites=true&w=majority`

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/products', products)
app.use('/users', users)
app.use('/orders', orders)
console.log('port: ', PORT);
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to db');
        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('err: ', err);
    })