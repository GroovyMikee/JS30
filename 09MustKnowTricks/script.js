const dogs = [{name: 'Baster', age: 6}, {name: 'Niki', age: 5}]

function makeGreen() {
    const p = document.querySelector('p')
    p.style.color = 'red'
    p.style.fontSize = '50px'
}

//Regular
console.log('hello')

//interpolated
console.log('Hello i am a %s string', '😆')

//styled
console.log('%c Hello I am some great text', 'font-size: 50px', 'background: red')

//warn
console.warn('Oh noooo')

//error
console.error('Shit!')

//info
console.info('Crocodiles eat 3-5 people a year')

//Testing
console.assert(1 === 1, 'That is wrong')

//clearing
    //console.clear()

//viewing DOM Elements
const p = document.querySelector('p')
console.log(p)
console.dir(p)

//grouping thing together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`This is ${dog.name} he is ${dog.age} years old`)
    console.groupEnd(`${dog.name}`)
})

//counting
console.count('Wes')
console.count('Wes')
console.count('Steve')
console.count('Wes')
console.count('Steve')
console.count('Steve')

//timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
    })

console.table(dogs)