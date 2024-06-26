<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

DOT Admin Panel is a project that aims to provide a simple and easy-to-use admin panel for the DOT project. The project is built using the NestJS framework, TypeORM library and MySQL database.

## How to Reproduce

Clone the Repository

```bash
$ git clone https://github.com/NaufalFadhil/DOT_Backend.git
```

Go to the project directory

```bash
$ cd DOT_Backend
```

Install dependencies

```bash
# Install dependencies
$ npm install
```

Setup the database connection and environment variables
```bash
# Create a .env file in the root directory
$ copy .env.example .env
```

```bash
# Open the .env file and fill in the required environment variables
DB_USERNAME="root"
DB_PASSWORD="root"
DB_NAME="db_name"
DB_HOST="localhost"
DB_PORT="3306"

JWT_SECRET="jwt_secret_key" # Change this to a random string
```

## Database Setup

Run the following command to create the database tables

```bash
$ npm run migrate
```

## Running the app

```bash
# development
$ npm run start

# watch mode (hot reload)
$ npm run start:dev

# production mode
$ npm run start:prod
```

# How to Use

Open Postman or any API testing tool and make a POST request to the following endpoint

```bash
POST http://localhost:3001/api/v1/auth/login
```

After that, you can setup frontend project by following the instructions in the [DOT Frontend Repository]

```text
https://github.com/NaufalFadhil/DOT_Frontend
```

## License

Nest is [MIT licensed](LICENSE).
