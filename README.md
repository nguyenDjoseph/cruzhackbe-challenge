#Cruzhacks Backend Engineering Team Coding Challenge

Simple REST API, written using JS with Express + Node and using MongoDB as the database.

There are 3 endpoints to request from.

>curl --request GET http://localhost:302/hackers/
This command will return all the hackers currently in the database.
>curl --request GET http://localhost:302/hackers/2
This command will return a single hacker with the ID: 2 from the database.
>curl --data "name=Jane%20Doe&email=UCSC@email.com&school=UCSC&major=CS&age=22&id=2" http://localhost:302/add