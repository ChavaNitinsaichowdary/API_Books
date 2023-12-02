import express from 'express';
import bodyParser from 'body-parser';
const PORT = 3000;
const app = express();
import bookRouters from './routes/books.js';
app.use(bodyParser.json());
app.use('/api/books',bookRouters);
app.listen(PORT,()=> console.log( `server is running on port:${PORT}`));