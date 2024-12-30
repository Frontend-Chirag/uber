import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || '3000';

const app = express();



app.use(cors());


const server = http.createServer(app);



server.listen(port, () => {
    console.log(`listening on port ${port}`)
});

