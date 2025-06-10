import './components/card-component.js';

const cards = document.querySelectorAll('card-component');

cards.forEach(card => {
  const button = card.shadowRoot.querySelector('.product-button');

  button.addEventListener('click', () => {
    const buttonText = button.textContent

    button.textContent = 'Cargando...'

    setTimeout(() => {
      button.textContent = 'Añadido al carrito';
      button.style.backgroundColor = '#28a745'; // Cambia el color del botón a verde
      button.style.color = 'white'; // Cambia el color del texto a blanco
    }, 1000); // Espera 2 segundos antes de cambiar el texto y el color

    setTimeout(() => {
      button.textContent = buttonText;
      button.style.backgroundColor = ''; // Cambia el color del botón a verde
      button.style.color = ''; // Cambia el color del texto a blanco
    }, 5000)
  });
});