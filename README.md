# Estructura del proyecto

El proyecto se encuentra dividido en dos directorios principales: "front" para la aplicacion de React, y "back" para la aplicacion de NodeJS.

Ambas aplicaciones estan estructuradas en una topologia de arquitectura por capas basada en los principios de _Clean Architecture_

## Estructura del Backend

    .
    ├── api                  # Capa de presentacion
    │   ├── controllers/     # Archivos encargados de manejar respuestas HTTP
    │   ├── middlewares/     # Autenticación con JWT
    │   ├── routes/          # Rutas de la cada componente
    │   ├── container.js     # Configuración de awilix
    │   ├── router.js        # Configuración de las rutas de la aplicación y middlewares generales
    │   └── server.js        # Configuración del servidor express
    └── ...

> **Q: Awilix?**
>
> **A:** _Libreria para la inyección de dependencias_.

> **Q: Middlewares generales?**
>
> **A:** _Middlewares que comparten todas las rutas independientemente del componente. para este caso se utilizan (body-parser y cors)_.

    ├── ...
    ├── config/              # Archivos de configuracion compartidos entre todas las capas.
    ├── business             # Capa donde reside toda la logica del negocio
    │   ├── mappers/         # mappers para la capa de presentacion y capa de datos
    └── ...

> **Q: Mappers en la capa del negocio?**
>
> **A:** _Por lo general es responsabilidad de la capa de presentacion y la capa de acceso a datos mapear los datos al negocio, pero para este proyecto la decision de centralizar los mappers en el negocio fue por conveniencia_.

    ├── ...
    ├── dal                  # Capa de acceso a datos
    │   ├── repositories/    # Archivos para ejecutar operaciones en la base de datos
    │   ├── schemas/         # Definicion de los esquemas o tablas de la base de datos
    │   └── index.js         # Configuracion de la comunicacion con la base de datos
    ├── docker-compose.yml   # Configuracion basica para levantar un contenedor con MongoDB
    └── index.js             # Punto de entrada de la aplicacion donde se inicializa el servidor y la conexion a la bd

## Estructura del Frontend

La aplicacion de React esta dividida en 2 directorios principales debajo de "components/".
Cada uno representa casos de uso diferentes. "User" para los casos de uso de un usuario sin autenticarse ("login" y "register"), y "Product" para los casos de uso de un usuario autenticado (operaciones CRUD sobre productos).

De este modo aseguramos que cada componente tenga diferentes razones para cambiar (principio de responsabilidad unica).

    .
    ├── components
    │   ├── Product/           # Casos de uso en product
    │   │    ├── controllers/  # Funciones para la comunicacion con el api
    │   │    ├── interactors/  # "smart components" para manejar la logica del negocio
    │   │    └── presenters/   # "dumb components" para renderizar elementos html y css.
    │   └── User/              # Casos de uso en user
    ├── Session.tsx            # Componente para el manejo de sesion del usuario
    └── ...

La razon de esta estructura esta inspirada en los principios de _clean architecture_ de tener diferentes componentes que cambien por diferentes razones a diferentes ritmos.

Ademas que centralizar la logica en los componentes dentro de "interactors/" nos permite aplicar el principio _Open Closed_ ya que protegemos el componente mas importante (el que carga las politicas de alto nivel) y lo desacoplamos de componentes mas volatiles que son solo detalles en nuestra aplicacion (componentes de presentacion y comunicacion con proveedores externos).

## Instrucciones para ejecutar el proyecto

A continuacion la lista de pasos para ejecutar el proyecto en maquina local.

> **Importante**: Contar con docker y node instalados antes de seguir.

### Pasos:

1. Desde el directorio "back/" inicializar la base de datos de mongo

   > $ docker-compose up -d

2. Desde el mismo directorio instalar los paquetes de la aplicacion de NodeJs e iniciarla

   > $ npm i && node index.js

3. Desde el directorio "front/" instalar los paquetes de la aplicacion de React e iniciarla.
   > $ npm i && npm start

> **Nota**: Ya que ambas aplicaciones corren en el mismo puerto debera confirmar el promp de la aplicacion de react para autorizarla a correr en un puerto diferente.

## Rutas del API

https://documenter.getpostman.com/view/4010438/TVzSjwkY
