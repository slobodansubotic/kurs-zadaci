class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  compareAge(person) {
    if (person.age < this.age)
      console.log(
        person.name,
        "is younger than",
        this.name,
        "by",
        this.age - person.age,
        "years."
      );
    else if (person.age > this.age)
      console.log(
        person.name,
        "is older than",
        this.name,
        "by",
        person.age - this.age,
        "years."
      );
    else console.log(person.name, "and", this.name, "are the same age.");
  }
}

const tim = new Person("Tim", "24");
const john = new Person("John", "32");

tim.compareAge(john);
john.compareAge(tim);
