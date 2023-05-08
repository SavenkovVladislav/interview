// Функции могут смотреть только внутрь себя и наверх (в родителя), то есть funcB может видеть только свою переменную 'b' и родительскую переменную 'a', а переменную 'c' функция funcB видеть не может, потому что она не в её области видимости
function funcA() {
	let a = 'a'

	function funcB() {
		let b = 'b'

		function funcC() {
			let c = 'c'
			console.log('funcC', a, b, c)
		}
		funcC()
		console.log('funcB', a, b)
	}
	funcB()
	console.log('funcA', a)
}

funcA() // funcC a b c, funcB a b, funcA a
