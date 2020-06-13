class UTIL {
  //Fisher Yates shuffle
  public static shuffle = ( list:Array<string> ):Array<string> => {
    let counter:number = list.length;
    let temp:string;
    let index:number;

    // While there remain elements to shuffle…
    while (counter) {
      index = Math.floor(Math.random() * counter--);

      // And swap it with the current element.
      temp = list[counter];
      list[counter] = list[index];
      list[index] = temp;
    }

    return list;
  }

  public static generatePassword = ( length:number = 8 ):string => {
    const LOWER_CHARS:Array<string> = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];  
    const UPPER_CHARS:Array<string> = LOWER_CHARS.join('').toUpperCase().split(''); 
    const NUMBERS:Array<string> = [...Array(10).keys()].map(k => k.toString());
    const SPECIAL_CHARS:Array<string> = ['!','@','#','$','%','^','&','*','(',')','_','+','~','`','|','}','{','[',']',':',';','?','>','<',',','.','/','-','='];
    const ORDER_MAP:Map<number,Array<string>> = new Map<number,Array<string>>([
      [0,LOWER_CHARS],
      [1,UPPER_CHARS],
      [2,NUMBERS],
      [3,SPECIAL_CHARS]
    ]);
    const MIN_NUMBER_OF_CHARS:number = length > 8 ? 3 : 2;
    const password:Array<string> = new Array<string>();

    [...ORDER_MAP.keys()].forEach(key => {
      const upperLimit:number = Math.floor( Math.random() * MIN_NUMBER_OF_CHARS) + 1;

      for(let i = 0; i < upperLimit; i++) {
        const list = ORDER_MAP.get(key)!;
        const randomChar:string = list[Math.floor(Math.random() * list.length)];
        password.push(randomChar);
      }
    });

    while(password.length < length) {
      const randomStart:number = Math.floor( Math.random() * 4 );
      const randomList:Array<string> = ORDER_MAP.get(randomStart)!;
      const randomChar:string = randomList[Math.floor(Math.random() * randomList.length)];
      
      password.push(randomChar);
    }

    return UTIL.shuffle(password).join('');
  }

  public static getCurrentYear = ():number => {
    return new Date().getFullYear();
  }

  public static copySelection = async (selector:string):Promise<void> => {
    const selection:HTMLElement = document.querySelector(selector) as HTMLElement;
   const textToCopy:string = selection.innerText;
    const result = await navigator.clipboard.writeText(textToCopy);
  }
  
}
