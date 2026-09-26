# Segunda Investigación de JavaScript

## ¿ Qué es JSON?

JSON significa JavaScript Object Notation.

Es un formato de texto que permite almacenar e intercambiar información entre aplicaciones.

Se utiliza principalmente para enviar y recibir datos entre un cliente y un servidor.

JSON organiza la información mediante pares de clave y valor.

Ejemplo:

json
{
    "nombre": "Cuadro personalizado",
    "precio": 50000,
    "disponible": true
}

JavaScript tiene dos métodos para trabajar en JSON:

- JSON.parse(): convierte texto en JSON en un objeto de JavaScript.
- JSON.stringify(): convierte un objeto de JavaScript en texto JSON.

## ¿Qué es una API REST?

Una API permite la comunicación entre diferentes aplicaciones. 

REST es un estilo de arquitectura utilizado para diseñar servicios web.

Una API permite consultar, crear, actualizar y eliminar recursos mediante peticiones HTTP.

Los métodos HTTP más utilizados son:

- GET: consultar información.
- POST: creat información.
- PUT: actualizar o reemplazar información.
- DELETE: eliminar información.

Las API REST suelen intercambiar datos utilizando el formato JSON.

## ¿Qué hace fetch() en JavaScript?

fetch() es una función de JavaScript que permite analizar las peticiones HTTP a un servidor.

Se utiliza para consultar o enviar información a una API sin necesidad de recargar la página.

fetch() devuelve una promesa que permite gestiona una respuesta asíncrona.

Se puede utilizar justo con async y await para esperar la respuesta del servidor.

También permite utilizar métodos HTTP como GET, POST, PUT y DELETE.

## Ejemplos prácticos

Los ejemplos se encuentran en el archivo script.js

Se realizan ejercicios con JSON.parse(), JSON.stringify() y peticiones HTTP utilizando fetch().

Para las peticiones se utiliza JSONPlaceholder, una API pública para realizar pruebas.