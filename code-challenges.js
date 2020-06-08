// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."
//creat a function that takes in an array of objects

const galaxyInhabitants = (array) => {
  //map over the array, and get to each object in the array
  let sentences = array.map(person => {
    //declare a variable for the value at each name key in the object and split it into an array
    let personArray = person.name.split(" ")
    //declare a variable to save our map over our array of the person's name
    let cap = personArray.map(name => {
      //returning the value of the first letter capitalized PLUS the remaining letters
      return name.charAt(0).toUpperCase()+name.substring(1)
    //join the name array together into a string  
    }).join(" ")
    // return the string interpolation of our capitialized name and the location IN the object of their occupation.
    return `${cap} is a ${person.occupation}.`
  })
  //final return of the array of sentences, joined into a string. 
  return sentences.join(" ")
}

console.log(galaxyInhabitants(people))





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


//create a function that takes in an array
const moduloOfThree = (array) => {
    //return the array filtered by typeof to select only the numbers
    return filteredArray = array.filter(value => typeof value === "number")
    //mapped through to find the remainder using %3
    .map(value => value%3)
}

console.log(moduloOfThree(testingArray1))
console.log(moduloOfThree(testingArray2))



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
const noDupe = (array1, array2) => {
  //use spread operator to concat the two into one new array
  let newArr = [...array1,...array2]
  //filter that new array to only keep values that are unique
  return newArr.filter((value, index) => newArr.indexOf(value) === index)
}

console.log(noDupe(testingArray3, testingArray4))