document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = "1s";
    card.style.opacity = 1;
  }, 300);
});

//ali-cloudlabs.github.io
