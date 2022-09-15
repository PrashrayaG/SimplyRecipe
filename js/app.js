const getElement = (selector) => {

  const element = document.querySelector(selector)
  if (element) return element
  throw Error
  (`Check your class name, there is no ${selector} class.`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// for date in footer

const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;