export default class Person {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
    this.mercuryAge = Math.trunc(earthAge / .24);
    this.venusAge = Math.trunc(earthAge / .62);
    this.marsAge = Math.trunc(earthAge / 1.88);
    this.jupiterAge = Math.trunc(earthAge / 11.86);
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