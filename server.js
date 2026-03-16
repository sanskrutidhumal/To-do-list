const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mysql = require("mysql2");

const Todo = require("./mongodb/todoModel");

const app = express();
app.use(bodyParser.json());

/* ------------------ MongoDB Connection ------------------ */

mongoose.connect("mongodb://localhost:27017/todoDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* ------------------ MySQL Connection ------------------ */

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"todo_db"
});

db.connect(err=>{
    if(err) throw err;
    console.log("MySQL Connected");
});

/* ------------------ MongoDB Routes ------------------ */

app.post("/mongo/todo", async(req,res)=>{
    const todo = new Todo(req.body);
    await todo.save();
    res.send(todo);
});

app.get("/mongo/todo", async(req,res)=>{
    const todos = await Todo.find();
    res.send(todos);
});

app.delete("/mongo/todo/:id", async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.send("Task Deleted");
});

/* ------------------ SQL Routes ------------------ */

app.post("/sql/todo",(req,res)=>{
    const task = req.body.task;
    db.query("INSERT INTO todos(task) VALUES(?)",[task],(err,result)=>{
        if(err) throw err;
        res.send("Task Added");
    });
});

app.get("/sql/todo",(req,res)=>{
    db.query("SELECT * FROM todos",(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.delete("/sql/todo/:id",(req,res)=>{
    db.query("DELETE FROM todos WHERE id=?",[req.params.id],(err,result)=>{
        if(err) throw err;
        res.send("Task Deleted");
    });
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});