# Proyecto: Formulario de Películas en React

Este es un proyecto simple que utiliza **React** para crear un formulario interactivo de películas. El formulario permite a los usuarios agregar títulos de películas, seleccionar un género y proporcionar una descripción. Las películas agregadas se guardan en el `localStorage` del navegador y se muestran en la interfaz, con la opción de eliminar cada película.

## Características

- **Agregar películas**: Los usuarios pueden ingresar el título, género y descripción de una película.
- **Guardar en LocalStorage**: Las películas agregadas se guardan en el `localStorage` del navegador para que no se pierdan al refrescar la página.
- **Eliminar películas**: Cada película se puede eliminar de la lista.
- **Renderización eficiente**: Se utiliza `React.memo` para evitar renderizaciones innecesarias de los componentes de las películas.
  
## Estructura del proyecto

```
/src
  /components
    ├── Formulario.jsx       # Componente principal del formulario
    ├── CardPelis.jsx        # Componente que muestra las tarjetas de películas
  ├── App.jsx                # Componente principal que incluye Formulario
  ├── index.jsx              # Punto de entrada de la aplicación
```

### Archivos principales:

- **Formulario.jsx**: Contiene el formulario donde el usuario puede ingresar las películas. Administra el estado del formulario y la lista de películas, y las guarda en `localStorage`.
  
- **CardPelis.jsx**: Componente que muestra cada película en una tarjeta. Tiene un botón para eliminar la película correspondiente.

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/santinohamada/React-Ej10
```

2. Entra en el directorio del proyecto:

```bash
cd proyecto-peliculas-react
```

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta el proyecto en modo de desarrollo:

```bash
npm start
```

## Uso

1. Completa los campos del formulario: título, género y descripción de la película.
2. Haz clic en el botón **Enviar** para agregar la película a la lista.
3. Las películas se mostrarán debajo del formulario en tarjetas, con su título, género y descripción.
4. Puedes eliminar una película haciendo clic en el botón **Eliminar**.

## Mejoras sugeridas

- **Validación más estricta**: Implementar validaciones adicionales para los campos del formulario (ej. no permitir títulos vacíos).
- **Estilos personalizados**: Mejorar el estilo visual del formulario y las tarjetas utilizando CSS o una librería como `styled-components`.
- **Búsqueda de películas**: Agregar un buscador para filtrar las películas por título o género.
- **Editar películas**: Permitir editar las películas ya agregadas.
  
## Tecnologías usadas

- [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes preconstruidos de Bootstrap para React.
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) - API para almacenamiento local en el navegador.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, abre un `pull request` o crea un `issue` para discutir los cambios.
