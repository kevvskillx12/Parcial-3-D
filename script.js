//Ejercicio 1:

function FiltrarMayores(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

const personas = [
    { nombre: 'heyder', edad: 18 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 16 },
    { nombre: 'Maria', edad: 30 },
    { nombre: 'Rommel', edad: 19 },
    { nombre: 'Pablo', edad: 17},
    { nombre: 'josue', edad: 15}
];

console.log(FiltrarMayores(personas));

//Ejercicio 2:

function Transformaryfiltro(numeros) {
    return numeros.map (number => number ** 2).filter(cuadrado => cuadrado > 2)
}

const numeros = [ 1,2,3,4,5,6];
console.log(Transformaryfiltro(numeros));

//Ejercicio 3:

async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Error en la llamada a la API');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}


//Ejercicio 4:

document.getElementById('addItemButton').addEventListener('click', () => {
    const ul = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = 'Item 1 ';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
});

//Ejercicio 5: 
function ordenarPorPropiedad(arreglo, propiedad) {
    return arreglo.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) return -1;
        if (a[propiedad] > b[propiedad]) return 1;
        return 0;
    });
}

// Ejemplo de uso:
const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Audifonos', precio: 150 },
    { nombre: 'Telefono', precio: 1500 }
];

console.log(ordenarPorPropiedad(productos, 'precio'));

