README
 ## TEMA DEL PROYECTO
Este proyecto es una Red Social, pensado para aquellos usuarios amantes de las bellezas naturales y sitios o lugares impresionantes.

 ## TIPO DE USUARIO
 Va dirijido a esos usuarios amantes del turismo, ,  mayores de 18 años, en particular a esos usuarios que deseen ver o compartir sus experiencias turisticas, fotos, video  

 ## Qué resuelve el producto
 la mayoria de los usuarios debido a la pandemia no han podido disfrutar de esos paisajes y sitos que les encantaria conocer o que quieran volver a visitar y a traves de esta red social pueden pedir opinion, ver lugares que no han visitado y tambiem compartir su propia experienca
 
 ## para qué le servirá a estos usuarios.
 como distraccion para enfocerse un tiempo en lo que le gusta y chatear con la comunidad.

 ## TITULO DEL PROYECTO
 
  ## Tourist Places





 ## TITULO DEL PROYECTO
MEMORY CODE

## PROTOTIPO DE BAJA FIDELIDAD:
-Realizamos el prototipo de baja fidelidad para hacer un testeo con los posible usuarios.

 <img src="img/prototipoUno.png" alt="prototipoUno" width="200"/>

## TESTEO
-Realizamos una encuesta para verificar que nuestro proyecto era aceptable.


 
 y obtuvimos como resultado las siguientes respuesta:
 
 <img src="img/encuestaRespuesta1.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta2.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta3.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta4.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta5.png" alt="prototipoUno" width="1000"/>

 esta ultima respuesta nos llamo mucho la atención ya que no colocamos los items de seleccion de los conceptos basicos a aprender.
 
 ## HISTORIA DE USUARIO
 las historias de usuario tomadas
 para nuestro prototipo fueron las siguientes:
 iniciamos con las siguientes Historias:
 <img src="img/historiaUsuario1.png" alt="prototipoUno" width="1000"/>
 pero al realizar el feedback nos recomendaron hacerlas mejor y obtuvimos de nuestros usuarios las siguientes historias:
 <img src="img/historia1.jpg" alt="prototipoUno" width="1000"/>
 


 ## PROTOTIPO DE ALTA FIDELIDAD

 Tomando en concideracion las historias de usuario comenzamos  nuestro prototipo de alta fidelidad.
 - Realizamos dos prototipos para obtener feedback sobre ellos y tomar su opinion para elejir el trototipo a trabajar:

### opción 1

 <img src="img/prototipoopcion1.png" alt="prototipoUno" width="1000"/>

### opción 2

 <img src="img/prototipoopcion2.png" alt="prototipoUno" width="1000"/>

 ## PRIMER SPRINT
-Nuestros usiarios eligieron la opción 2 y comenzamos a trabajar su estructura.


## GIT COLABORATIVO
-Mailys entro a la carpeta donde se va a clonar el proyecto y con clic derecho le damos a la opción Git Gash  Here que nos abre una terminal donde colocamos "git clone y la url de la carpeta en "gitHub" que esta en el repositorio remoto.
-le envio a Vanesa la url de su proyecto (clonado). y esta entró. ya dentro del repositorio remoto de forkea el proyecto y crea una Rama.
-crea la rama en la terminal local con:
git remote -v (para ver la rama a las que estas conectados)
git branch _nombre de la rama_
git branch -l (para ver en que rama estoy)
-Mailys tambien creo una rama para no trabajar directamente en la rama master.
 -luego entra a Visual stude code entre a la terminal e intallamos el " npm install "

 # SPA
 se crea un elemento "div" con clase "root" donde se imprimiran todas las vistas
 se crea cada una de las vistas :
 primera Vista:
 1-  se le coloca un export para importar al main.js la vista creada y se pueda imprimir en el root cuando sea invocada,
 2-se declara una constante nombre que sera igual a la funcion y dentro de esta una constante que contendra la estructura de esa vista entre comillas y retornamos su valor,
 3- luego en el main.js importamos esta funcion y la imprimimos a traves de la manipulacion dinamica del Dom.
 
 -Segunda, tercera y cuarta vista: juego de las opciones HTML, CSS, JS respectivamente con un boton de inicio que te redirige a la primera vista.

 -Primera vista: representada por el menu.

 -Segunda , tercera y cuarta vista: juego de las opciones HTML, CSS, JS respectivamente con un boton de inicio que te redirige a la primera vista.

-Quinta vista: donde se felicita al usuario por terminar la jugada y pasa al siguiente nivel.

En la terminal local realizamos los commit para guardar los cambios y cuando le dimos git push origin Desarrollo nos daba un  error que resolvimos con la ayuda de Ely, creando una nueva rama del proyecto y clonandolo nuevamente.
y trabajamos en partes distintas del proyecto para no generar tantos errores.

## FUNCIONALIDAD
  ### Creamos los componentes del juego


  ### Configuracion de FIREBASE
  -se entra a la pagina de FIREBASE con el email y se creo un nuevo proyecto con los siguientes pasos:
  a-luego de cliquear el boton de nuevo proyecto, ingresas el nombre de tu proyecto, clip continuar;
  b-si quieres trabajar permitiendo la orientacion, los informes y otras funciones de firebase activas el google analitytics si no la deshabilitas, luego clip a crear proyecto;
  c-luego dentro del proyecto entramos a la casa o inicio y clip configuracion del proyecto;
  d- nos vamos al final  de la pagina y damos clip en configurar para web "</>"
  e-agregamos firebase a nuestra apicación  colocamos el nombre, sin habilitas el hossting registramos nuestra app;
  f-se abre el codigo de configuracion que es el sdk de firebase este codigo lo colocamos en un archivo js que se creo;
  los dos primeros que aparecen lo colocamos en el html;
  g-volvemos a firebase donde habilitaremos la autentificacion y como podra acceder el usuario (gmail,google....) al habilitar google le señalamos nuestro correo y guardamos;
  h-en firestore creamos nuestra base de datos la podemos crear en modo produccion o modo prueba en este caso fue creada en modo producción y luego listo;
  j- en firestore hay que hacer una configuracion para guardar la informacion entramos a "reglas" y nos aparecera un codigo donde colocaremos "true" en ves de false y damos clip en publicar;
  k- nos vamos a la documentación y realizamos los pasos que nos faltan como el codigo de configuración de la autenticación y el de firestore.alli también conseguiremos una guia para realizar parte de nuestro proyecto.

  ###

  - tambien nos guiamos por las exportaciones e importaciones existentes.

  ### Extraer los datos de los componentes
   para extraer los datos dentro de los componentes vemos el orden en que esta estructurado el componente y tomamos el dato que necesitamos ejemplo:
   si tenemos este componete y queremos en js obtener su clase:
 
name: 'cssNivelUno',
    items: [
      { id: 'cssNivel1,1,1', image: 'cartas/CSSNivel1/agua.png', class:0 },
      { id: 'cssNivel1,1,2', image: 'cartas/CSSNivel1/agua1.png', class:0 },
      { id: 'cssNivel1,2,1', image: 'cartas/CSSNivel1/amarillo.png', class:1  },
      { id: 'cssNivel1,2,2', image: 'cartas/CSSNivel1/amarillo1.png', class:1  },

    ],
  };
 

para obtener su clase:
1- el nombre :cssNivelUno
2- el items
3- el array con el numero del items que quieres la clase
4- lo que queremos obtener en este caso la clase pero tambien puede ser el id, el nombre ....

entonces nuestro codigo nos quedaria:

cssNivelUno.items[Array[1]].class


### Implementamos la funcionalidad del juego

-creamos la funcion de pasar de una vista a la otra.
-la funcion para barajar,
- funcion del cronometro.

## SEGUNDO SPRINT
se consigue regitrar el usuario con su correo y contraseña, se crean los templates de cada vista

mostramos nuestror avances y recibimos buenos comentarios hacia nuestro proyecto.
tambien tuvimos feedback de nuestro squa y Ely nos dieron algunas recomendaciones para no hacer nuestro HTML tan extenso y crear las cartas desde el js,

## Restructuracion del Codigo
Eliminamos todas las cartas del html y buscamos la forma de llamarlas desde el Js. implementamos varios codigos y conseguimos uno pero usaba this en su estructura nos reunimos con Marcia y nos dijo que podiamos utilizar e.target, e investigamos sobre ello y con prueba y error logramos la funcionalidad del juego en la categoria Html.

## TERCER SPRINT
mostramos la reestucturacion de nuestro Html y los avances del CSS.


## continuacion de Funcionalida
trabajamos en la funcion de enviar mensaje de Felicitaciones al usuario al terminar el primer nivel y lo logramos pero al pasar a la seleccion de una nueva categoria nos arrojaba un error y lo solucionamos con la ayuda de Sergio cambiando los input por imagen.

## CUARTO SPRINT
mostramos la funcionalidad del proyecto y obtuvimos buenos comentarios

## zoom cartas

-trabajamos para dar zoom a las cartas y lo hicimos mas responsive utilizando la media
-realizamos test de usabilidad y cronometro daba un error. al surgir el error nos dimos cuenta que la App era de aprendizaje y el usuario para poder aprender necesitaba tiempo para leer las cartas.
 
 ## QUINTO SPRINT
 mostramos nuetro proyecto funcionando y  dos formas de mostrar el contenido de las cartas mas grande, nos dijeron con cual se sentian mas comodas y lo tomamos en cosideracion para implementarlo en nuestro proyecto.

 ## ACIERTOS, TIEMPO e INTENTOS
 continuamos con la funcionalidad de nuestra App y nos dedicamos a trabajar :
 
 -los intentos cuando el usuario seleccione dos cartas.

 -Hacer que el cronometro comience cuando se presione la primera carta.

 -activar los aciertos cuando dos cartas sean pares.
 

## SEXTO SPRINT
se mostro el codigo con toda la funcionalidad activa.

 ## TEST UNITARIO

 investigamos sobre los test unitario y existen varias formas de hacerlos.

 realizamos un test para probar que la funcion Shuffle devuelve un array distinto al inicial.