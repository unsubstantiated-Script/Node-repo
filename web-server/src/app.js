const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

//Serving up the file directory
app.use(express.static(publicDirectoryPath));

//serving up html and json
// app.get("", (req, res) => {
// 	res.send("<h1>Yo diddly dawg!</h1>");
// });

app.get("/weather", (req, res) => {
	res.send("This is the weather page!");
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
