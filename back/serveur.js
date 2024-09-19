import express from 'express';
import bodyParser from "body-parser";
import connectionDB from './config/dbconfigue.js';
import fashionRoutes from './routes/fashionRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import User from './models/userModels.js';

const corsOptions = {
  origin: 'http://localhost:5173',
}


const app = express();
const port = 5555;
// async function insert() {
//   await User.create({

//     name: 'ahmed',
//     email: 'ahmed12@gmail.com',
//     password: 'ahmed12'
//   })
// }
// insert();







app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: 'GET,POST,PUT,DELETE',  // Allow specific methods
  allowedHeaders: 'Content-Type',  // Allow specific headers
  // Credential:true,
}));





dotenv.config();
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(fashionRoutes)
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(cors())

app.use('/api/auth',fashionRoutes)

















connectionDB();
app.listen(port, () => {
  console.log(`Test app listening on port http://localhost:${port}`);
})