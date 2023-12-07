<!--PROJECT BANNER-->

<a name="readme-top"></a>
<br />

<div align="center">
  <h3 align="center">ClinicMaster</h3>
  <p align="center">
    Un sistema de Utilidad para Dentista y mas.
  </p>
</div>
<!--TABLE OF CONTENTS-->
<details>
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#empezando">Empezando</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalacion">Instalacion</a></li>
      </ul>
    </li>
    <li>
      <a href="#funciones-generales">Funciones Generales</a>
      <ul>
        <li><a href="#cliente">Cliente</a></li>
        <li><a href="#clinica">Clinica</a></li>
      </ul>
    </li>
    <li>
      <a href="#desarrollo">Desarrollo</a>
      <ul>
        <li><a href="#frontend">Frontend</a></li>
        <li><a href="#backend">Backend</a></li>
        <li><a href="#base-de-datos">Base de Datos</a></li>
        <li><a href="#qa">QA Tester</a></li>
      </ul>
    </li>
    <li><a href="#contribucion">Contribucion</a></li>
    <li><a href="#cronograma">Cronograma</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Empezando

_Abajo se encuentra el proceso para ejecutar el proyecto. Requerira de Node.js 18.17 o superior._

### Prerequisitos

Para ejecutar el proyecto es necesario, es necesario instalar y configurar lo siguiente:

- [Node.js](https://nodejs.org/)
- npm
  ```sh
  npm install npm@latest -g
  ```
- MySQL y dentro Crear un Usuario con todos los privilegios y una base de datos vacia:
  ```sh
    CREATE USER 'Nombre_Usuario'@'localhost' IDENTIFIED BY 'Contraseña';
    GRANT ALL PRIVILEGES ON *.* TO 'Nombre_Usuario'@'localhost';
    FLUSH PRIVILEGES;
    CREATE DATABASE nombre_basedatos;
  ```

### Instalacion

1. Clona el Repositorio.
   ```sh
   git clone https://github.com/alanvviera/DentalSystem.git
   ```
2. Vea a la Carpeta
   ```sh
    cd DentalSystem/
   ```
3. Crea un archivo .env y configuralo:
   ```sh
    NEXTAUTH_URL = "http://localhost:3000"
    NEXTAUTH_SECRET = ""
    DATABASE_URL="mysql://Nombre_Usuario:Contraseña@localhost:3306/nombre_basedatos"
   ```
4. Instala los paquetes NPM.
   ```sh
   npm install
   ```
5. Genera y Migra el schema de Base de datos.
   ```sh
    npx prisma migrate dev
    npx prisma migrate deploy
    npx prisma generate
   ```
6. Ejecuta el proyecto.
   ```sh
    npm run dev
   ```
   <p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- System Function -->

## Librerias Instalados

- Bcrypt para encriptar las contraseñas.
- Prisma para manejar la BBDD.
- NextAuth para autenticaciones.
- Mantine para Diseño de FrontEnd

## Funciones-Generales

Que puedes hacer en el Software como Usuario:

### Cliente

- Acceso a Aplicacion Web y Movil
  Inicio de sesion mediante Correo, Facebook o Google
- Gestion de Citas
  Agendar Citas (limite 1 al dia), Ver Citas pendientes, Reprogramar Cita (limite 1 al dia), Cancelar Cita (limite 1 al dia)
- Editar Perfil
  Añadir informacion personal (edad, direccion, correo de contacto)
- Historial Clinico
  Visualizar tu historial clinico, subir archivos clinicos (limite 1 GB de almacenamiento), y descarga de dicho historial
- Ver Adeudo
  Capacidad de Calcular y Generar Adeudos destinados al Doctor (limite 1 al dia), ademas de ver el historial de Adeudos

### Clinica

- Acceso a Aplicacion Web y Movil
  Inicio de sesion mediante Correo, Facebook o Google
- Gestion de Citas
  Agendar Citas (limite 10 al dia), Ver Citas pendientes, Reprogramar Cita (sin limite), Cancelar Cita (sin limite)
- Registrar Clinica
  Registar la Clinica donde el Dentista labora (si no lo esta)
- Unirse a Clinica
  Permite el que dentista se asocie a una Clina existente y registrada en la aplicacion
- Administracion de Clinica
  Dar de alta clientes (5 al dia), agregar clente a la clinica (solo si son regulares, tener al menos 5 citas realizadas), poner cliente en lista negra, registrar personal (sin limite), eliminar personal, añadir insumo a inventario (limite 50 tipos de insumos distintos), modificacion de inventario, eliminacion de inventario, y carga de adeudos a cliente (limite 10-15 por dia).
- Ver informacion de la Clinica
  Visualizar los Clientes atendidos, y el Personal e Inventario Actual

Como se puede ver el usuario Cliente posee funciones limitadas y no administrativas en el sistemas, mientras que los usuarios Clinica (Doctor, Administrativo, etc.) poseen todos los permisos administrativos del sistema, y estos se pueden dividir entre los integrantes de la Clinica registrada.

<!-- DEVELOPMENT -->

## Desarrollo

### Frontend

En el ámbito del desarrollo frontend, se llevó a cabo la concepción y materialización de las vistas del usuario, convirtiendo ideas abstractas en elementos tangibles mediante la implementación de tecnologías de vanguardia y la aplicación meticulosa de las mejores prácticas de diseño. Este enfoque se tradujo en la creación de un frontend sólido, intuitivo y estéticamente atractivo para nuestro proyecto.

![Menu Demostrativo de Clinica](/images/Imagen1.png)

Menú principal.

El proceso inició con la creación de esbozos detallados para cada pantalla de usuario. Con el objetivo de facilitar la comprensión y la asignación de tareas, se dividió el conjunto de pantallas en diferentes escenarios: el inicio de sesión, registro de usuarios, las vistas destinadas a clientes y las destinadas a empleados, estas últimas compartidas con los doctores. Se destacó especialmente la gestión de las clínicas por parte de doctores y empleados como una actividad fundamental, abordándola como un caso aparte.

![Menu Demostrativo de Clinica](/images/Imagen2.png)

Bosquejo de las pantallas del inicio de sesión.

![Menu Demostrativo de Clinica](/images/Imagen3.png)

Bosquejo de la pantalla de registro de empleados y doctores.

![Menu Demostrativo de Clinica](/images/Imagen4.png)

Bosquejo de las pantallas destinadas al cliente.

![Menu Demostrativo de Clinica](/images/Imagen5.png)

Bosquejo de las pantallas destinadas a los empleados y doctores.

![Menu Demostrativo de Clinica](/images/Imagen6.png)

Bosquejo de las pantallas de administración de clínica.

Se adoptó una estrategia fundamentada en la filosofía "Mobile First", destacando la prioridad dada a la responsividad del diseño. Este enfoque se materializó inicialmente mediante la elaboración de esquemas concebidos para la visualización en dispositivos móviles, para luego adaptar de manera cuidadosa estos bosquejos a pantallas de mayor tamaño. La consideración meticulosa de la experiencia del usuario en dispositivos móviles no solo garantizó una presentación eficiente en estas plataformas, sino que también facilitó una transición fluida y coherente a pantallas más grandes.

![Menu Demostrativo de Clinica](/images/Imagen7.png)

Menú principal en modo escritorio.

![Menu Demostrativo de Clinica](/images/Imagen8.png)

Menú principal en modo móvil.

La fase subsiguiente implicó la maquetación de las pantallas previamente esbozadas. Con el objetivo de acelerar el desarrollo y facilitar la corrección de errores, se desarrollaron componentes reutilizables para aquellas pantallas con diseños similares, como formularios, el panel principal y el menú de navegación.

![Menu Demostrativo de Clinica](/images/Imagen9.png)

![Menu Demostrativo de Clinica](/images/Imagen10.png)

![Menu Demostrativo de Clinica](/images/Imagen11.png)

Posteriormente, se prepararon las pantallas para recibir datos mediante solicitudes a la API, garantizando una integración fluida con el backend. Simultáneamente, cada avance en las pantallas se sometió a revisión por parte del equipo de QA, permitiendo que el equipo de frontend continuara su trabajo mientras las revisiones estaban en proceso. Al recibir los resultados de las revisiones, el equipo de frontend implementó correcciones y consideró las sugerencias proporcionadas.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Backend

En el ámbito del backend, asumimos la responsabilidad central de diseñar y desarrollar el API, una interfaz que orquesta consultas a la base de datos y presenta los resultados de manera eficaz en el frontend.

#### Tecnologías Seleccionadas

#### Prisma

Prisma se erige como una herramienta clave al implementar un Modelo de Relaciones Universal (UMR). Este enfoque proporciona una abstracción eficiente para la gestión de interacciones con la base de datos, mejorando la coherencia y la flexibilidad en nuestras operaciones.

#### Bcrypt

La inclusión de la librería Bcrypt es fundamental para nuestra estrategia de seguridad. Nos permite cifrar datos de manera segura, y en particular, utilizamos Bcrypt para cifrar contraseñas, garantizando la integridad y confidencialidad de los datos sensibles.

#### NextAuth

NextAuth desempeña un papel esencial en la gestión segura de la autenticación. Ofrece un conjunto integral de herramientas que aseguran una autenticación robusta y segura para usuarios, ya sean clientes o empleados.

#### Resultados y Objetivos

Este conjunto de tecnologías nos capacita para ejecutar consultas de manera exitosa, cumpliendo con los estándares más rigurosos de eficiencia y seguridad. Nuestro compromiso es satisfacer de manera óptima las necesidades y expectativas tanto de los usuarios finales como del personal interno.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Base de Datos

En la creación del sistema de base de datos para el proyecto denominado "Dental System", se llevó a cabo un proceso meticuloso y detallado para garantizar la eficiencia y la integridad de la información. Este proyecto implica la gestión de datos relacionados con citas, clientes, deudas, doctores, empleados, inventario, locales, pagos y datos de usuarios, abarcando tanto a doctores, empleados y clientes.

La estructura de la base de datos se compone de 10 tablas distintas, cada una diseñada para almacenar información específica y facilitar la relación entre los diferentes elementos del sistema. Las tablas incluyen: "appointments" para las citas, "client" para los clientes, una tabla ficticia para relacionar clientes y doctores, "debt" para las deudas, "doctor" para los profesionales de la salud, "employees" para los empleados, "inventory" para el control del inventario, "local" para la información relacionada con los locales, "payments" para los registros de pagos, y "user_data" que centraliza los datos generales de usuarios, abarcando doctores, empleados y clientes.

La depuración de estas tablas fue una fase crítica del proceso de desarrollo. Se realizaron exhaustivas pruebas y verificaciones para asegurar que los datos se almacenaran correctamente en las tablas correspondientes y que las relaciones entre ellas fueran precisas. Se implementaron queries específicas para verificar la integridad de los datos, garantizando que la información se mostrara de manera precisa y coherente en todo momento.

Además, se establecieron procedimientos para la incorporación o eliminación de nuevas tablas o relaciones en respuesta a futuras necesidades del proyecto. Esto se hizo con la visión de anticipar posibles expansiones o cambios en el sistema, permitiendo una adaptabilidad continua a medida que el Dental System evoluciona.

El equipo de desarrollo colaboró estrechamente con otras áreas del proyecto, recibiendo y considerando aportes y requisitos adicionales para asegurar la coherencia y la eficacia del sistema en su conjunto.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### QA

Con el fin de que el producto final cumpla con las expectativas propuestas, se establecieron metricas para evaluar el éxito del sistema en términos de eficiencia y satisfacción del cliente mediante la realizacion de pruebas cad vez que se realizaba un avance, tambien se mantuvo una comunicacion constante con todas la areas sobre cualquier cuestion tecnica y la correccion de errores.
Tipos de pruebas realizadas:

- Prueba de Calidad
- Prueba de Rendimiento
- Prueba de Velocidad de Respuesta
<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contribucion

Las contribuciones son las que hacen de la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será muy apreciada.

Si tiene alguna sugerencia que pueda mejorar esto, bifurque el repositorio y cree una solicitud de extracción. También puedes simplemente abrir un problema con la etiqueta "mejora". ¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Forkea el Proyecto
2. Crea una rama propia (`git checkout -b feature/AmazingFeature`)
3. Has los cambio y somete un commit (`git commit -m 'Add some AmazingFeature'`)
4. Realiza un push (`git push origin feature/AmazingFeature`)
5. Genera una solicitud de cambio

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- LICENSE -->

## Cronograma

Vea `Cronograma de actividades sistema dental.pdf` para visualizar el Diagrama de Gantt de actividades.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- CONTACT -->

## Contacto

Direcciones Github de integrantes de Proyecto:

FRONTEND

- Jesus Jeovany Bonilla Martinez [https://github.com/JeovanyBon](https://github.com/JeovanyBon)
- Cesar del Angel Ramon Lozano [https://github.com/AngelSilent](https://github.com/AngelSilent)
- Miguel Argote Reyes - 19760557 [https://github.com/Miwi64](https://github.com/Miwi64)

BACKEND

- Alberto Oswaldo Cisneros Torres [https://github.com/Waldo72k](https://github.com/Waldo72k)
- Juan Ernesto Diaz Osuna [https://github.com/tparadyse](https://github.com/tparadyse)

DATABASE

- Zack Vadhir Dragostinovis Solis - 19760512 [https://github.com/Nerovelic](https://github.com/Nerovelic)
- Edgar Alejandro Gonzalez Aviles [https://github.com/Edgar-Glez](https://github.com/Edgar-Glez)

QA

- Alan Cordova Viera - 17760217 [https://github.com/alanvviera](https://github.com/alanvviera)
- Andre Axel Cadena Zepeda - 19760606 [https://github.com/AndreCaze](https://github.com/AndreCaze)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>
