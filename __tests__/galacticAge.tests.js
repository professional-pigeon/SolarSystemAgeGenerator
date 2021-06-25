import Person from '../src/galacticAge.js';

describe('Person', () => {

  let user;
    
    beforeEach(() =>  {
      user = new Person("Kyle", 32);
    });

    test('should create a User object',  () => {
      expect(user.name).toEqual("Kyle");
      expect(user.earthAge).toEqual(32)
    });
});