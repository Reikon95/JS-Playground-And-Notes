//example of an object. Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.



var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

//name legs tails and friends are all PROPERTIES


//Accessing Object Properties with Variables

var testObj = {
  12: "Hogg",
  16: "Jones",
  19: "Laidlaw"
};


var playerNumber = 16 // 
var player = testObj[playerNumber];   

//This will look up number 16 then assign the name to the var "player" - in this case Jones.
