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
      expect(user.drinkFrequency).toEqual(2)
      expect(user.lifeEpectancy).toEqual(70)
    })

    test('should return a user age of ')


});

