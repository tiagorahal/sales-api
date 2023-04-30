module.exports = {
  type: 'database-type',
  host: 'localhost',
  port: 5432,
  username: 'your-username',
  password: 'your-password',
  database: 'your-database',
  entities: ['src/**/*.entity.ts'],
  synchronize: false,
};