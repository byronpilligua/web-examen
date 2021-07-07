function sumarParImpar() {
    var par = 0;
    var impar = 0;
    var numeroA = prompt("Ingrese el primer número.");
    var numeroB = prompt("Ingrese el segundo número.");
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);
    if (isNaN(numeroA) || isNaN(numeroB)) { 
        alert("Debe ingresar valores númericos");
        return false; 
    }
    if (numeroB > numeroA) {
        while (numeroA < numeroB) {
            if (numeroA % 2 == 0) {
                par = par + Number(numeroA);
            } else {
                impar = impar + Number(numeroA); 
            }
            numeroA++;
        }
        alert("La suma de los pares es: " + par);
        alert("La suma de los impares es: " + impar);
    } else {
        alert("El segundo número debe ser mayor que el primero.");
    }
}