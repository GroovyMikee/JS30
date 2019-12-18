const hero = document.querySelector('.hero')
const textHero = hero.querySelector('h1')
const walk = 500

function shadow(e) {
    const width = hero.offsetWidth
    const height = hero.offsetHeight
    let x = e.offsetX
    let y = e.offsetY

    if (this !== e.target) {
        x = x + e.offsetLeft
        y = y + e.offsetTop
    }

    const xWalk = (x / width * walk) - (walk / 2)
    const yWalk = (y / height * walk) - (height / 2)

    textHero.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
                            ${xWalk * -1}px ${yWalk}px 0 blue,
                            ${yWalk}px ${xWalk * -1}px 0 green`
}

hero.addEventListener('mousemove', shadow)