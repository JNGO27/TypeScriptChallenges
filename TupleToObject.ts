// Give an array, transform into an object type and the key/value must in the given array.
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
type t = typeof tuple;

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}
type result = TupleToObject<typeof tuple>;

const tupleToObj: result = { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'};