// NODE  知识点 
// 1. pick
// 传入二个参数,  第一个为 对象 ,第二个为需要选择的 key , 如果当前key不在, 则报错
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type TodoPreview = Pick<Todo, "completed">;
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};


// 1 extends 类型约束  只可传入这三种  'title' | 'completed' | 'invalid'
function foo<T extends aaa>(arg: T) {
  console.log('第50行', arg);
}
foo()

type aaa = 'title' | 'completed' | 'invalid'
type c<T extends aaa> = {
  [P in T]: P
}
type d = c<aaa>
// 2 in 找到 T 中的 每一个 key 
// 总共循环三次
// 1 title
// 2 completed
// 3 invalid
// in keyof === forEach 遍历 key

// 3 keyof 遍历元素中的key  类似 Object.keys() 遍历出来以 联合(union)类型展示 
type arr = {
  age: 18
  height: 1.88
}

function bar<T>(arg: keyof T ){}

bar<arr>()
