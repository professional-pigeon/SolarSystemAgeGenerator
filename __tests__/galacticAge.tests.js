import Person from '../src/galacticAge.js';

describe('Person', () => {

  let user;
    
    beforeEach(() =>  {
      user = new Person("Kyle", 50, 74, "Vegan", 2, 70);
    });

    test('should create a User object',  () => {
      expect(user.name).toEqual("Kyle");
      expect(user.earthAge).toEqual(50)
    });

    test('should give you your Mercury age', () => {
      expect(user.mercuryAge()).toEqual(208)
    })

    test('should give you your Venus age', () => {
      expect(user.venusAge()).toEqual(80)
    })

    test('should give you your Mars age', () => {
      expect(user.marsAge()).toEqual(26)
    })

    test('should give you your Jupiter age', () => {
      expect(user.jupiterAge()).toEqual(4)
    })

    test('should create construct with more key:value pairs', () => {
      expect(user.name).toEqual("Kyle");
      expect(user.earthAge).toEqual(50);
      expect(user.height).toEqual(74);
      expect(user.diet).toEqual("Vegan");
      expect(user.drinkFrequency).toEqual(2);
      expect(user.lifeExpectancy).toEqual(70);
    })

    test('should return a user life expectancy of 68 if user is taller than 72 inches through subtraction.', () => {
      user = new Person("Kyle", 50, 74, "none", "none", 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(68);
    })

    test('should return a user life expectancy of 72 if user is a "Vegan"', () => {
      user = new Person("Kyle", 50, 70, "Vegan", "none", 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(72);
    })

    test('should return a user life expectancy of 71 if user is a "Vegetarian"', () => {
      user = new Person("Kyle", 50, 70, "Vegetarian", "none", 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(71);
    })
    
    test('should return a user life expectancy of 71 if user is a "Pescapetarian"', () => {
      user = new Person("Kyle", 50, 70, "Pescapetarian", "none", 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(71);
    })

    test('should lose a year of expectancy for drinking more than 2 times a week', () => {
      user = new Person("Kyle", 50, 70, "none", 3, 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(69);
    })

    test('should lose 2 years of expectancy for drinking more than 4 times a week', () => {
      user = new Person("Kyle", 50, 70, "none", 5, 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(68);
    })

    test('should lose 5 years of expectancy for drinking more than 5 times a week', () => {
      user = new Person("Kyle", 50, 70, "none", 7, 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(65);
    })

    test('if you taller than 72, a vegan, and you drink 3 days a week, you are expected to live 69 years', () => {
      user = new Person("Kyle", 50, 74, "Vegan", 3, 70);
      user.lifeExpectancyCalculator()
      expect(user.lifeExpectancy).toEqual(69);
    })

    test('should tell you how many years you have left', () => {
      user = new Person("Kyle", 50, 74, "Vegan", 3, 70);
      expect(user.earthYearsLeft()).toEqual(19);
    })

    test('should tell you your life expectancy on Mercury', () => {
      expect(user.mercuryLifeExpectancy()).toEqual(291)
    })

    test('should tell you your years left on Mercury', () => {
      expect(user.mercuryYearsLeft()).toEqual(83)
    })

    test('should tell you your life expectancy on Venus', () => {
      expect(user.venusLifeExpectancy()).toEqual(112)
    })

    test('should tell you your years left on Venus', () => {
      expect(user.venusYearsLeft()).toEqual(32)
    })


});

