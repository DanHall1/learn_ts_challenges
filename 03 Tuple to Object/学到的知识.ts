const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// const obj = {
//   0: 'tesla',
//   1: 'model 3',
//   2: 'model X',
//   3: 'model Y'
// }

type a = typeof tuple
function foo<T extends keyof a>(ar:T){

}

foo("")

// function foo<T extends   string[]>(ar:T){

// }

// foo([1,2,"3"])


// type TupleToObject<T extends readonly ( string  | number | symbol)[]> = {
//   [property in T[ 0 | 1| 2 | 3 ]]: property
// }

// type aaaaaa = TupleToObject<typeof tuple>

// function foo<T>(arg:T) {}
// foo<aaaaaa>(s)

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type TupleToObject<T extends readonly any[]> = {
//   [property keyof T] : property
//   // keyof 拿到 key 变成联合类型  0 | 1 | 2 | 3
//   //类型缩小  0 in  0 | 1 | 2 | 3
// }

// type aaaaaa =TupleToObject<typeof tuple>

// NODE 知识点分析
// 1 typeof tuple  
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] 
// type a = typeof tuple

// 2 字面量类型 
//  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
//  type a = typeof tuple
// as const 将全部内容变成 const 类型
// type aaaaaa = readonly ["tesla", "model 3", "model X", "model Y"]

// 3 in keyof array  可以拿到索引
//  in array[number] 可以拿到值

// 4 @ts-expect-error 期望下面的语句报错,下面没有报错我这个注释就报错
// array 里面的key 是不是 string || number || symbol 不是就报错

export { }