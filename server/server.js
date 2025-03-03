import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './congif/mongodb.js';
import connectCloudinary from './congif/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config

const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

// middleware
 app.use(express.json());
 app.use(cors());

// api endpoints
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get('/',(req,res)=>{
    res.send('API Working')
})
app.listen(port, ()=>console.log('Server running on port: ' + port))