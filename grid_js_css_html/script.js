  let matrixOne = document.querySelector('matrix_1');
  let matrixTwo = document.querySelector('matrix_2');
  let matrixThree = document.querySelector('matrix_3');


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

  function fibonacciInHtml(min, max, block) {
    for(let i = min; i < max; i++) {

      block.innerHTML = fibonacci(num);
      block.appendChild(item)
    }
  }
    fibonacciInHtml(1,5, matrixOne);
    fibonacciInHtml(5,14, matrixTwo);
    fibonacciInHtml(15,30, matrixThree);