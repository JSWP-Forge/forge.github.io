export default function initBorderBottomInHeader() {
  const header = document.querySelector('.header-bg')

  function addBorderBottomm() {
    if (window.scrollY > 100) {
      header.style.borderBottom = '1px solid #EAEAEA'
    } else {
      header.style.borderBottom = 'none'
    }
  }

  window.addEventListener('scroll', addBorderBottomm)
}
