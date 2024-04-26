# CRUD
## API RESTful - Spring Boot
### App web que se va a utilizar para conectarla con un front hecho con React

Este proyecto utiliza arquitectura limpia (O al menos un intento de ella) para
ordenar el codigo, hay una carpeta llamada Product, esta contiene el modelo, el service, el controlador y el repository. No hizo falta crear mucha complejidad ya que es un proyecto no tan grande. Como base de datos se utilizo MySQL. en el archivo application.properties 
se puede indicar todos los parametros y variables que se usan en la base de datos (IMPORTANTE: ESTE PROYECTO SE SUBIRA CON ESAS PROPIEDADES VACIAS). Se uso MAVEN para las dependencias, Spring Web para los controladores.

Para ejecutar este proyecto, correr el archivo principal del proyecto
este barrera todas las dependencias y archivos de forma automatica.
Una vez corriendo el server y conectado a la base de datos esta libre para usarse
desde una app frontend.