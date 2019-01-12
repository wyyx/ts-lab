// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

// type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
// type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

// interface Part {
//     id: number;
//     name: string;
//     subparts: Part[];
//     updatePart(newName: string): void;
// }

// type T40 = FunctionPropertyNames<Part>;  // "updatePart"
// type T41 = NonFunctionPropertyNames<Part>;  // "id" | "name" | "subparts"
// type T42 = FunctionProperties<Part>;  // { updatePart(newName: string): void }
// type T43 = NonFunctionProperties<Part>;  // { id: number, name: string, subparts: Part[] }

// let a: T40 = "updatePart"
// let b:T41 = "name"

// // FunctionProperties == XX
// type XX<T> = { [P in { [K in keyof T]: T[K] extends Function ? K : never; }[keyof T]]: T[P]; }

// let p: {a:'aa', b:'bb'}['a'|'b']
