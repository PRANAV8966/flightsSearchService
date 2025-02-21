# Welcome to Flight Booking and Searching service

## Project Setup
- clone the project on your local.
- execute `npm install`on the same path as of root directory of the downloaded project.
- create a `.env` file in the root directory and the following environment variables.
    -`PORT = 3000`
- Inside the `src/congif` folder create a new file `config.json` and the folllowing json code.

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "FlightSearchDevDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- once you have added your DB config, go to the src folder from your terminal and execute `npx sequelize db:create` .