# tests

online platform that allows purchasing of sensitive medical tests online, anonymously and allows patient-physician connection to offer convenience and time managment


## Features

-everything all ecommerce platforms must have
-paypal / credit card integration 
-backend database seeder etc 

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
PAYPAL_CLIENT_ID = your_paypal_clientId
JWT_SECRET = 'you_secret'
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
