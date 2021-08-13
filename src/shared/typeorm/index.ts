import { createConnection } from 'typeorm';

createConnection()
  .then(connection => {
    // here you can start to work with your entities
  })
  .catch(error => console.log(error));
