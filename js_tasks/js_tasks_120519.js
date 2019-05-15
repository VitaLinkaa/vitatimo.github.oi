// Three ways to find the longest word in a javascript string
 
 // .split(' ')
 console.log(---------.split(' ')---------);

 function findLongestWordLength(str) {
  let longestWorld = 0;
  let strSplit = str.split(' '); // разбиваем предложение на подстроки

  for (let i = 0; i < strSplit.length; i++) { // идем по длинне сплитового предложения
    if(strSplit[i].length > longestWorld) { // если подстрока больше, чем самое длинное слово
      longestWorld = strSplit[i].length; // тогда длинное слово приравниваем самому длинному слову в подстроке
    }
  }
  return longestWorld;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


 console.log(---------.sort()---------);

  function findLongestWordLength(str) {
  	let strSplit = str.split(' '); // строку в массив, чтобы сортировать
  	let strSplitToSort = strSplit.sort(function(a, b){return b.length - a.length}); // сортируем массив, от 2 отнимает первое
  	return strSplitToSort[0].length; // возвращаем длинну нулевого елемента (6), если strSplitToSort[1].length = вернется 5
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");


 console.log(---------.reduce()---------);

  function findLongestWordLength(str) {
	  let strSplit = str.split(' ');  // строку в массив, чтобы сортировать
	  let longestWord = strSplit.reduce(function(longest, current) {
	    return current.length > longest.length ? current : longest;
	      }, "");
// с помощью reduce = задаем 2 значения = longest, current.
// Если длинна текущего слова больше длинны большего слова, верни текущее, а потом большее
	    return longestWord.length;
}

 console.log(---------https://www.internet-technologies.ru/articles/tri-sposoba-nayti-samoe-dlinnoe-slovo-v-stroke-javascript.html---------);