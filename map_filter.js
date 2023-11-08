// 1. отфильтровать нечетные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const good = (el) => el % 2 === 1;
const good1 = numbers.filter(good)
console.log(good1);

// 2. Отфильтровать строки длинее 5 символов
const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']
const longWords = (word) => word.length > 5;
const longwords1 = words.filter(longWords)
console.log(longwords1);


// 3. Оставить только строки
const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false]
const filterMassive = mixedTypes.filter(el => typeof el === "string")
console.log(filterMassive);

// 4. Офильтровать строки которые начинаются на a
const words2 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']
newMassive = words2.filter(el => el.charAt(0) === 'a')
console.log(newMassive);


//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
const notEWords = words3.filter(el => !el.includes('e'))
console.log(notEWords);


// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]
const smartPeople = students.filter(student => student.grade > 80);
console.log('Smart Students: ');
smartPeople.forEach(student => console.log(student.name, student.grade))
// const smartPeople = students.filter(person=>person.grade > 80); 
// console.log("Smart people : ");
// smartPeople.forEach(person=>console.log(person.name));


// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]
const uniq = (arr) => {
  return duplicates.filter((el, id) => duplicates.indexOf(el) === id);
}

console.log(uniq(duplicates));

// 2.1 Добавить восклицательный знак в конце каждого слова
const words2 = ['hello', 'world', 'javascript']
const addExlamation = words2.map(word => word + "!")
console.log(addExlamation);

// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ['apple', 'banana', 'cherry']
const addNumbers = (array) => array.map((item, i) => `${i + 1}. ${item}`)
console.log(addNumbers(words1))

// 2.3 Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5]
const positiveNum = (numArr) => numArr.map(Math.abs)
console.log(positiveNum(numbers3))

// 2.4 Сделать каждое число строкой

const numbers4 = [5, 10, 15, 20]
const toStringArray =()=> String(numbers4)
console.log(typeof toStringArray([4]))

const negative = -150; const notNegativeNumber = negative.toString(); console.log(notNegativeNumber); // => '-150' 


// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5]
const multByIndex = (numberArr) => numberArr.map((number, index) => number * index)
console.log(multByIndex(numbers5))

// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const elementsEqualThree = numbers6.map((number, index) => (index % 3 === 0 ? number + 10 : number))
console.log(elementsEqualThree)

for (let i = 0; i < numbers6.length; i++) {
  if (i % 3 === 0) {
    numbers6[i] +=10
   }

}
console.log(numbers6)

let numbers7 = []
for (let i = 0; i > 3; i++) {
  let number = 10 + i * 3
  numbers7.push(number);
}
console.log(numbers7);
