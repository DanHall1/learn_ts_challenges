interface Point {
  x: number;
  y: number;
}

interface FrozenPoint {
  readonly x: number;
  readonly y: number;
}

function freezePoint(p: Point): FrozenPoint {
  return Object.freeze(p);
}

const origin = freezePoint({ x: 0, y: 0 });
console.log('第16行',origin);

// Error! Cannot assign to 'x' because it
// is a constant or a read-only property.
// origin.x = 42;


// freeze<T>(o: T): Readonly<T>;

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };



type Todo =  {
  title: string;
  description: string;
  completed: boolean;
}
type TodoKeys = keyof Todo;
function foo(k:TodoKeys) {}
foo("")

export{}