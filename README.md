# Cruzhacks Backend Engineering Team Coding Challenge

Simple REST API, written using JS with Express + Node and using MongoDB as the database.

## Installation
This program requires Node.js (I'm using version 10.3.0)
To install all the NPM dependencies enter the command.
```
npm install
```
To start the server (port: 302)
```
npm start
```
The console should return that the server is now online and is listening to the desired port.
## Usage:
There are 3 API endpoints that perform basic Create and Read operations.<br/>

**There are 2 GET request command:**
```
curl --request GET http://localhost:302/hackers/
```
This command will return all the hackers currently in the database.
```
curl --request GET http://localhost:302/hackers/2
```
This command will return a single hacker with the **id: 2** from the database.
These 2 GET request will also console.log errors if the hacker doesn't exist in the database and will console.log the returned hacker in JSON format if they exist.<br/>

**There are 1 POST request command:**
```
curl --data "name=Jane%20Doe&email=UCSC@email.com&school=UCSC&major=CS&age=22&id=2" http://localhost:302/add
```
This command saves the hacker into the database as:
```
{
    "name": "Jane Doe",
    "email": "UCSC@email.com",
    "school": "UCSC",
    "major": "CS",
    "age": 22,
    "id": 2
} 
```
