(() => {


 //ok
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela'];
    return redFruits.includes(fruit)
  }

 // ok
  function getFruitsByColor(color: string): string[] {
    switch (color) {
      case 'red':
        return ['manzana', 'fresa'];
      case 'yellow':
        return ['piña', 'banana'];
      case 'purple':
        return ['moras', 'uvas'];
      default:
        throw Error('the color must be: red, yellow, purple');
    }
  }
  // version 2: profesor
  type FruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor2( color: FruitColor): string[] {
    if (!Object.keys(color).includes(color)) {
      throw new Error('the color must be: red, yellow, purple');
    }
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    }
    return fruitsByColor[color];
  }


  // ok
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';
    return 'Working properly!';
  }

  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); 
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); 

  console.log({ redFruits: getFruitsByColor('red') }); 
  console.log({ yellowFruits: getFruitsByColor('yellow') }); 
  console.log({ purpleFruits: getFruitsByColor('purple') }); 
  //console.log({ pinkFruits: getFruitsByColor('pink') }); 

  console.log({ workingSteps: workingSteps() }); 


})();




