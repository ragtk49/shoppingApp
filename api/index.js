const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database')
    })
    .catch(() => {
        console.log('Connection failed')
    });

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})