import express, {Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log('Connected to Database!'))
.catch((error) => console.log(error.message))

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async(req: Request, res: Response) => {
    res.json({ message: "Hello" })
})

app.listen(7000, () => {
    console.log('Server started on 7000 PORT')
})