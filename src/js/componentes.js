
import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

// Para que funcione la exportacion entre paquetes la funcion debe tener la palabra "export"

export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!`;

    document.body.append( h1 );

    /*
    // Img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
    */

}