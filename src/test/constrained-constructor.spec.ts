import { ConstrainedConstructor } from "../lib";

interface Animal {
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dogCtor: ConstrainedConstructor<Animal, Dog, [string]> = Dog;
const dog = new dogCtor('Buddy');
dog.speak(); // "Buddy barks."
