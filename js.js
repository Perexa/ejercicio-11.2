document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        fechaNacimiento,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Esto mostrará la respuesta del servidor en la consola
        // Puedes realizar otras acciones aquí con la respuesta del servidor
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  