function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('navbar-sticky');
    }
  });
}

function incrementStats() {
  const counters = document.querySelectorAll(".conter");

  counters.forEach((conter) => {
    conter.innerText = 0;

    const updatecounter = () => {
      const target = +conter.getAttribute("data-target");
      const c = +conter.innerText;

      const increment = target / 200;
      if (c < target) {
        conter.innerText = Math.ceil(c + increment);
        setTimeout(updatecounter, 1)
      }else {
        conter.innerText = target;
      }
    }
    updatecounter();
  })
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);