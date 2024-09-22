const video = document.querySelector('.video-player')
const button = documen.querySelectorAll('.button-card button')

button.forEach((element) => {
    element.addEventLitener('click', function(e) {
        const url = e.target.getAttribute('data-url')
        video.setAttribute('src', url )
        video.play()
    })
})