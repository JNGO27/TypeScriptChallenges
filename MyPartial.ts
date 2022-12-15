// My own implementation of the Partial generic Utility Type

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type User = {
  name: string;
  age: number;
};

const user1: User = { name: 'person1', age: 30 };
const user2: MyPartial<User> = { name: 'person2' };