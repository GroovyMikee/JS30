const pressed = []
const secredCode = 'abc'
console.log('wpisz "abc" :)')

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    pressed.splice(-secredCode.length - 1, pressed.length - secredCode.length)
    if (pressed.join('').includes(secredCode))
    cornify_add();
    console.log(pressed)

})