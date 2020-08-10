let reveals = document.querySelectorAll('.reveal');
let revealsArr = Array.from(reveals);
revealsArr.forEach((item) => {
  window.addEventListener('scroll', () => {
    if (item.getBoundingClientRect().top < window.innerHeight) {
      item.classList.add('reveal_active');
    }
  });
});
