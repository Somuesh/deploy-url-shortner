import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';
import cors from 'cors';


dotenv.config({ path: './config/.env' });

const app = express();

//connect Database
connectDB();

app.use(cors({
  origin: '*'
}));
// Body Parser
console.log("app run")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("API is working...")
})
//middlewares
app.use('/', indexRouter);
app.use('/api', urlsRouter);

// Server Setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});