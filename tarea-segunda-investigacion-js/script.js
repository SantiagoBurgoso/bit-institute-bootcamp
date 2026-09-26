// Ejemplo 1: JSON.parse()

const productoJSON = '{"nombre":"Cuadro","precio":50000}';

const producto = JSON.parse(productoJSON);

console.log(producto);

// Ejemplo 2: JSON.stringify()

const nuevoProducto = {
    nombre: "Poster",
    precio: 30000
};

const textoJSON = JSON.stringify(nuevoProducto);

console.log(textoJSON);

// Ejemplo 3: GET

async function obtenerPublicacion() {
try {
    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!respuesta.ok) {
        throw new Error("Error al consultar");
    }

    const datos = await respuesta.json();

    console.log(datos);
} catch (error) {
    console.error(error);
}   
}

obtenerPublicacion();

// Ejemplo 4: POST

async function crearPublicacion() {
    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Mi Publicación",
                    body: "Ejemplo de POST",
                    userId: 1
                })
            }
        );

        const datos = await respuesta.json();

        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

crearPublicacion();

// Ejemplo 5: PUT

async function actualizarPublicacion() {
    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 1,
                    title: "Publicación actualizada",
                    body: "Ejemplo de PUT",
                    userId: 1
                })
            }
        );

        const datos = await respuesta.json();

        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

actualizarPublicacion();

// Ejemplo 6: DELETE

async function eliminarPublicacion() {
    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        console.log("Estado:", respuesta.status);
    } catch(error) {
        console.error(error);
    }
}

eliminarPublicacion();