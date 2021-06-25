export default class Person {
  constructor(name, earthAge, height, diet, drinkFrequency, lifeExpectancyAvg) {
    this.name = name;
    this.earthAge = earthAge;
    this.height = height;
    this.diet = diet;
    this.drinkFrequency = drinkFrequency;
    this.lifeExpectancy = lifeExpectancyAvg;
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

  lifeExpectancyCalculator() {
    if (this.height > 72) {
      this.lifeExpectancy = this.lifeExpectancy -2;
    } else {
      ;
    }
    if (this.diet === "Vegan") {
      this.lifeExpectancy = this.lifeExpectancy + 2;
    } else if (this.diet === "Vegetarian" || this.diet === "Pescapetarian") {
      this.lifeExpectancy = this.lifeExpectancy + 1;
    } else {
      ;
    }
    if (this.drinkFrequency > 2 && this.drinkFrequency <= 4) {
      this.lifeExpectancy = this.lifeExpectancy -1;
    } else if (this.drinkFrequency > 4 && this.drinkFrequency <= 5) {
      this.lifeExpectancy = this.lifeExpectancy -2;
    } else if (this.drinkFrequency > 5) {
      this.lifeExpectancy = this.lifeExpectancy -5;
    }
    else {
      ;
    }
  }

  earthYearsLeft() {
    this.lifeExpectancyCalculator();
    if (this.lifeExpectancy >= this.earthAge) {
      return this.lifeExpectancy - this.earthAge;
    } else {
      return this.earthAge - this.lifeExpectancy;
    }
  }

  mercuryLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / .24);
  }

  mercuryYearsLeft() {
    this.lifeExpectancyCalculator();
    if (this.lifeExpectancy >= this.earthAge) {
      return this.mercuryLifeExpectancy() - this.mercuryAge();
    } else {
      return this.mercuryAge() - this.mercuryLifeExpectancy();
    }
  }

  venusLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / .62);
  }
  
  venusYearsLeft() {
    this.lifeExpectancyCalculator();
    if (this.lifeExpectancy >= this.earthAge) {
      return this.venusLifeExpectancy() - this.venusAge();
    } else {
      return this.venusAge() - this.venusLifeExpectancy();
    }
  }

  marsLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / 1.88);
  }

  marsYearsLeft() {
    this.lifeExpectancyCalculator();
    if (this.lifeExpectancy >= this.earthAge) {
      return this.marsLifeExpectancy() - this.marsAge();
    } else {
      return this.marsAge() - this.marsLifeExpectancy();
    }
  }

  jupiterLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / 11.86);
  }

  jupiterYearsLeft() {
    this.lifeExpectancyCalculator();
    return this.jupiterLifeExpectancy() - this.jupiterAge();
  }



}