function toggle() {
  const accordions = document.querySelectorAll('.accordion');

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {

      const panel = this.nextElementSibling;

      const logo = this.querySelector('.icon_toggle'); // Seleciona a imagem dentro do botão clicado

      if (panel.style.display === 'none') {
        panel.style.display = 'block';
        logo.src = 'assets/images/icon-minus.svg'; // Altera a propriedade src da imagem para 'icon-minus.svg'
      } else {
        panel.style.display = 'none';
        logo.src = 'assets/images/icon-plus.svg'; // Altera a propriedade src da imagem para 'icon-plus.svg'
      }
    });
  }

}

function toggleTheme() {

  // catch buttton menu
  const toggleButton = document.querySelector('.menu button');

  // add event listener
  toggleButton.addEventListener('click', function () {

    // save value atual button normal 
    const currentText = this.textContent;

    if (currentText === 'Light Mode') {
      this.textContent = 'Dark Mode';
    } else {
      this.textContent = 'Light Mode';
    }

    // add .dark ao body
    document.body.classList.toggle('dark');

  });

}
