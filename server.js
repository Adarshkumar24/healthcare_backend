// Load environment variables FIRST
require('dotenv').config();

const app = require("./src/app");
const PORT = process.env.PORT || 5000;
const db = require("./src/models");

// Sync database and start server
// Use { force: true } only in development to drop and re-sync the DB.
db.sequelize.sync() 
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

