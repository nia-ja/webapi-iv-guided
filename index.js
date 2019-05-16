require('dotenv').config(); // should be on the very top. Than create .env file with PORT in it. Check .gitignore file: .env should be listed in it (it should not go into production!)

const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on port ${PORT} ***\n`);
});