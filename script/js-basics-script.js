var myVar = "Voila! It worked!";
var myArray = [1,2,3,4,5,6];
var nestedArray = [1,[2,3,"dog"],48];

function myMath(num) {
	return (Math.pow(num,2)+7)/2
}

var myCars = [{
		make: "Nissan",
		model: "Sentra",
		color: "Silver",
		year: 2004,
		used: true,
		gears: [1,2,3,4,5,"R"],
	},
	{
		make: "Ford",
		model: "Taurus",
		color: "Champagne",
		year: 2001,
		used: true,
		gears: ["automatic"],
	},
	{
		make: "Porche",
		model: "911 Turbo",
		color: "red",
		year: 2015,
		used: false,
		gears: [1,2,3,4,5,"R"],
	}
];

function carAge(obj){
	var name = obj.make + " " + obj.model;
	var age = 2016 - obj.year;
	return "That " + name + " is " + age + " years old.";
};