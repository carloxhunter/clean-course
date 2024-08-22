(() => {
  // no aplicando principio de responsabilidad única
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


  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor(
      { email,
        role,
        name,
        gender,
        birthdate }: UserProps
    ) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date;
      this.email = email;
      this.role = role;
    }
    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ email, role, name, gender, birthdate, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      {
        super({ email, role, name, gender, birthdate });
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
      }
    }
  }


  const userSettings = new UserSettings({
    workingDirectory: '/user/charly',
    lastOpenFolder: 'home',
    email: 'charly@gmail.com',
    role: 'Admin',
    name: 'Charly',
    gender: 'M',
    birthdate: new Date('1994-07-25')
  }
  )


  console.log({ userSettings, areCredentialsOk: userSettings.checkCredentials() });

})();