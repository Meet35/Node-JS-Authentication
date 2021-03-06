import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from "./routes/user.js";
// import stockRouter from './routes/stock.js';
// import watchlistRouter from './routes/watchlist.js';
// import priceRouter from './routes/price.js';
// import livepriceRouter from './routes/liveprice.js';
// import stockinfoRouter from './routes/stockinfo.js';
// import triggerRouter from './routes/trigger.js';
// import contactRouter from './routes/contact.js';
// import { fetchData } from './script.js';
// import { fetchLivedata } from './livescript.js';
// import { removeData } from './initialscript.js';
// import { removeStock } from './changestockscript.js';
// import { checkExecuteTrigger } from './triggerscript.js';
// import { fetchOpenPrice } from './openpricescript.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// app.use('/', (req, res) => {
//   res.send('Welcome to Schedule-job for fetching stocks');
// })

app.use("/user", userRouter);


const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);