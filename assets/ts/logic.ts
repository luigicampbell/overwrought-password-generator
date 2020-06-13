class Logic {
  constructor() {
    const year:number = UTIL.getCurrentYear();
    document.querySelector('span.currentYear').textContent = String(year);
  }

  public static getPassword = ():void => {
    const input:HTMLInputElement = document.querySelector('input.num-input') as HTMLInputElement;
    const length:number = Number(input.value);
    const password:string = UTIL.generatePassword(length);
    document.querySelector('.password').textContent = password;
  }
}

new Logic();