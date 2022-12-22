// All, Must be an array of items, and all items must be the same, otherwise type error

type All<T1 extends Array<unknown>, T2> = {
  [K in keyof T1]: T2;
};

type Test1 = [1, 1, 1];
type Test2 = [1, 1, 2];
type Test3 = [true, true];
type Test4 = ['fails', 'works'];

type ListTest1 = All<Test1, 1> // should be same as true
type ListTest2 = All<Test2, 1> // should be same as false
type ListTest3 = All<Test3, true> //should be the same as false
type ListTest4 = All<Test3, 'works'> //should be the same as false

const list1: ListTest1 = [1, 1, 1];           //works
const list2: ListTest2 = [1, 1, 2];           //type error, exactly like we want
const list3: ListTest3 = [true, true];        //works
const list4: ListTest4 = ['fails', 'fails'];  //type error, exactly like we want