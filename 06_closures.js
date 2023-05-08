// Замыкание - когда функция имеет доступ к данным из вышестоящей области видимости

function sum(a, b) {
	let sum = a + b
	return function () {
		// данная анонимная функция не имеет в себе переменных, но она имеет доступ к области видимости родительской функции, поэтому внутри нее можно обратиться к переменный из вышестоящей области видимости
		return sum + 1
	}
}
const result = sum(1, 2)
console.log(sum(1, 2)) // console.log вернет то, что написано внутри анонимной функции, то есть вернет function(){return sum +1}, буквально, поэтому нужно как бы ее еще раз вызвать, чтобы сработал код, который внутри анонимной функции
// следующие два примера равнозначны
console.log(result())
console.log(sum(1, 2)())

// Еще примеры
function createElement() {
	const arr = ['element 0', 'element 1']
	return {
		// в данном примере эти две функции замкнули в себе значение переменной 'arr' и ничто, кроме этих двух функций, не сможет использовать переменную 'arr'
		print: function () {
			console.log(arr)
		},
		add: function (element) {
			arr.push(element)
		},
	}
}
const funcA = createElement()
console.log(funcA) // вернет объект с двумя методами print и add
funcA.print() // ['element 0', 'element 1']
funcA.add('element 2')
funcA.print() // ['element 0', 'element 1', 'element 2']
