### this is a fork form this repo: https://github.com/techiediaries/fake-api-jwt-json-server


# JSONServer + JWT Auth

A Fake REST API using json-server with JWT authentication. 

Implemented End-points: login,register

## Install

```bash
$ npm install
$ npm run start:server
```

Might need to run
```
npm audit fix
```

## How to login/register?

You can login/register by sending a POST request to

```
POST http://localhost:8000/auth/login
POST http://localhost:8000/auth/register
```
with the following data 

```
{
  "email": "nilson@email.com",
  "password":"nilson"
}
```

## Todos Routes
```
POST http://localhost:8000/todos
GET http://localhost:8000/todos
DELETE http://localhost:8000/todos/:id
PATH http://localhost:8000/todos/:id
```
