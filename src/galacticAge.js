export default class Person {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Math.trunc(this.earthAge / .24);
  }

  venusAge() {
    return Math.trunc(this.earthAge / .62);
  }



}