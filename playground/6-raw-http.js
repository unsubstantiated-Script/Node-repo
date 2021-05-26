//This is the OG way of doing it. Now we use NPM express...
const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=95676a5f10570c1427817800e96eb739&query=45,-75&units=f`;

const request = http.request(url, (response) => {
	let data = "";

	response.on("data", (chunk) => {
		data = data + chunk.toString();
	});
	response.on("end", () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on("error", (error) => {
	console.log(error);
});

//Switches it off
request.end();
