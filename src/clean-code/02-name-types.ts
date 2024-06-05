(() => {

  const celsiusTemperatures = [33.6, 12.34];
  // R: const temperaturesCelsius = [33.6, 12.34];

  const serverIp = '123.123.123.123';

  const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  const emails = users.map(user => user.email);
  // R: usersEmails

  const doesJump = false;
  // R: canJump
  const doesRun = true;
  // R: canRun
  const hasItems = false;
  const isLoading = false;


  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime;


  function getBooks() {
    throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function getBooksFromUrl(url: string) {
    throw new Error('Function not implemented.');
  }
  // R: getBooksByUrl


  function squareArea(sideLenght: number) {
    throw new Error('Function not implemented.');
  }
  // R: getSquareArea(side: number)

  function printJob() {
    throw new Error('Function not implemented.');
  }






})();




