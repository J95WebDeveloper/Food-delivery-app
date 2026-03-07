import express from 'express'
import { PORT} from './config/config.js'
import { connectDB } from './config/dbConfig.js'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import foodRoutes from './routes/foodRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import path from "path";

const __dirname = path.resolve();

const app = express()

app.use("/uploads", express.static("uploads"));
app.use(express.json())
app.use(cors())


app.use('/api', authRoutes)
app.use('/api/food', foodRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)


/*********   Deploy Code  ************/
app.use(express.static(path.join(__dirname, "./Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Frontend/dist", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is connected...${PORT}`)
    connectDB()
})