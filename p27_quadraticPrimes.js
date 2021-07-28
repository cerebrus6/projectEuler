// Cache and Sieve of Erathostenes
var cache = {};
var primes = eratosthenes(10000);
for(let k = 0; k < primes.length; k++) {
		cache[primes[k]] = true;
}

function eratosthenes(num, mode=0) {
	let testArr = [];
	// mode 0 is from 0 to num
	if(mode==0) {
		if(num>1) {
			testArr = [...Array(num+1).keys()].slice(2);
			let countArr = testArr;
			let i = 0;
			while((countArr[i]*countArr[i])<=num) {
				testArr = testArr.filter(x => (x%countArr[i])!=0||x==countArr[i]);
				i++;
			}
		}
	// mode 1 is return nth prime
	} else if(mode==1) {
		if(num>1) {
			testArr = [...Array(1000000+1).keys()].slice(2);
			let countArr = testArr;
			let i = 0;
			while((countArr[i]*countArr[i])<=1000000+1) {
				testArr = testArr.filter(x => (x%countArr[i])!=0||x==countArr[i]);
				i++;
			}
		}
		return testArr[num-1];
	}
	return testArr;
}

// Utilizing the cache to check prime
function isPrime(num) {
	if(cache[num]) {
		return true;
	} 
	else {
		return false;
	}
}

// More efficient way to factor out 
function primeFactorization(num) {
	// Temp1 is the number that is being divided by the prime factors
	// Temp2 is the prime factor
	let temp1 = num, temp2;
	let factors = new Set();
	// Comment the two lines below to ignore the trivial factors (1 and itself)
	// factors.add(1);
	// factors.add(num);
	let counter = 0;
	while(!(isPrime(temp1))) {
		counter = 0;
		while(true) {
			temp2 = primes[counter];
			if(temp1%temp2==0) {
				temp1/=temp2;
				factors.add(temp1);
				factors.add(temp2);
				break;
			}
			counter++;			
		}
	}
	return Array.from(factors);
}

// Effeciency test
// console.time("primeFactorization");
// primeFactorization(10000000000);
// console.timeEnd("primeFactorization");
// console.time("normalFactorization");
// factors(10000000000);
// console.timeEnd("normalFactorization");

// A less effecient way to get the factors
function factors(num) {
	let resArr = [];
	let i=2;
	do {
		if(num%i==0) {
			resArr.push(i);
			if(num/i!=i) {
				resArr.push(num/i);
			}
		}
		i++;
	} while(i<=Math.ceil(Math.sqrt(num)));
	if(num>2) {
		resArr.push(1);
		resArr.push(num);		
	}
	if(num==1) {
		resArr = [0,1];
	}
	return resArr;
}

// Returns the result of the formula n^2 + an + b
function quadPrime(n, a, b) {
	let res = (n*n) + (a*n) + b;
	return res;
}

// Using the formula in quadPrime, this return the longest consecutive result of n, a, b where n starts from 0
function isValidFormula(a, b) {
	let num = 0;
	let result;
	while(true) {
		result = quadPrime(num, a, b);
		// console.log(result);
		// console.log(isPrime(result));
		if(!(isPrime(result))) {
			return [num - 1, a, b];
		}
		num+=1;
	};
	return [num - 1, a, b];
}

let max = [0];
let result;
// This checks all combination a and b from 0 to the length of the primes array
// The result of the check will be inputted to the max array if it satisfies the following
// result > max, a < 1000, b <= 1000
for(let x = 0; x<1000; x++) {
	for(let y = 0; y<=1000; y++) {
		result = isValidFormula(primes[x],primes[y]);
		if(result[0]>max[0]) {
			max = result;
		}
		result = isValidFormula(-primes[x],primes[y]);
		if(result[0]>max[0]&&Math.abs(result[1])<1000&&Math.abs(result[2])<=1000) {
			max = result;
		}
		// if(result[0]==71||result[0]==70||result[0]==73)
		// 	console.log(result);
		// if(result[0]==79)
		// 	console.log(result);
	}
}

console.log(max);