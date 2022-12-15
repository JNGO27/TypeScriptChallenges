type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Person = MyReadOnly<{
  name: string;
  age: number;
  hobbies: string[];
}>;

let person: Person = { name: 'person', age: 30, hobbies: ['Reading'] };

person.name = 'Joseph'; //type error as it's readonly
