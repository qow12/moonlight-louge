// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = target.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.background = "rgba(10, 10, 15, 0.95)"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"
  } else {
    navbar.style.background = "rgba(10, 10, 15, 0.8)"
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Add animation on scroll for feature cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all feature cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })
})

// Dynamic stats counter animation
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target + "+"
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start) + "+"
    }
  }, 16)
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
        entry.target.classList.add("animated")
        const numbers = entry.target.querySelectorAll(".stat-number")
        numbers.forEach((num) => {
          const target = Number.parseInt(num.textContent)
          animateCounter(num, target)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const statsSection = document.querySelector(".stats")
if (statsSection) {
  statsObserver.observe(statsSection)
}
