// Замыкание - это способность функции хранить в своем локальном лексическом окружении ссылку на окружение в котором она была создана

function sum(a, b) {
	let sum = a + b
	return function () {
		// данная анонимная функция не имеет в себе переменных, но она имеет доступ к области видимости родительской функции, поэтому внутри нее можно обратиться к переменный из вышестоящей области видимости
		return sum + 1
	}
}
const result = sum(1, 2)
console.log(sum(1, 2)) // console.log вернет то, что написано внутри анонимной функции, то есть вернет function(){return sum +1}, буквально, поэтому нужно как бы ее еще раз вызвать, чтобы сработал код, который внутри анонимной функции
// следующие два консоля равнозначны
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
const funcB = createElement()
// console.log(funcA) // вернет объект с двумя методами print и add
funcA.print() // ['element 0', 'element 1']
funcA.add('element 2')
funcA.print() // ['element 0', 'element 1', 'element 2']
funcB.print() // ['element 0', 'element 1']

// Пример того, как замыкания помогают решить проблему цикла for и переменной var

const fib = [1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
	setTimeout(() => {
		console.log(`fib[${i}] = ${fib[i]}`)
	}, 1500)
}

// // в таком случае консоль выдаст следующее: fib[6] = undefined шесть раз. Почему это происходит мне пока не понятно
// // Самый простой способ починить этот баг это поменять var на let и тогда в консоле мы увидим:
// // fib[0] = 1
// // fib[1] = 2
// // fib[2] = 3
// // fib[3] = 5
// // fib[4] = 8
// // fib[5] = 13

// // Второй способ это починить это замкнуть переменную i на функции:

for (let i = 0; i < fib.length; i++) {
	;(j => {
		setTimeout(() => {
			console.log(`fib[${j}] = ${fib[j]}`)
		}, 1500)
	})(i)
}

// Тут в каждой итерации цикла мы вызываем функцию в которую при каждой итерации кладем переменную i с новым значением
