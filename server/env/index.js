/* eslint-disable global-require */

const path = require('path');
const devConfigPath = path.join(__dirname, './development.js');
const productionConfigPath = path.join(__dirname, './production.js');

if (process.env.NODE_ENV === 'production') {
  // THESE TWO LINES IN THE PACKAGE JSON WERE PREVENTING HEROKU FROM DEPLOYING
  // "db-init": "pg-init juke",
  // "postinstall": "npm run db-init"
  module.exports = require(productionConfigPath);
} else {
  module.exports = require(devConfigPath);
}
