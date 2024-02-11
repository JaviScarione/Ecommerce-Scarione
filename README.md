# Ecommerce React Native

***Desarrollo de Aplicaciones - Comisión 56680, Coderhouse***

### Requerimientos

*Para ejecutar este proyecto necesitas tener instalado lo siguiente:*

1. [Node.js v16.xx o superior](https://nodejs.org/en)
1. [Git](https://git-scm.com/)
2. [Android Studio](https://developer.android.com/studio?hl=es-419) para la ejecución en ordenador.
3. [Expo Go](https://expo.dev/client) para la ejecución en el movil.
3. Un editor de código a preferencia (Como [Visual Studio Code](https://code.visualstudio.com/))

___

### Descarga y Configuración del proyecto

- Abre una consola de comandos donde quieras que se guarde el proyecto y ejecuta el siguiente comando:
```
git clone https://github.com/JaviScarione/Ecommerce-Scarione.git
```

- Luego de que finalice, y dentro de la misma consola ejecuta el siguiente comando para ingresar a la carpeta con el proyecto:
 ```
 cd Ecommerce-Scarione
 ``` 

- Instala las dependencias especificadas en el archivo ```package.json``` con el comando:
```
npm install
```



*Una vez instalados todos los requerimientos de la aplicación, ejecute el siguiente comando en la consola*

```
npx expo start
```
*Para vizualizar la App se debe abrir con el emulador de Android desde el ordenador, ó escaneando el QR mediante Expo Go desde el movil*

*La primera visualización es el Login ó Registro de usuario:*

![Login](https://github.com/JaviScarione/Ecommerce-Scarione/blob/main/assets/login.jpeg?raw=true){width=400px}
![SignUp](https://github.com/JaviScarione/Ecommerce-Scarione/blob/main/assets/signup.jpeg?raw=true){width=400px}

Una vez ingrese o se registre se dirigirá a la primer screen de la App:

![Categories](https://github.com/JaviScarione/Ecommerce-Scarione/blob/main/assets/categories.jpeg?raw=true){width=400px}
___

### Creado con

* [React Native y Expo](https://es.react.dev/) - Framework del Frontend.
* [Firebase](https://firebase.google.com/) - Base de datos y servidor.
* [Navigation](https://reactnavigation.org/) - Para la navegación entre screens.
* [Redux](https://redux.js.org/) - Para el manejo de estados.
* [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/) - Fuentes de texto.
* [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) - Para las funciones de cámara.
* [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) - Para las funciones de ubicación.
* [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) - Para persistencia de datos.
* [Geolib](https://www.npmjs.com/package/geolib) - Para marcar distancias de un punto a otro en la ubicación.
* [Yup](https://www.npmjs.com/package/yup) - Para validación de datos de usuario.