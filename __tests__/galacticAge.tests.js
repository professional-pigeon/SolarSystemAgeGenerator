  
import User from '../src/galacticAge.js';

describe('Character', () => {

  let User;
    
    beforeEach(() =>  {
      User = new User("Kyle", 32);
    });

    test('should create a User object',  () => {
      expect(user.name).toEqual("Kyle");
      expect(user.age).toEqual(32)
    });
}