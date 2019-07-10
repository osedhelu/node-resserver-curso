require("./config/config")

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
//estos son middeleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())

app.get("/users", (req, res) => {
	res.json("get users ")
});

app.post("/users/", (req, res) => {
	let body = req.body;
	if(body.name === undefined){
		res.status(400).json({
			err: false,
			masages: "the name is necessary"
		})
	}else{
		res.json({
			person: body
		})
	}
});

app.put("/users/:id", (req, res) =>{
	res.json("put users");
});

app.delete("/users/:id", (req,res) =>{
	res.json("delete users")
})


app.listen(process.env.POST , () => {
	console.log("conectado en el pueto", process.env.POST)
})