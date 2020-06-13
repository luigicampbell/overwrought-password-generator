class Logic {
  constructor() {
    const year:number = UTIL.getCurrentYear();
    document.querySelector('span.currentYear').textContent = String(year);
  }

  public static generate = ():void => {
    const input:HTMLInputElement = document.querySelector('input.num-input') as HTMLInputElement;
    const length:number = Number(input.value);
    const password:string = UTIL.generatePassword(length);
    document.querySelector('span.text-field').textContent = password;
  }

  public static getPassword = ():void => {
     UTIL.copySelection('p.password');
     Logic.displayModal();
     console.log('modal')
  }

  public static displayModal = ():void => {
    const modal:HTMLDivElement = document.querySelector('div.hide-modal') as HTMLDivElement;
    modal.classList.remove('hide-modal');
    modal.classList.add('modal','text-center');

    setTimeout(() => {
      modal.classList.add('hide-modal');
      modal.classList.remove('modal');
    }, 1000);
  }
}

new Logic();