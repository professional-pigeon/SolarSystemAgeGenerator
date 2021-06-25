export default class Person {
  constructor(name, earthAge, height, diet, drinkFrequency) {
    this.name = name;
    this.earthAge = earthAge;
    this.height = height;
    this.diet = diet;
    this.drinkFrequency = drinkFrequency
  }

  mercuryAge() {
    return Math.trunc(this.earthAge / .24);
  }

  venusAge() {
    return Math.trunc(this.earthAge / .62);
  }

  marsAge() {
    return Math.trunc(this.earthAge / 1.88);
  }

  jupiterAge() {
    return Math.trunc(this.earthAge / 11.86);
  }

  

}