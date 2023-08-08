document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario
    const form = document.getElementById('formulario');
  
    // Cargar formularios previos del LocalStorage
    let formularios = JSON.parse(localStorage.getItem('formularios')) || [];
  
    // Agregar un evento de envío al formulario
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto
  
      // Obtener los valores de los campos del formulario
      const nombre = form.elements.nombre.value;
      const email = form.elements.email.value;
      const edad = form.elements.edad.value;
      const genero = form.elements.genero.value;
      const mensaje = form.elements.mensaje.value;
  
      // Agregar los datos del formulario al array "formularios"
      formularios.push({ nombre, email, edad, genero, mensaje });
  
      // Almacenar los datos en el LocalStorage
      localStorage.setItem('formularios', JSON.stringify(formularios));
  
      // Limpiar el formulario para un nuevo envío
      form.reset();
  
      // Redireccionar a Resultado.html para mostrar el último formulario enviado
      window.location.href = `/Pags/Resultado.html?index=${formularios.length - 1}`;
    });
  });
  