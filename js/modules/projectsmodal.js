export default function initProjectsModal() {
  const images = document.querySelectorAll('.projects-image img')
  const modalImage = document.querySelector(
    '.projects-modal .projects-modalimage'
  )
  const modalContainer = document.querySelector('.projects-modalcontainer')

  function updateModalImage() {
    const src = this.getAttribute('src')
    modalImage.setAttribute('src', src)

    openProjectsModal()
  }

  function openProjectsModal() {
    modalContainer.classList.add('active')
    document.body.classList.add('no-scroll')
  }

  function closeProjectsModal(event) {
    if (
      event.target.classList.contains('projects-modalcontainer') ||
      event.target.id === 'projects-modalclose'
    ) {
      modalContainer.classList.remove('active')
      document.body.classList.remove('no-scroll')
    }
  }

  images.forEach(image => image.addEventListener('click', updateModalImage))
  modalContainer.addEventListener('click', closeProjectsModal)
}
