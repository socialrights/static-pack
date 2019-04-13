const menuTrigger = document.querySelector('.menu__switch')

const menuToggle = () => {
  if (menuTrigger) {
    menuTrigger.addEventListener('click', (event) => {
      event.preventDefault()
      menuTrigger.classList.toggle('isOn')
    })
  }
}

export default menuToggle
