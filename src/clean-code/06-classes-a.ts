(() => {

    type Gender = 'M' | 'F';
    class Person1 {
      public name: string;
      public gender: Gender;
      public birthdate: Date;
      constructor(name: string, gender: Gender, birthdate: Date) {
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate
    }
    
  }
    const newPerson1 = new Person1('Charly', 'M', new Date('1994-07-25')); 
    console.log({ newPerson1 });

    class Person2 { 
      constructor(
        public name: string,
        public gender: Gender,
        public birthdate: Date
    ){}
  }
  const newPerson2 = new Person2('Charly', 'M', new Date('1994-07-25'));
  console.log({ newPerson2 });

  class User extends Person2 {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
        super( name, gender, birthdate);
        this.lastAccess = new Date;
      }
      checkCredentials(): boolean {
        return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
        super(email, role, name, gender, birthdate);
    }}


    const userSettings = new UserSettings(
      '/user/charly',
      'home',
      'charly@gmail.com',
      'Admin',
      'Charly',
      'M',
      new Date('1994-07-25')
    )
     
    console.log({ userSettings, areCredentialsOk: userSettings.checkCredentials() });

})();