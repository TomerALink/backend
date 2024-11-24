export default  {
  // dbURL: 'mongodb://127.0.0.1:27017',
  // dbName : 'tester_db'
    dbURL: process.env.MONGO_URL || 'mongodb+srv://tomtom2204:oXlmEy0mRwzBFtXp@staybnb.vnx8n.mongodb.net/',
  dbName : process.env.DB_NAME || 'staybn_db'
}
