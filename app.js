const express = require('express');
const app = express();

app.use(express.json());
// app.use(express.urlencoded());

const books = [];

app.get("/", (req, res) => {
    res.status(404).send("Hello !");
})

app.get("/api/:name", (req, res) => {
    const result = books.find(({name}) => {
        if(req.params.name === name){
          return name;  
        } 
    })
    res.status(404).send(result);
})

app.get("/api/", (req, res) => {
    res.status(404).send(req.query);

})

app.post("/", (req, res) => {
    books.push(req.body);
    res.status(404).send(books);
})

// app.use(req, res, next)

app.listen(3001, () => {
    console.log("server is running");
})