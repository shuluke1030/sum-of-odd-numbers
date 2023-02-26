function rowSumOddNumbers(n) {
	let firstnum = n * (n - 1) + 1;
    let sum = 0;
    for( let i = 0; i < n; i++){
        sum = sum + firstnum + 2 * i
    }
    return sum;
}

console.log(rowSumOddNumbers(42));


//簡單解法 n*n*n ..... n的三次方
