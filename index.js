import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs';

const {promise} = fs;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;//PORT=8080 npm start

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Wellcome</h1>');
})

if(process.env.NODE_ENV == 'development') {
    console.log('development mode');
} else {
    console.log('production mode');
}

// fs.readFile(path.join(__dirname, './package.json'), (err, content) => {
//     if (err) {
//     console.error(err);
//     }
//     app.get('/', (req, res) => {
//          res.send(`<h1>Wellcome</h1><h2>JSON text:</h2><pre>${content.toString()}</pre>`);
//             })
// });

 app.get('/', async (req, res) => {
    try {
     const text = await promises.readFile(path.join(__dirname, './package.json'));
      res.send(`<h1>Welcome</h1><h2>JSON text:</h2><pre>${text.toString()}</pre>`);
    } catch (err) {
      console.error(err);
    }
  });


 app.listen(PORT, ()=> {
     console.log(`Server started on http://localhost:${PORT}`);
 })