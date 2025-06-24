const nombre = "Pepe";
console.log(nombre);

const array1 = [1,2,3,4,5]
const array2 = ["kevin", "luciano", "thomas", "thiago", "ruben"]

console.log(array2);

function showAlert () {
    alert("Esto es una alerta")
}

function searchElement (array, element) {
    if (!array.includes(element)) {
        array.push(element)
    } 

    return array
}


// const lista_users = [usario1, contraseña123]
