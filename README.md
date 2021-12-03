# Parcial 2

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules (en el root)

   ```bash
   npm install
   ```

4. Instalar npm modules (dentro de carpeta _frontreact_)

   ```bash
   cd frontreact
   npm install
   ```

5. Ejecutar servidor (nodemon, servidor de archivos estáticos). Ubicado en el root del repositorio ejecutar:

   ```bash
   npm run start
   ```

   El anterior comando desplegará el backend de la aplicación en el puerto 3001. Ir **http://localhost:3001/img/products/N0CA_430.png** debería ver una imagen de un producto el cual está expuesta por el servidor.

6. Ejecutar servidor de desarrollo para react. Ubicado en el directorio _frontreact_ ejecutar:

   ```bash
   npm run start
   ```

   El anterior comando desplegará el frontend de la aplicación en el puerto 3000. Ir **http://localhost:3000/home** debería ver la página principal de la aplicación en react.

7. Si desea ejecutar la aplicación en modo producción. Siga los siguientes pasos:

- Ubicarse sobre el directorio _frontreact_ y ejecutar:
  ```bash
  npm run build
  ```
- Luego, sobre el root del repositorio ejecutar:
  ```bash
  npm run start
  ```
- Ahora al ingresar a **http://localhost:3001** debería observar la aplicación en react.

_Jhonatan Alarcón._
