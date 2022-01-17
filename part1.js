// ! 1. Напишите функцию, которая пишет в консоль число в заданном диапазоне и вообщает число чётное или нет
const foo = (min, max) => {
  const randomNumber = Math.random() * (max-min +1) + min;
  const numberParseInt = parseInt(randomNumber)
  if(numberParseInt % 2 === 0 ){
     return console.log(`${numberParseInt} - Четное число`);
  }
  console.log(`${numberParseInt} - Нечетное число`);
}
// foo(3, 19); // 8 - чётное

// ! 2
/**
 * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 * @param {number} arraySize - размер массива
 * @param {?} value - значение для массива
 * @returns {Array}
 */

 const fill = (arraySize, value) => {
   let newArray = []
  for (let index = 0; index < arraySize; index++) {
    newArray.push(value)
  }
  return newArray;
}

const arraySize = 3;
const valueToFill = 'a';
// console.log(fill(arraySize, valueToFill)) // ['a', 'a', 'a']

// ! 3
/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
 const reverse = (array) => {
  let newArray = []
   for (let index = array.length-1; index >= 0; index--) {
     const element = array[index];
     newArray.push(element)
   }
   return newArray
}

const arrayToReverse = [1, 2, 3];
// console.log(reverse(arrayToReverse)); // [3, 2, 1]

// ! 4
/**
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
 * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
 const compact = (array) => {
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element){
      newArray.push(element)
    }
  }
  return newArray
}

const wrongArray = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(wrongArray)) // [1, 2, 3]

// ! 5
/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Условие: не использовать Object.fromEntries()
 * @param {Array} array - массив, значения которого массивы пар
 * @returns {Array}
 */
 const fromPairs = (array) => {
   let newObject = {}
   for (let index = 0; index < array.length; index++) {
     const element = array[index]
     newObject[element[0]] = element[1]
   }
   return newObject
}

const toObject = [['a', 1], ['b', 2]];
// console.log(fromPairs(toObject)) // { 'a': 1, 'b': 2 }

// ! 6
/**
 * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
 * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
 * @returns {Array}
 */
 function without() {
  const argsArray = [...arguments]

  let filterValueArray = []
  for (let index = 1; index < argsArray.length; index++) {
    const element = argsArray[index];
    filterValueArray.push(element)
  }

  let newArray = []
  for (let index = 0; index < argsArray[0].length; index++) {
    const element = argsArray[0][index];
    if(element !== filterValueArray[0]){
      newArray.push(element)
    }
  }

  filterValueArray.shift()
  
  if(filterValueArray.length > 0){
    newArray = without(newArray, ...filterValueArray)
  }
  return newArray
}

const arrayOfPrimitives = [1, 2, 3, 1, 2];
// console.log(without(arrayOfPrimitives, 1, 2)); // [3]

// ! 7
/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */
 const unique = (array) => {
  const result = array.filter((element, i) => 
    array.indexOf(element) === i)  
  return result
}

const doubleValuesArray = [1, 2, 1, 2, 3];
// console.log(unique(doubleValuesArray)); // [1, 2, 3]

// ! 8
/**
 * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
 * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
 * @param {Array} firstArray - Массив с примитивными значениями
 * @param {Array} secondArray - Массив с примитивными значениями
 * @returns {boolean}
 */
 const isEqual = (firstArray, secondArray) => {
  return firstArray.toString() === secondArray.toString()
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
// console.log(isEqual(arr1, arr2)); // true

// ! 9
/**
 * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
 */
 const chunk = (array, size) => {
   let newArray = [];
   let turn = 0
   let arrayPart = []
   for (let index = 0; index < array.length; index++) {
     const element = array[index];
      arrayPart.push(element)
      if(size === index-turn+1){
        turn = index+1
        newArray.push(arrayPart)
        arrayPart=[]
      }
    }
    newArray.push(arrayPart)
    return newArray
}

const arrayToChunk = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(arrayToChunk, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(arrayToChunk, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// ! 10
/**
 * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
 * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * @param {Object} object - любой объект для трансформации
 * @returns {Array} - вложенный массив
 */

const makePairs = (object) => {
  return Object.entries(object); 
};

const objToArray = { a: 1, b: 2 };
// console.log(makePairs(objToArray)); // [['a', 1], ['b', 2]]

// ! 11
/**
 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Сложность задачи: 2 of 5
 * @returns {Object} - новый объект без удаленных значений
 */

function withoutFields() {
  const argsArray = [...arguments];
  const array = Object.entries(argsArray[0]);

  let filterValueArray = []
  for (let index = 1; index < argsArray.length; index++) {
    const element = argsArray[index];
    filterValueArray.push(element)
  }
  
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element[0] !== filterValueArray[0]){
      newArray.push(element)
    }
  }
  filterValueArray.shift()
  
  let newObject = Object.fromEntries(newArray)
  if(filterValueArray.length > 0){
    newObject = withoutFields(newObject, ...filterValueArray)
  }
  
  return newObject
};

const objectToCut = { a: 1, b: 2, c: 3 };
// console.log(withoutFields(objectToCut, 'b', 'c')); // { a: 1 }

// ! 12
/**
 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObj - объект с примитивами
 * @param {Object<string | number>} secondObj - объект с примитивами
 * @returns {boolean}
 */

 export const isEqualObjects = (firstObject, secondObject) => {
};

const isEqualObject1 = { a: 1, b: 1 };
const isEqualObject2 = { a: 1, b: 1 };
const isEqualObject3 = { a: 1, b: 2 };
// console.log(isEqualObjects(isEqualObject1, isEqualObject2)); // true
// console.log(isEqualObjects(isEqualObject1, isEqualObject3)); // false

// ! 13
/**
 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - объект с примитивными значениями
 * @param {Object<string | number>} secondObj - объект с примитивными значениями
 * @returns {Object}
 */

 export const intersection = (firstObject, secondObject) => {
};

const intersectionObject1 = { a: 1, b: 2 };
const intersectionObject2 = { c: 1, b: 2 };
console.log(intersection(intersectionObject1, intersectionObject2)); // { b: 2 }