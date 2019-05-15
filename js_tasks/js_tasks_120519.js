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