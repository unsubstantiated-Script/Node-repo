//Object property shorthand

const perName = "JoJo Rabbit";
const age = 55;

const user = {
	perName,
	age,
	location: "Philistberg",
};
console.log(user);

//Destructuring...
const product = {
	label: "Red Notebook",
	price: 3,
	stock: 201,
	salePrice: undefined,
};

//renaming the keys                         //default vaules of new property
// const { label: productLabel, stock, rating = "too cool" } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

//Destructuring inside the function params
const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction("order", product);
