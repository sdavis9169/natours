const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

console.log(process.env);

const port = 3001;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
