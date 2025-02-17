export default function initSmoothScroll() {
  const links = document.querySelectorAll('.header-menu-item a')
  const header = document.querySelector('.header')

  function smoothScroll(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const headerHeight = header.offsetHeight
    const topo = section.offsetTop - headerHeight - 20

    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })
  }

  links.forEach(link => link.addEventListener('click', smoothScroll))
}
