/* 
This is my a challenge I made on my own.

Make your own version of Object.entries native JS function called myEntries and make it as type safe as possible.
*/

const testObject = {
  someNum: 1,
  someStr: 'hey',
  someArrProp: [true, false],
  someObjProp: { a: null, b: undefined },
} as const;

type Keys<T extends {}> = (keyof T);
type Values<T extends {}> = ({ [K in keyof T]: T[K]; }[keyof T]);

type KeysArr<T extends {}> = Keys<T>[];
type ValuesArr<T extends {}> = Values<T>[];

type KeyValueTuple<T extends {}> = [Keys<T>, Values<T>];
type Entries<T extends {}> = KeyValueTuple<T>[];

function getKeys<Obj extends {}>(obj: Obj): KeysArr<Obj> {
  return Object.keys(obj) as KeysArr<typeof obj>
}

function getValues<Obj extends {}>(obj: Obj): ValuesArr<Obj> {
  return Object.values(obj) as ValuesArr<typeof obj>
}

function myEntries<Obj extends {}>(obj: Obj): Entries<typeof obj> {
  const keysArr: KeysArr<typeof obj> = getKeys(obj);
  const valuesArr: ValuesArr<typeof obj> = getValues(obj);
  const result: Entries<typeof obj> = keysArr.map((key, idx) => [key, valuesArr[idx]]);

  return result;
}

console.log(myEntries(testObject));