document.addEventListener('DOMContentLoaded', function () {
    // Obtener el índice del formulario enviado desde la URL
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');

    // Cargar formularios previos del LocalStorage
    let formularios = JSON.parse(localStorage.getItem('formularios')) || [];

    // Obtener los datos del formulario correspondiente al índice
    const formulario = formularios[index];

    // Mostrar los datos en los elementos HTML correspondientes
    if (formulario) {
        document.getElementById('nombre').textContent = formulario.nombre;
        document.getElementById('email').textContent = formulario.email;
        document.getElementById('edad').textContent = formulario.edad;
        document.getElementById('genero').textContent = formulario.genero;
        document.getElementById('mensaje').textContent = formulario.mensaje;
    } else {
        document.getElementById('nombre').textContent = 'Formulario no encontrado';
        document.getElementById('email').textContent = '';
        document.getElementById('edad').textContent = '';
        document.getElementById('genero').textContent = '';
        document.getElementById('mensaje').textContent = '';
    }
});
