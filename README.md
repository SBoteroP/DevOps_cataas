# Cat Image Service

Este servicio se encarga de mostrar imágenes de gatos diferentes cada vez que se recargué la página, a través del puerto 3000.

## Requisitos

- Tener Docker instalado en tu dispositivo.

## Instrucciones

1. **Descargar la imagen del repositorio:**
   Ejecuta el siguiente comando para hacer `pull` de la imagen de Docker:

   ```bash
   docker pull sboterop/cat-docker
   ```

2. **Ejecutar el contenedor:**
   Una vez descargada la imagen, ejecuta el siguiente comando para iniciar el contenedor:

   ```bash
   docker run -p 3000:3000 sboterop/cat-docker
   ```

   Esto asegurará que el puerto de tu dispositivo sea el mismo que el de la imagen.

3. **Acceder al servicio:**
   Abre tu navegador y visita la siguiente URL para disfrutar de las imágenes de gatos:

   ```
   http://localhost:3000/api/cat
   ```

_Prueba Técnica Tyba - Disfruten de GatocorpCapital :)_
