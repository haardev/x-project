import express from 'express';
import path from 'path';
import conversations from './routes/conversations';

const app = express();
const port =  3000 || process.env.PORT;

app.use(express.json())

//Routes
app.use('/conversations', conversations);

//Default index
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
 });

app.listen(port, () => console.log(`The server has started on port: ${port}`));