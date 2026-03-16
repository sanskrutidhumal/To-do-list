# To-do-list
A to-do list is a list of tasks that need to be completed, often prioritized by importance or urgency. It's a simple yet effective tool for organizing and managing tasks, whether for personal or professional use.
# To Do List API using SQL and MongoDB

## Overview
This project implements a simple To Do List backend system using Node.js and Express. 
It demonstrates how task data can be stored and managed using two different databases: 
MySQL (SQL database) and MongoDB (NoSQL database).

The application provides REST API endpoints for creating, retrieving, and deleting tasks.

## Technologies Used
Node.js  
Express.js  
MySQL  
MongoDB  
Mongoose  

## Features
- Add new tasks
- View all tasks
- Delete tasks
- Support for both SQL and NoSQL databases

## Database Design

### MySQL
Table Name: todos

Columns:
id – Primary Key  
task – Task description  
completed – Task status  

### MongoDB
Collection Name: todos

Fields:
task – Task description  
completed – Boolean status  

## API Endpoints

### MongoDB
POST /mongo/todo  
GET /mongo/todo  
DELETE /mongo/todo/:id  

### SQL
POST /sql/todo  
GET /sql/todo  
DELETE /sql/todo/:id  

## How to Run

1 Install dependencies
npm install

2 Start MongoDB and MySQL server

3 Create MySQL database using:
sql/db.sql

4 Run the server
node server.js

5 Test APIs using Postman or any REST client.

## Author
Created for educational and learning purposes.
