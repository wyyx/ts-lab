class Person {
	constructor() {
		this.name = 'Tom'
		this.say = () => console.log('say')
	}
	speak() {
		console.log('speak')
	}
}

let p = new Person()
console.log(p)
