let playerarea = document.querySelector('.myplayer')
let media = playerarea.querySelector('video')
let controls = playerarea.querySelector('.myplayer__controls')
let play = controls.querySelector('.play')
let rewind = controls.querySelector('.rewind')
let forward = controls.querySelector('.forward')
let timeArea = document.querySelector('.timer')
let currentTime = timeArea.querySelector('.currentTime')
let progBar = controls.querySelector('.controls__progressbar-current')
let videoTime = timeArea.querySelector('.videoTime')
let volumeico = controls.querySelector('.volume .icon')
let volumeBar = controls.querySelector('.volume .volume__progress')
let volumeBarInput = volumeBar.querySelector('input')
let fullScreen = document.querySelector('.fullscreen')
// event listeners
media.volume = .5
media.addEventListener('timeupdate', function () {
    currentTime.textContent = getTime(media.currentTime)
    barLength = (media.currentTime / media.duration) * 100
    progBar.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`
    progBar.value = barLength
})
play.addEventListener('click', function () {
    videoTime.textContent = getTime(media.duration)
    if (media.paused) {
        media.play()
        togglePlayicon()
    } else {
        media.pause()
        togglePlayicon()
    }
})
rewind.addEventListener('click', function () {
    media.currentTime = media.currentTime - 5
})
forward.addEventListener('click', function () {
    media.currentTime = media.currentTime + 5
})
progBar.addEventListener('input', function () {
    media.currentTime = (this.value / 100) * media.duration
})
volumeico.addEventListener('click', function () {
    volumeBar.classList.toggle('active')
})
volumeBarInput.addEventListener('input', function () {
    media.volume = this.value / 100
    this.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 ${this.value}%);`
})
fullScreen.addEventListener('click', function () {
    if (!document.fullscreenElement) {
        if (playerarea.requestFullscreen) {
            playerarea.requestFullscreen()
        } else if (playerarea.mozFullScreenElement) {
            playerarea.mozFullScreenElement()
        } else if (playerarea.msFullscreenElement) {
            playerarea.msFullscreenElement()
        } else if (playerarea.webkitFullscreenElement) {
            playerarea.webkitFullscreenElement()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
})
// toggle play icon
function togglePlayicon() {
    let icon = play.querySelector('i')
    icon.classList.toggle('ion-md-pause')
    icon.classList.toggle('ion-md-play')
}
function getTime(time) {
    minutes = Math.floor(time / 60)
    seconds = Math.floor(time % 60)
    if (seconds < 10) {
        seconds = '0' + seconds
    } else {
        seconds
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    } else {
        minutes
    }
    return minutes + ':' + seconds
}
