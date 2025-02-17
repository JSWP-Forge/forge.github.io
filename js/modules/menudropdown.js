export default function initMenuDropdown() {
  const button = document.querySelector('.hamburger')
  const headerAllLinks = document.querySelector('.header-all-links')
  const eachLink = document.querySelectorAll('.header-menu a')

  function openMenuDropdown() {
    headerAllLinks.classList.toggle('active')
  }

  function closeMenuDropdown() {
    if (
      this.classList.value === '' ||
      this.classList.value === 'selectedLink'
    ) {
      headerAllLinks.classList.remove('active')
    }
  }

  eachLink.forEach(link => link.addEventListener('click', closeMenuDropdown))
  button.addEventListener('click', openMenuDropdown)
}
