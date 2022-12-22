// // My own implementation of the Pick<T, K> generic

type MyPick<Type, Key extends keyof Type> = {
  [Prop in Key]: Type[Prop];
};

interface Todo {
  title: string
  description: string
  completed: boolean
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
