const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress-field')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player-slider')
const fullWindow = player.querySelector('.full-window')

function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRageUpdate() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
    console.log(percent)
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

function setFullWindow() {
    video.requestFullscreen()
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRageUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRageUpdate))
fullWindow.addEventListener('click', setFullWindow)

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)