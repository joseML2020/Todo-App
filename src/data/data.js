const defaultTodos = [
    { id: "text-1", text: 'Comprar pan', completed: false },
    { id: "text-2", text: 'Llamar a mamá', completed: true },
    { id: "text-3", text: 'Leer un libro', completed: false },
    { id: "text-4", text: 'Hacer ejercicio', completed: false },
    { id: "text-5", text: 'Preparar presentación', completed: true },
  ];

const COLORS ={
    incomplete:'bg-red-200',
    completed:'bg-green-200',
    all:'bg-blue-200'
 };  

 export {
    COLORS,
    defaultTodos,
 }