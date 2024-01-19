const menuBtn = document.getElementById('menu-btn')
const menuContainer = document.getElementById('menu-container')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')
const nextBtn = document.getElementById('btn-next')
const previousBtn = document.getElementById('btn-previous')
const slidesItems = document.querySelectorAll('.slides-item')
const slideHeadings = document.querySelectorAll('[data-slide]')

const totalSlides = 3
let isMenuOpen = false
let currentSlide = 0

function toggleMenu() {
  isMenuOpen = !isMenuOpen
  menuBtn.ariaExpanded = isMenuOpen

  toggleClass(menuContainer, 'menu-open', isMenuOpen)
  toggleClass(iconHamburger, 'hidden', isMenuOpen)
  toggleClass(iconClose, 'hidden', !isMenuOpen)
}

function goNext() {
  currentSlide--

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  applySlides()
}

function goBack() {
  currentSlide++

  if (currentSlide > totalSlides - 1) {
    currentSlide = 0
  }

  applySlides()
}

function applySlides() {
  slideHeadings.forEach(slideText => slideText.classList.add('hidden'))
  document.querySelector(`[data-slide="${currentSlide}"]`).classList.remove('hidden')
  slidesItems.forEach(item => (item.style.transform = `translateX(-${currentSlide * 100}%)`))
}

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

menuBtn.addEventListener('click', toggleMenu)
nextBtn.addEventListener('click', goNext)
previousBtn.addEventListener('click', goBack)
