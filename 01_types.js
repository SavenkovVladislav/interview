// в JS 7 типов данных
// null, undefined, boolean string, number, object(единственный не примитивный тип данных), symbol(ES6+)

//------
// неточности оператора typeof
// console.log(typeof null) // object // тип данных null не object, а null
// console.log(typeof function () {}) // function // тип данных function не function, а onject
// console.log(typeof NaN) // number // тип данных not a number действительно number

//------
// отличие null и undefined
// // null является определенным значением отсутствия объекта, а undefined обозначает неопределенность
// let element
// console.log(element) // undefined, так как значение не определенно
// element = document.getElementById('element')
// console.log(element) // null, так как значение определенно, но элемента с id element не существует, поэтому getElementById вернет null

//------
// ПРИВЕДЕНИЕ ТИПОВ
// к false приводятся следующие типы
// console.log(Boolean('')) // false
// console.log(Boolean(0)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
//все остальное приводится к true

// СТРОКИ И ЧИСЛА
// 1. Когда пытаемся прибавить к строке число, то число будет приводиться к строке и будет происходит конкатинация, то есть склеивание строк:
// console.log('agadg' + 1) // 'agadg1'

// // 2. Для строк не определен операторы "минус", "умножение", "деления, поэтому строка будет приводиться к числу. Если это сделать не возможно, то вернется NaN:
// console.log('qwe' - 10) // NaN
// console.log('12' - 10) // 2

// // 3. Порядок записи важен!:
// console.log(10 + 4 + 'px') // '14px', а не '104px'
// console.log('px' + 5 + 10) // 'px510'

// // 4. Приведение null и undefined к строкам и числам
// console.log(null + 'qwe') // 'nullqwe
// console.log(undefined + 'qwe') // 'undefinedqwe'
// console.log(null + 2) // 2, т.к. при приведении null к числу получается 0
// console.log(undefined + 2) // NaN

// НЕОЧЕВИДНЫЕ МОМЕНТЫ С ==
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false
