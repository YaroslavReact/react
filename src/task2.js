const arr = [1, 2, 3, 4, 5, 6]
const arrSome = arr.some(item => item > 3); // хоть один больше 3?
console.log(arrSome);
console.log("Some_______________________");
const arrReduce = arr.reduce((sum, item) => sum + item); // сумма всех елементов массива
console.log(arrReduce);
console.log("Reduce_______________________");
const arrEvery = arr.every(item => item > 3); //все ли елементы больше 3?
console.log(arrEvery);
console.log("Every_______________________");
const arrMap = arr.map(item => item + 1 ); // примением ф-цию к каждому ел и возвращаем новый массив
console.log(arrMap);
console.log("Map_______________________");
const multylevelArr = [1, [2 , 3] , 4, [5, [6]]]; 
const arrFlat = multylevelArr.flat(2)             // убирает вложеность массива как параметр уровень до которого нужно убрать
console.log(arrFlat);
console.log("Flat_______________________");
const arrFilter = arr.filter(item => item > 3);  // выбирает из массива ел подходящие под условие и возвразает новый массив
console.log(arrFilter);
console.log("Filter_______________________");
arr.forEach(item => console.log(item + 1))       // выполняет ф-цию на каждый ел массива ничего не возвращает
console.log("ForEach_______________________");
const arrFindIndex = arr.findIndex(item => item > 3);   //ищет первый подходящий под условие ел и возвращает его индекс, если такого нет -1
console.log(arrFindIndex);
console.log("FinedIndex_______________________");
const arrFind = arr.find(item => item > 3); //ищет первый подходящий под условие ел и возвращает этот ел, если такого нет undefined
console.log(arrFind);
console.log("Find_______________________");
const arrSort = arr.sort((a, b) => b - a); // сортирует ел в данном случае от больше к меньшему, по умолчанию наоборот
console.log(arrSort);
console.log("Sort_______________________");
const arrReverse = arr.reverse();
console.log(arrSort);
console.log("Reverse_______________________");
const arrConcat = arr.concat(arrFind); // обьелдиняет два или больше массива 
console.log(arrConcat);
console.log("Concat_______________________");
const arrFill = arr.fill("no", 0, 3); //заченяет выбраные ел массива заданым значение
console.log(arrFill);
console.log("Fill_______________________");
const arrIncludes = arr.includes("no"); //возвращает true или  false  в зависимости от того есть ли такой ел в масиве
console.log(arrIncludes);
console.log("Includes_______________________");