export class Person {
	name = 'Tom'
	say = () => console.log('say')
	speak() {
		console.log('speak')
	}
}

let p = new Person()
console.log(p)
p.name = 'Houdini'
console.log(p)
