// // 1.
// declare namespace myLib {
// 	function makeGreeting(s: string): string
// 	let numberOfGreetings: number
// }

// 2.
interface MyLib {
	makeGreeting(s: string): string
	numberOfGreetings: number
}

declare var myLib: MyLib
