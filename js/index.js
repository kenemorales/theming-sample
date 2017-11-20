const trigger = document.querySelector('.toggle');
const z = document.querySelectorAll('.z');

trigger.addEventListener('click', function(){
  document.body.classList.toggle('menu-visible');
});

function updateTheme() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

z.forEach(input => input.addEventListener('change', updateTheme));
z.forEach(input => input.addEventListener('mousemove', updateTheme));