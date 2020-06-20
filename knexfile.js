module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true,

  // migrations: {
  //   directory: './migrations'
  // },
  // seeds: {
  //   directory: "./seeds"
  // }
};
