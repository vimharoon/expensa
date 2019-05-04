const config = {
  mysqlURL: process.env.MYSQL_URL || 'localhost',
  port: process.env.PORT || 8000,
  dbName: 'test',
};

export default config;
