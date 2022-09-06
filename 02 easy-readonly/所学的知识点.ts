type Todo2  = {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

function foo<T extends keyof Todo2>(ar:T){

}

foo("")



// type ReadonlyPoint = {
//   readonly [P in keyof Point]: Point[P];
// };

// type ReadonlyPoint = {
//   readonly [P in "x" | "y"]: Point[P];
// };

// type ReadonlyPoint = {
//   readonly x: Point["x"];
//   readonly y: Point["y"];
// };

// type ReadonlyPoint = {
//   readonly x: number;
//   readonly y: number;
// };

//=========================================
  //  type Point = {
  //       x: number;
  //       y: number;
  //   }
    
  //   type ReadonlyPoint {
  //       readonly x: number;
  //       readonly y: number;
  //   } 
    
  //   function freezePoint(p: Point): ReadonlyPoint { 
  //       return Object.freeze(p);
  //   }
  // const location = freezePoint({ x: 0, y: 0 });

  // location.x = 42;

//  type Point = {
//         x: number;
//         y: number;
//     }
    
//  type ReadonlyPoint = {
//    readonly [P in keyof Point]: Point[P];
//  };

//  // 去除 keyof ,所表示的代码
//  type ReadonlyPoint = {
//    readonly [P in "x" | "y"]: Point[P];
//  };

// // 去除左边方括号的代码,并且模拟遍历后的代码
//  type ReadonlyPoint = {
//    readonly x: Point["x"];
//    readonly y: Point["y"];
//  };

// // 遍历结束后的代码
//  type ReadonlyPoint = {
//    readonly x: number;
//    readonly y: number;
//  };

  export{}