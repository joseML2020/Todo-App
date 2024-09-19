# Todo List App

¡Bienvenido a la aplicación Todo List! Esta es una aplicación para gestionar tus tareas diarias con funcionalidad de arrastrar y soltar, y filtrado por estado. Está construida con React, Tailwind CSS, y la librería `react-beautiful-dnd` para la funcionalidad de arrastrar y soltar.

## Características

- **Agregar Tareas:** Añade nuevas tareas a tu lista.
- **Editar Tareas:** Modifica el texto de tus tareas existentes.
- **Eliminar Tareas:** Elimina tareas que ya no necesitas.
- **Arrastrar y Soltar:** Reordena las tareas arrastrándolas y soltándolas.
- **Filtrado:** Filtra las tareas por estado (Todas, Completadas, No Completadas).

## Tecnologías Utilizadas

- **React:** Librería para construir interfaces de usuario.
- **Tailwind CSS:** Framework de CSS para un diseño atractivo y responsive.
- **react-beautiful-dnd:** Biblioteca para arrastrar y soltar elementos en la interfaz.

## Estructura del Proyecto

### 1. `App.jsx`

El componente principal que contiene la lógica de la aplicación y renderiza el componente `TodoList`.

### 2. `TodoInput.jsx`

Este componente permite a los usuarios agregar nuevas tareas.

### 3. `TodoItem.jsx`
Este componente representa cada tarea individual y permite editar y eliminar tareas.


### 4. ` TodoList.jsx`
Este componente muestra la lista de tareas y permite arrastrar y soltar tareas para reordenarlas.


## Instalación y Ejecución

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/todo-list-app.git
   cd todo-list-app
   ```
2. **Instala las dependencias:**

   ```bash
   npm install
   ```
3. **Inicia la aplicación:**

   ```bash
   npm run dev
  ```
  La aplicación estará disponible en http://localhost:3000.
  ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna idea para mejorar la aplicación, no dudes en abrir un [issue](https://github.com/tu-usuario/todo-list-app/issues) o enviar un [pull request](https://github.com/tu-usuario/todo-list-app/pulls).

