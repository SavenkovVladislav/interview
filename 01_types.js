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
