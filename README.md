# Descripción

Se trata de una libreria de videojuegos, como podria ser la que nos encontramos en una plataforma como [Steam] (https://store.steampowered.com/?l=spanish). En ella podemos consultar los juegos que tenemos, ver las horas que hemos jugado y los logros obtenidos. Tambien he creado botones para crear juegos nuevos y añadir sesiones de juego nuevas. Esto en una biblioteca normal no tendriamos esas opciones pero a modo de demostración ayuda a entender como funcionaria. Tambien hay una barra de busqueda donde poniendo el id del juego podemos encontrar el juego deseado. Ademas tamvbien podemos borrar los juegos que queramos.

# Router

- La pagina principal se encuentra en le root ("/"). En ella se muestra un listado de todos los videojuegos con la información basica.
- Pagina de Información del juego ("/videogames/[videogameID]"). En ella se muestra la información de un videojuego concreto con la información del jugador en question.
- Pagina de añadir nueva sesión ("/videogames/[videogameID]/Session"). En ella puedes encontrar un formulario donde se puede logear una nueva sesion de juego para un juego en concreto.
- Pagina de creacion de juego (/create). En ella se puede encontrar un formulario para crear un juego nuevo (tambien genera una nueva session de juego).

# Base de datos

La base de datos se compone de dos tablas.

## Videojuegos

En la tabla de videojuegos podemos encontrar toda la información relacionada con el juego en si:
- Descripción
- Desarrollador
- Año de lanzamiento
- Logros totales del juego
- Url de la portada
- Nota
- Nombre dle juego

## InfoPlayer

En esta tabla se guardan los datos de los jugadores en relación a los juegos:
- Horas jugadas
- Logros desbloqueados
- Id del juego

# Puesta a punto

Al descargar el proyecto, lo primero que tenemos que generar, es la base de datos:

bunx prisma generate

A continuación tendremos que hacer un push del modelo creado a la nueva base de datos:

bunx prisma db push

Después debemos generar los datos para poder probar el modelo que hemos creado:

bunx prisma db seed

Podemos ver el contenido usando:

bunx prisma studio

Para Empezar el servidor hay que poner:

bun run dev

Ahora ya estamos preparados para usarlo.


# Frontend en React, usando NextJS

Se trata de hacer una aplicación con NextJS (así pues, full-stack) que sea muy simple pero utilice las partes clave de dNextJS para hacer un primer uso en un proyecto con la intención de practicar, antes de hacer el proyecto. Es necesario tocar el máximo de las siguientes características de NextJS (con AppRouter):

1. App Router, es decir las carpetas como rutas (`page.tsx`).
2. Usar [ShadcnUI](https://ui.shadcn.com) para componentes de interface.
3. Usar layouts (`layout.tsx`), errores (`error.tsx`) y loading (`loading.tsx`).
4. Usar [actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) para hacer cosas en el servidor.

La idea subyacente a la aplicación es libre completamente, pero debe ser sencilla (queremos programar una "prueba de concepto", no una app entera), y de la misma envergadura que el proyecto que se hizo en clase (el TODO List). Algunos ejemplos:

- Un pequeño gestor de ficheros: se muestra una lista de ficheros y se puede 1) añadir un fichero (con un campo de formulario), 2) borrar un fichero, 3) descargar un fichero. Una opción muy chula es que se pueda [arrastarar un fichero](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Este ejercicio no requiere una base de datos, realmente.

- Un foro donde la gente puede hacer comentarios. En realidad es un foro público y no hay que hacer login para poder comentar, pero al poner un comentario se le pide al usuario alguna información por si luego quiere poder borrar sus mensajes. Cada mensaje tiene texto, nombre del autor y fecha.

- Editor de una receta: se puede editar una descripción y luego una lista de ingredientes. Cada ingrediente es lo mínimo: nombre y cantidad. En principio solo hay una receta, y es recomendable no usar base de datos y guardar solo un fichero JSON. Aunque una vez hecho eso, es fácil permitir tener más de una receta.
