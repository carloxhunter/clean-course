(() => {
  // aplicando principio de responsabilidad única
  //priorizar composicion frente a herencia
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string
    gender: Gender
    birthdate: Date
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate
    }

  }
  const newPerson1 = new Person({ name: 'Charly', gender: 'M', birthdate: new Date('1994-07-25') });
  console.log({ newPerson1 });


  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor(
      { email, role }: UserProps
    ) {
      this.lastAccess = new Date;
      this.email = email;
      this.role = role;
    }
    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      {
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
      }
    }
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

 class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;




    constructor({ name, gender, birthdate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      this.person = new Person( { name, gender, birthdate})
      this.user = new User({ email, role })
      this.settings = new Settings({ workingDirectory, lastOpenFolder
      })

    }
  }

  const userSettings = new UserSettings( { 
    name: 'charly',
    gender: 'M',
    birthdate: new Date('1994-07-25'),
    email: 'jiro@gmail.com',
    role: 'Admin',
    workingDirectory: '/user/charly',
    lastOpenFolder: 'home'
  })

  console.log(userSettings);
  userSettings.user.checkCredentials();

})();