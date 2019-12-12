//start with strings, numbers and booleans
let age = 100
let age2 = age
//console.log(age, age2)
age = 200
//console.log(age, age2)

let name = 'Wes'
let name2 = name
//console.log(name, name2)
name = 'wesley'
//console.log(name, name2)

//let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
const team = players
//console.log(players, team)
team[3] = 'Lux'
//this override the original array "players" also becouse "team" is only reference

//to copy the array there is several better methods, for example:
const team2 = players.slice()

//but in ES6 there is a spread method
const team3 = [...players]

//or using Array.from method
const team4 = Array.from(players)


//With objects
const person = {
    name: 'Wes Bos',
    age: 80
}

const capitan = person //this is bad becouse it's also overrides the originam object
//capitan.number = 99
//console.log(person)

//we need use Object.assign method
const cap2 = Object.assign({}, person, {number: 33})
//console.log(cap2)
//or use ...spread
const cap3 = {...person}
//console.log(cap3)

//This is only 1 level deep - both for Arrays and Objects
//but for nasted ones you should think twice before copy

const Mike = {
    name: 'Mike',
    age: 100,
    social: {
        facebook: 'michal',
        github: 'GroovyMikee'
    }
}

const dev = Object.assign({}, Mike)
//this only copies first level depth, the social of dev is reference to Mike

//to copy whole object to the end it is needed to parse it to string by JSON and then back parse to object like this
const superDev = JSON.parse(JSON.stringify(Mike))