export default function initOpeningAnimation() {
  const containers = document.querySelectorAll('.js-scroll')
  const windowHalf = window.innerHeight * 0.6

  if (containers.length) {
    function animateWebsiteOpening() {
      containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top - windowHalf

        if (containerTop < 0) {
          container.classList.add('animate')
        }
      })
    }

    animateWebsiteOpening()

    window.addEventListener('scroll', animateWebsiteOpening)
  }
}
