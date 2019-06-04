// 2 способа

// рекурсия - повторение чего-либо самоподобным образом. Вызов функции из нее самой.

// 1

console.log(-----------------------1 способ-----------------------);

function F(n) {
	if (n < 2) {
		return 1;
	}
	return F(n - 1) + F (n - 2);
}
console.log(fibonacci(6));



console.log(-----------------------2 способ-----------------------);
  function fibonacci(num) {
    let fibonacciOne = 0;
    let fibonacciTwo = 1;
    let fibonacciCurrent = 1;

	for (let i = 1; i <= num; i++) {
      fibonacciCurrent = fibonacciOne + fibonacciTwo;
      fibonacciOne = fibonacciTwo;
      fibonacciTwo = fibonacciCurrent;
    }
    return fibonacciCurrent;
}
    console.log(fibonacci(6));