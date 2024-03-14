import express  from "express";

const app = express();

app.get("/",(req, res) =>{
    return res.send("hello world");

});

app.listen(3000, () =>{
    console.log('Appliction listening at http://local:3000');
});