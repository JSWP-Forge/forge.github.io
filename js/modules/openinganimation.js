export default function initOpeningAnimation() {
  const containers = document.querySelectorAll('.js-scroll')

  if (containers.length) {
    function animateWebsiteOpening() {
      containers.forEach((container, index) => {
        setTimeout(() => {
          container.classList.add('animate')
        }, 400 * index)
      })
    }

    animateWebsiteOpening()
  }
}
