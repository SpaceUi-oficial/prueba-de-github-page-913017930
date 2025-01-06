// Manage multiple buttons independently
const buttons = document.querySelectorAll('.magicButton');

buttons.forEach(button => {
  let isClicked = false;
  
  button.addEventListener('click', function() {
    if (!isClicked) {
      button.textContent = 'Clicked!';
      button.style.backgroundColor = '#32cd32'; // Verde claro cuando se hace click
      isClicked = true;
    } else {
      button.textContent = 'Click me!';
      button.style.backgroundColor = '#1e90ff'; // Azul oscuro al deshacer el click
      isClicked = false;
    }
  });
});

// Switch toggle functionality
const switches = document.querySelectorAll('.customSwitch');
const switchTexts = document.querySelectorAll('.switchText');

switches.forEach((switchElement, index) => {
  switchElement.addEventListener('change', function() {
    if (switchElement.checked) {
      switchTexts[index].textContent = 'On';
    } else {
      switchTexts[index].textContent = 'Off';
    }
  });
});
const selectElement = document.getElementById('select');
const opcionesElement = document.getElementById('opciones');
const inputSelect = document.getElementById('inputSelect');

let opcionSeleccionada = null; // Almacena la opción seleccionada

// Manejar el clic en el select para mostrar las opciones
selectElement.addEventListener('click', () => {
    if (opcionesElement.classList.contains('show')) {
        opcionesElement.classList.remove('show');
        opcionesElement.classList.add('hide');
        setTimeout(() => {
            opcionesElement.classList.remove('hide');
            opcionesElement.style.display = 'none';
        }, 300);
    } else {
        opcionesElement.style.display = 'block';
        setTimeout(() => {
            opcionesElement.classList.add('show');
        }, 10);
    }
});

// Para seleccionar una opción
opcionesElement.addEventListener('click', (event) => {
    const opcion = event.target.closest('.opcion');
    if (opcion) {
        const selectedValue = opcion.getAttribute('data-value');

        // Oculta la opción previamente seleccionada
        if (opcionSeleccionada) {
            const opcionAnterior = opcionesElement.querySelector(`.opcion[data-value="${opcionSeleccionada}"]`);
            if (opcionAnterior) {
                opcionAnterior.style.display = 'block'; // Asegúrate de que esté visible
            }
        }

        // Actualiza el título con la opción seleccionada
        selectElement.querySelector('.contenido-select h1.titulo').textContent = selectedValue;

        // Cambia el color del título a verde
        const titulo = selectElement.querySelector('.contenido-select h1.titulo');
        titulo.classList.add('seleccionada');

        // Actualiza el valor oculto
        inputSelect.value = selectedValue;

        // Oculta las opciones
        opcionesElement.classList.remove('show');
        opcionesElement.classList.add('hide');

        // Muestra nuevamente la opción seleccionada anteriormente
        opcionSeleccionada = selectedValue; // Almacena la nueva opción seleccionada
        const nuevaOpcion = opcionesElement.querySelector(`.opcion[data-value="${selectedValue}"]`);
        if (nuevaOpcion) {
            nuevaOpcion.style.display = 'none'; // Oculta la opción seleccionada
        }

        setTimeout(() => {
            opcionesElement.classList.remove('hide');
            opcionesElement.style.display = 'none';
        }, 300);
    }
});

const button = document.querySelector('.loading-button');

button.addEventListener('click', () => {
  button.textContent = 'Cargando...';
  button.disabled = true; // Desactiva el botón mientras carga
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  button.appendChild(spinner);
  spinner.style.display = 'block'; // Mostrar el spinner

  setTimeout(() => {
    spinner.style.display = 'none'; // Ocultar el spinner
    button.textContent = 'Listo'; // Cambiar el texto a "Listo"
    button.disabled = false; // Rehabilitar el botón
  }, 2000); // Tiempo de espera (2 segundos)
});


const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active'); // Cambia la clase del botón
  toggleButton.textContent = toggleButton.classList.contains('active') ? 'On' : 'Off'; // Cambia el texto según el estado
});

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        console.log(`Buscando: ${query}`);
        // Aquí puedes agregar la lógica para realizar la búsqueda
    }
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            console.log(`Buscando: ${query}`);
            // Aquí puedes agregar la lógica para realizar la búsqueda
        }
    }
});


const rangeInput = document.querySelector('.range-input');
const rangeValue = document.querySelector('.range-value');

// Actualiza el valor y agrega la clase activa al input cuando se mueve el slider
rangeInput.addEventListener('input', function () {
    rangeValue.textContent = rangeInput.value;
    rangeInput.classList.add('active'); // Agregar clase para sombra
});

// Elimina la clase activa cuando se suelta el mouse
rangeInput.addEventListener('mouseup', function () {
    rangeInput.classList.remove('active'); // Eliminar clase para sombra
});

// Inicializa el valor al cargar la página
rangeValue.textContent = rangeInput.value;
