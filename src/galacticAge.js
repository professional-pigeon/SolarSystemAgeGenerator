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
    return this.lifeExpectancy - this.earthAge;
  }

  mercuryLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / .24);
  }

  mercuryYearsLeft() {
    this.lifeExpectancyCalculator();
    return this.mercuryLifeExpectancy() - this.mercuryAge();
  }

  venusLifeExpectancy() {
    return Math.trunc(this.lifeExpectancy / .62);
  }


}