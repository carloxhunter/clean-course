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

  const today = new Date();

  const daysSince: number = 23;
  // R: const elapsedTimeInDays: number = 23;

  const numberOfFilesInDirectory = 33;

  const firstName = 'Fernando';

  const latName = 'Herrera';

  const daysSinceLastUpdate = 12;
 // R:  const daysSinceLastModification = 12;

  const studentMaximunAmountOfClasses = 6;
  // R: const macClassesPerStudent = 6;


})();




