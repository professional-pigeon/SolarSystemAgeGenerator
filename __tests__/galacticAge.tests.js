import { TestScheduler } from 'jest-cli';
import Person from '../src/galacticAge.js';

describe('Person', () => {

  let user;
    
    beforeEach(() =>  {
      user = new Person("Kyle", 50);
    });

    test('should create a User object',  () => {
      expect(user.name).toEqual("Kyle");
      expect(user.earthAge).toEqual(50)
    });

    test('should give you your Mercury age', () => {
      expect(user.mercuryAge()).toEqual(208)
    })

    // test('should give you your Venus age', () => {
    //   expect(user.mercuryAge()).toEqual(31)
    // })
});