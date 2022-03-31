const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();
const port = 2704;



//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let books = [{bookId:0, bookName: "asd"},{bookId:1, bookName: "asdq"}];

let colors = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

app.get('/',(req,res) => {
    res.send("Hello from Node.js api");
});
app.get('/books',(req,res) => {
    res.json(books);
});
app.get('/colors',(req,res) => {
    res.json(colors);
});

app.listen(port, () => console.log(`Hello World app listening on port ${port}`));