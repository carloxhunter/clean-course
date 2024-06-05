(() => {

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId});
  }

  interface createMovieParams {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  // R: interfaz Movie (y ordenadas ascendente)

  function createMovie({title, description, rating, cast} : createMovieParams)  {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthDate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;

  }




})();




