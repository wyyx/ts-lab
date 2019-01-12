// class Person {
// 	name: string
// 	constructor(name: string) {
// 		this.name = name
// 	}
// }

// interface PersonConstructor {
// 	new (hour: string): Person
// }

// // function createPerson(ctor: new (name: string) => Person, name: string): Person {
// // 	return new ctor(name)
// // }

// function createPerson(ctor: PersonConstructor, name: string): Person {
// 	return new ctor(name)
// }

// console.log(createPerson(Person, 'Tom'))
