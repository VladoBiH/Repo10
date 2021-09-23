// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
// End of lion object

function myFunction(lionSound, lionSoundValue) {   // Change this line
// Only change code below this line
 lion[lionSound] = lionSoundValue;
 return lion;
// Only change code above this line
}
console.log(myFunction("roar", "roar-roar")); // Change this line
module.exports = myFunction;