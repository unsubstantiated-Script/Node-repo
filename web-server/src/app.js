const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Defining paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
//Changing the hardcoded path to the views
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setting up the handlebars view engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Serving up the static directory to serve
app.use(express.static(publicDirectoryPath));

//serving up html and json
// app.get("", (req, res) => {
// 	res.send("<h1>Yo diddly dawg!</h1>");
// });

//serving up a handlebar view passing data through the object below...
app.get("", (req, res) => {
	res.render("index", {
		title: "Weather App",
		name: "Justin Fulton",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Justin Fulton",
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help",
		helpText: "Some text to help you",
		name: "Justin Fulton",
	});
});

app.get("/weather", (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "You must provide an address",
		});
	}
	console.log(req.query.search);
	res.send({
		forecast: [],
		location: [],
		address: req.query.address,
	});
});

app.get("/products", (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: "You must provide a search term",
		});
	}
	console.log(req.query.search);
	res.send({
		products: [],
	});
});

//The 404 page!
app.get("/help/*", (req, res) => {
	res.render("errPage", {
		title: "404",
		errText: "Help article not found!",
		name: "Justin Fulton",
	});
});

app.get("*", (req, res) => {
	res.render("errPage", {
		title: "404",
		errText: "Page Not Found!",
		name: "Justin Fulton",
	});
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
