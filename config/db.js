import { Sequelize } from 'sequelize';

const dbName = 'YOUR_DB_NAME';
const dbUsername = 'YOUR_DB_USERNAME';
const dbUsernamePassword = 'YOUR_DB_PASSWORD';
const dbHost = 'localhost';


const db = new Sequelize(dbName, dbUsername, dbUsernamePassword, {
  host: dbHost,
  dialect: 'mysql'
})

export default db;