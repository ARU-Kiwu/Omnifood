const card = document.querySelector(".plan-card.highlighted");
const button = document.querySelector(".menu-icon");
const header = document.querySelector("header");
const root = document.querySelector("body");
const nav = document.querySelector(".main-nav");
const hero = document.querySelector(".hero-section");

// Sticky Header

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? root.classList.add("sticky")
      : root.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

obs.observe(hero);

// Card Animation

setInterval(() => {
  card.classList.toggle("highlighted");
}, 3000);

// Mobile Nav

function toggleNav() {
  header.classList.toggle("nav-open");
}

button.addEventListener("click", toggleNav);

nav.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("nav-link") &&
    header.classList.contains("nav-open")
  ) {
    header.classList.remove("nav-open");
  }
});
