import fs from 'fs';

(() => {

  const files = [
    { id: 1, toDelete: false },
    { id: 2, toDelete: false },
    { id: 3, toDelete: true },
    { id: 4, toDelete: false },
    { id: 5, toDelete: false },
    { id: 7, toDelete: true },
  ];

  const filesToDelete = files.map(file => file.toDelete);


  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const daysSince: number = 23;
  // R: const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = 'Fernando';

  // primer apellido - last name
  const latName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysSinceLastUpdate = 12;
 // R:  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const studentMaximunAmountOfClasses = 6;
  // R: const macClassesPerStudent = 6;


})();




