document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();




})

function convertirCartesianoAPolar(x, y) {
    var radio = Math.sqrt(x * x + y * y);
    var angulo = Math.atan2(y, x);
  
    // Convertir el ángulo de radianes a grados
    angulo = angulo * (180 / Math.PI);
  
    return { radio: radio, angulo: angulo };
  }
  
  // Ejemplo de uso
  var coordenadasCartesianas = { x: 3, y: 4 };
  var coordenadasPolares = convertirCartesianoAPolar(
    coordenadasCartesianas.x,
    coordenadasCartesianas.y
  );
  
  console.log("Coordenadas polares: ", coordenadasPolares);

  
  function convertirPolarACartesiano(radio, angulo) {
    // Convertir el ángulo de grados a radianes
    angulo = angulo * (Math.PI / 180);
  
    var x = radio * Math.cos(angulo);
    var y = radio * Math.sin(angulo);
  
    return { x: x, y: y };
  }
  
  // Ejemplo de uso
  var coordenadasPolares = { radio: 5, angulo: 45 };
  var coordenadasCartesianas = convertirPolarACartesiano(
    coordenadasPolares.radio,
    coordenadasPolares.angulo
  );
  
  console.log("Coordenadas cartesianas: ", coordenadasCartesianas);
  