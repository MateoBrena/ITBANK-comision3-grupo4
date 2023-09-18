# ITBANK-comision3-grupo4

## Bienvenida
Bienvenidos/as al repositorio remoto del grupo 4, mejor conocido como Banco Río. Nos inspiramos en la famosa película argentina llamada "El robo del siglo" y tomamos al Banco Río (víctima del robo bancario más grande en la historia argentina) como referencia para construir nuestro proyecto a su alrededor.

## Integrantes del grupo: 
Santiago Ance

Mateo Brena

Pablo Ferrarese

Camila Vargas

## Trello
Este es el link a nuestro espacio de trabajo en Trello: https://trello.com/b/LXV99wbU/banco-r%C3%ADo

## Tecnologías
En el proyecto usamos los lenguajes de HTML5 JavaScript, CSS. La nueva interfaz utiliza React y NEXT para renderizar las vistas y react-router-dom para hacer una navegación más rápida y eficiente. También utilizamos Bootstrap para algunas cuestiones de estilos y funcionalidad. La aplicación es responsive, preparada tanto para dispositivos móviles como para desktop.

## Guía
Una vez clonado el proyecto, debemos correr el comando "npm i" en la consola para descargar todas las dependencias necesarias para el correcto funcionamiento. Cuando ya estén instaladas todas las dependencias, el comando "npm start" debe ser ingresado en la consola para correr el proyecto en el navegador.

## Introducción
Nuestro banco consta de una página principal (/) que funciona como landing para cualquier visitante. Para acceder al Home banking o bien crear una cuenta en caso de no ser todavía un cliente (todavía no tenemos la funcionalidad de crear cuenta), usamos el login (/login). Este posee una validación muy sencilla que simplemente impide ingresar si los campos de usuario y contraseña no son completados (Con un solo caracter ya alcanza). Una vez se hayan completado ambos campos se debe utilizar el botón de "Ingresar" que nos llevará al apartado de cuentas (/accounts), desde allí todo el resto de las vistas están conectadas mediante la barra lateral o el menú desplegable (según la pantalla del dispositivo). Para regresar a la página principal, simplemente se debe hacer click en el item de "Inicio" de la barra de navegación o sobre el logo del banco ubicado en la esquina superior izquierda.

## Cuestiones a mejorar
Resolver algunas cuestiones estéticas para ubicar mejor los elementos y su posicionamiento (sobre todo el conversor, simulador de préstamo y el formulario de nuevas transferencias). Además podríamos lograr que el código sea más eficiente y escalable modularizando un poco más los componentes actuales.