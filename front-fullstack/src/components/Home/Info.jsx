import { Image } from './Image';
import './image-info.css';

export const Info = () => {
  return (
    <div className='home-content'>
        <div className='image-content'>
            <Image/>
        </div>
        <div className='info-content'>
            <h1>Hola Mundo!</h1>
            <p>Esta aplicacion basicamente es un CRUD (Crear, Leer, Actualizar y Borrar) de productos de diferente tipo. En el front se esta utilizando React, Wouter para las rutas y el paginado, Axios para las llamadas a la API y consumir los endpoints y CSS nativo para los estilos. En el lado del Backend tenemos a SpringBoot, MySQL, Spring Security para la autenticacion del usuario y se esta utilizando arquitectura limpia en ambos lados (Al menos un intento de arquitectura limpia xD) para la organizacion del proyecto.
            Hecho Por: <strong>Francisco Rangel - Software Developer</strong>
            </p>
        </div>
    </div>
  )
}
