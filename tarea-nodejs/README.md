# Tarea Node.js - CRUD con Express

Proyecto realizado con Node.js y Express para practicar peticiones HTTP, CRUD, middleware y comunicación entre archivos.

## Peticiones HTTP

Las periciones H>TTP permiten la comunicación entre cliente y servidor.

Métodos utilizados en este proyecto:

- Get: Obterner información.
- Post: Crear información.
- Put: Actualizar información.
- Delete: eliminar información.

## CRUD

CRUD significa:

- Create
- Read
- Update
- Delete

En este proyecto se implementan las siguientes rutas:

- GET / products
- POST / products 
- PUT / products/:id
- DELETE /products/:id

## middleware

Un middleware es una función que se ejecuta entre la petición y la respuesta.

Este proyecto incluye dos ejemplos:

## Logger

Registra en la terminal el método HTTP y la ruta utilizada.

Archivo:

middleware/logger.js

## Validate Product

Valida que los productos tengan nombre y precio antes de ser creados o actualizados.

Archivo:

middleware/validateProduct.js

## Comunicación entre archivos

Node.js permite separar el proyecto en diferentes archivos.

Se utilizan: 

- require()
- module.exports

Ejemplo:

Los controladores se exportan desde productControllers.js y se importan en productRoutes.js

# JWT

JWT significa JSON Web Token.

Se utiliza para la autenticación y autorización de usuarios.

Generalmente el servidor genera un token cuando un usuario inicia sesión correctamente.

Después el cliente envía el token en futuras peticiones para demostrar que está autenticado.

Un JWT está compuesto por:

- Header
- Payload
- Signature

En Express normalmente se utiliza junto con middleware para validar si un usuario tiene permiso para acceder a determinadas rutas.