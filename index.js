//PRIMER EJERCICIO

var cantidadDeGatos = 5;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji = i % 3 === 0 ? '😹' : (i % 3 === 2 ? '😸' : '😺');
    console.log(`Gato #${i}: ${emoji}`);
}

//SEGUNDO EJERCICIO

// var cantidadDeGatos = 5;
// var cantidadDePasos = 3;

// for (var i = 1; i <= cantidadDeGatos; i++) {
//     var pasos = ' 🐾'.repeat(cantidadDePasos);
//     console.log(`Gato #${i}: 🐈${pasos}`);
// }

// //TERCER EJERCICIO

// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;

// for (var i = 1; i <= cantidadDeGatos; i++) {
//     var emoji = i % 2 === 0 ? '🐈‍⬛' : '🐈';
//     var pasos = ' 🐾'.repeat(cantidadDePasos);
//     console.log(`Gato #${i}: ${emoji}${pasos}`);
// }