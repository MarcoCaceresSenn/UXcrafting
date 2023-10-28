Para cargar librerias del proyecto utilizar siguiente comando:

### `npm install`

Para ejecutar:

### `npm start`

## Arquitectura Hexagonal

El proyecto sigue una arquitectura Hexagonal. Esta arquitectura permite una separación clara de las preocupaciones y facilita el mantenimiento y la escalabilidad del código. A continuación, se describe cómo se organiza el proyecto:

### Estructura de Carpetas

- **`src`**: Contiene el código fuente de la aplicación.

  - **`components`**: Carpeta que almacena los componentes reutilizables de la interfaz de usuario.

    - **`user-selector`**: Componentes relacionados con la selección de usuarios.
    - **`graph-component`**: Componentes para visualización de datos, como gráficos.

  - **`infraestructura`**: Carpeta para archivos relacionados con la infraestructura, como datos de usuario simulados.

  - **`views`**: Contiene las vistas principales de la aplicación.

- **`assets`**: Carpeta pública que contiene archivos estáticos como imágenes o hojas de estilo.

- **`package.json`**: Archivo de configuración de Node.js que lista las dependencias del proyecto.

- **`README.md`**: Este archivo que proporciona información sobre el proyecto y su estructura.

### Vistas

- **`ExpenseAnalyzerView`**: Esta vista principal de la aplicación muestra la interfaz de usuario para analizar ingresos y gastos. Permite a los usuarios seleccionar un usuario, filtrar por meses y analizar datos.

- **`SummaryView`**: Es una parte esencial de la aplicación que proporciona un resumen conciso de la información de la tarjeta de débito. Permite a los usuarios seleccionar un usuario y el mes para ver un resumen rápido de los ingresos y gastos asociados a la tarjeta de débito.

### Componentes

- **`UserSelector`**: Componente que proporciona una lista de usuarios para que el usuario principal seleccione.

- **`Pies`**: Componente que muestra gráficos de pastel (pie charts) para visualizar los ingresos y gastos totales.

- **`SignalComponent`**: Componente que muestra señales de ahorro para categorías específicas basadas en los datos de gasto.

¡Gracias por utilizar el Nuestra Propuesta de mejora BCP!

