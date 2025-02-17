export default function initSelectedLinks() {
  const headerMenuLinks = document.querySelectorAll('.header-menu a')
  function selectLink() {
    const pageHref = location.href
    console.log(pageHref)

    headerMenuLinks.forEach(link => {
      link.classList.remove('selectedLink')
    })

    if (pageHref.includes('http')) {
      this.classList.add('selectedLink')
    }
  }

  headerMenuLinks.forEach(link => link.addEventListener('click', selectLink))
}
