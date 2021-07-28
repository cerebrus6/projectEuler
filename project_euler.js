// Recovery Key:1787188-ugAKZSZgtAKy45JBmQhNKwuN69FuMhNkv02ciFRV
// Direct Link:https://projecteuler.net/recovery=1787188-ugAKZSZgtAKy45JBmQhNKwuN69FuMhNkv02ciFRV
// Generated:Fri, 19 Feb 2021, 17:15.33

let euler = class {
	constructor(...given) {
		this.given = given;
	}
}

// Test
let euler1 = new euler(1,2,3,4,5);
console.log("Hello World");
euler1.newMethod = function() {
	return "Hello friggin world " + this.given;
}
console.log(euler1.newMethod());

// arithmitexProgression (difference, upperbound, lowerbound)
class arPro extends euler {
	constructor(...given) {
		super(...given);
		this.d = this.given[0];
		this.upperBound = this.given[1] - 1;
		this.lowerBound = Math.ceil(this.given[2]/this.d)*this.d;
		this.n = Math.floor(this.upperBound/this.d) - Math.floor(this.lowerBound/this.d) + 1;		
	}
	result() {
		return (this.n*(2*this.lowerBound+((this.n-1)*this.d)))/2;
	}
}

// inclusiveExclusive ([Total], [Subtract])
class incEx extends euler {
	constructor(...given) {
		super(...given);
		this.n1 = 0;
		for(let i of given[0]) {
			this.n1+=i;
		}
		this.n2 = 0;
		for(let i of given[1]) {
			this.n2+=i;
		}
	}
	result() {
		return this.n1-this.n2;
	}
}
console.log(new arPro(3, 1000, 0).result());
console.log(new arPro(5, 1000, 0).result());
console.log(new incEx(	[new arPro(3, 1000, 1).result(), new arPro(5, 1000, 1).result()], 
						[new arPro(15, 1000, 1).result()]).result());
// Brute Force
let answer = 0;
for(i=0;i<1000;i++) {
	if(i%3==0 || i%5==0) {
		answer+=i;
	}
}
console.log(answer);

// Sum of even fibonaci numbers less than four million
answer = 0;
for(let i = 0, j = 1;i<4000000;) {
	let counterg=j;
	if(j%2==0) {
		answer+=j;
	}
	j+=i;
	i=counterg;
}
console.log(answer);

function partitionCounts(num) {
// Position Numbers
	let counter = [1,3]
	let partitions = [0,1];
	let plusMinus = [1,3];
	let positionNumbers = [0];
	let i = 1;
	while(positionNumbers[positionNumbers.length-1]<num) {
		if(i+1>counter[i%2]){
			positionNumbers.push(positionNumbers[positionNumbers.length-1] + counter[1]);
			counter[1]+=2;
			plusMinus.push(counter[1]);
		} else {
			positionNumbers.push(positionNumbers[positionNumbers.length-1] + counter[0]);
			counter[0]+=1;
			plusMinus.push(counter[0]);
		}
		i+=1;
	}
// Partition Numbers
	for(i=1;i<=num;i++) {
		let temp=0;
		let positionCount=0;
		let counter1=partitions.length;
		let counter2=0;
		while(counter1>positionNumbers[counter2]) {
			if(positionCount<2) {
				temp+=partitions[counter1-(positionNumbers[counter2]+1)];
			} else {
				temp-=partitions[counter1-(positionNumbers[counter2]+1)];
			}
			counter2+=1;
			positionCount+=1;
			if(positionCount==4) {
				positionCount=0;
			}
		}
		partitions.push(temp);
	}
	return partitions;
}
answer = partitionCounts(666);
console.log(answer[answer.length-1]);

let n = 100;

function range(end, begin=0) {
	let res = [];
	for(let i=begin;i<=end;i++) {
		res.push(i);
	}
	return res;
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
console.log("Hello Darkness");
console.log(eratosthenes(13));
// console.log(eratosthenes(600851475143));

// let nu = Math.ceil(600851475143/2);
// for(let i=nu;i>0;i--) {
// 	if(i%2==0) {
// 		i--;
// 	}
// 	if(600851475143%i==0&&isPrime(i)) {
// 		console.log(i);
// 		break;
// 	}
// }
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

function isPrime(num) {
	if(factors(num).length==2)
		return true;
	else
		return false;
}
function greatestPrimeFactor(num) {
	let temp = 0;
	for(let i=2;i<=Math.ceil(Math.sqrt(num));i++) {
		if(num%i==0&&isPrime(i))
			temp=i;
		if(num%i==0&&isPrime(num/i)) {
			return num/i;
		}
	}
	return temp;
}
console.log(factors(3));
console.log(isPrime(2));
console.log(greatestPrimeFactor(10));
console.log(greatestPrimeFactor(1234));
console.log(isPrime(25));
console.log(factors(1120));
console.log(greatestPrimeFactor(1120));
console.log(greatestPrimeFactor(600851475143));
console.log(isPalindrome(12321));

function reverseArr(s){
    return [...s].reverse().join("");
}
function isPalindrome(num) {
	let numStr = "" + num;
	return numStr.slice(0, Math.floor(numStr.length/2))==reverseArr(numStr.slice((Math.ceil(numStr.length/2))));
}
function largestPalindrome(digits) {
let limit1 = 10**(digits-1);
let limit2 = (limit1*10)-1;
let testNum = 0;
for(let i=limit2;i>=limit1;i--) {
	for(let j=i;j>=limit1;j--) {
		if(isPalindrome(i*j)&&testNum<(i*j)) {
			testNum = i*j;
		}	
	}
}
return testNum;
}
// console.log(factors(2));

console.log(largestPalindrome(3));

function lcd(num1, num2) {
	if(num1%num2==0||num2%num1==0) {
		return (num1>num2)?num1:num2;
	} else {
		return num1*num2;
	}
}

function numToArrComp(x,testArr) {
	for(i of testArr) {
		if(x==i) {
			return true
		}
	}
	return false;
}

function intersection(arr1, arr2) {
	let arr = (arr1.length<=arr2.length)?arr1:arr2;
	let testArr = (arr==arr1)?arr2:arr1;
	return arr.filter(x=>numToArrComp(x,testArr));
}

function gcd(num1, num2) {
	let fact1 = factors(num1);
	let fact2 = factors(num2);
	return Math.max(...intersection(fact1,fact2));
}

function lcm(num1, num2) {
	let gcdNum = gcd(num1,num2);
	return (num1/gcdNum)*num2;
}

function lcmArr(num) {
		let tempEra = [...Array(num+1).keys()];
		let era = eratosthenes(tempEra[tempEra.length-1]);		
		let answer = 1;
		for(let i=0;i<era.length;i++) {
			let temp = era[i];
			let tempCounter = 1;
				while(temp*era[i]<=tempEra[tempEra.length-1]){
					temp*=era[i];
					tempCounter+=1;
				}
				answer*=(era[i]**tempCounter);
		}
		return answer;
}

console.log(gcd(50,80))
console.log(gcd(6,4));
console.log(lcm(60,40))
console.log("------------")
console.log(lcmArr(2));
console.log(lcmArr(3));
console.log(lcmArr(4));
console.log(lcmArr(5));
console.log(lcmArr(6));
console.log(lcmArr(7));
console.log(lcmArr(8));
console.log(lcmArr(10));
console.log("------------")
// Bruteforce
function divisibility(...arr) {
	for(let i = 1; i<arr.length-1;i++) {
		if(arr[0]%arr[i]!=0) {
			return true;
		}
	}
	return false;
}

let countz = [...Array(10).keys()].slice(1);
let start = Math.max(...countz);
while(divisibility(start, ...countz)) {
	start+=Math.max(...countz);
}
console.log(start);

let var1 = [...Array(100+1).keys()].slice(1);
let var2 = ([...Array(100+1).keys()].slice(1).reduce((a,b)=>a+b,0))**2;
var1.forEach(function(x, index, arr) {arr[index]*=x});
var1 = var1.reduce((a,b)=>a+b,0);
console.log(var2-var1);
console.log(eratosthenes(10, 0));
// console.log(eratosthenes(10001, 1));

let longNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

let num1 = 0;
let num2 = 13;
let shortNum;
let answers = [];
while(num2<longNum.length) {
	let temp = 1;
	shortNum = longNum.slice(num1,num2);
	for(let i = 0; i<13;i++) {
		temp*=Number(shortNum[i]);
	}
	answers.push(temp);
	num1++;
	num2++;
}
console.log(Math.max(...answers));
answers = [];
for(let a=1;a<=1000/2;a++) {
	for(let b=1;b<=1000/2;b++) {
		for(let c=1;c<=1000/2;c++) {
			if(a+b+c==1000) {
				answers.push([a,b,c]);
			}
		}
	}
}
answers = answers.filter(x=>isPythagorean(...x));
console.log(answers);

function isPythagorean(...arr) {
	if((arr[0]**2)+(arr[1]**2)==(arr[2]**2))
		return true;
	else
		return false;
}
console.log(answers[0][0]*answers[0][1]*answers[0][2]);
// console.log(eratosthenes(2000000).reduce((a,b)=>a+b,0));

let newArr = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48"
newArr = newArr.split(" ");
newArr.forEach(function(x, index, arr){arr[index]=Number(x)});
console.log(newArr);
console.log("Length " + newArr.length);
let testArr1 = [];
for(let i=0;i<newArr.length-60;i++) {
	if(i%20<17) {
		testArr1.push([newArr[i],newArr[i+1],newArr[i+2],newArr[i+3]]);
	}
	if(i<newArr.length-30) {
		testArr1.push([newArr[i],newArr[i+20],newArr[i+40],newArr[i+60]]);
	}
	if(i%20<17) {
		testArr1.push([newArr[i],newArr[i+21],newArr[i+42],newArr[i+63]]);
	}
	if(i%20>2) {
		testArr1.push([newArr[i],newArr[i+19],newArr[i+38],newArr[i+57]]);
	}
}
console.log(testArr1);
testArr1.forEach(function(x,index,arr) {arr[index]=arr[index].reduce((a,b)=>a*b)})
console.log(Math.max(...testArr1));

// let temp1 = [1];
// while(factors(temp1.reduce((a,b)=>a+b)).length<=500) {
// 	temp1.push(temp1[temp1.length-1]+1);
// }
// console.log(temp1.reduce((a,b)=>a+b));

let largeNum = [37107287533902102798797998220837590246510135740250,
46376937677490009712648124896970078050417018260538,
74324986199524741059474233309513058123726617309629,
91942213363574161572522430563301811072406154908250,
23067588207539346171171980310421047513778063246676,
89261670696623633820136378418383684178734361726757,
28112879812849979408065481931592621691275889832738,
44274228917432520321923589422876796487670272189318,
47451445736001306439091167216856844588711603153276,
70386486105843025439939619828917593665686757934951,
62176457141856560629502157223196586755079324193331,
64906352462741904929101432445813822663347944758178,
92575867718337217661963751590579239728245598838407,
58203565325359399008402633568948830189458628227828,
80181199384826282014278194139940567587151170094390,
35398664372827112653829987240784473053190104293586,
86515506006295864861532075273371959191420517255829,
71693888707715466499115593487603532921714970056938,
54370070576826684624621495650076471787294438377604,
53282654108756828443191190634694037855217779295145,
36123272525000296071075082563815656710885258350721,
45876576172410976447339110607218265236877223636045,
17423706905851860660448207621209813287860733969412,
81142660418086830619328460811191061556940512689692,
51934325451728388641918047049293215058642563049483,
62467221648435076201727918039944693004732956340691,
15732444386908125794514089057706229429197107928209,
55037687525678773091862540744969844508330393682126,
18336384825330154686196124348767681297534375946515,
80386287592878490201521685554828717201219257766954,
78182833757993103614740356856449095527097864797581,
16726320100436897842553539920931837441497806860984,
48403098129077791799088218795327364475675590848030,
87086987551392711854517078544161852424320693150332,
59959406895756536782107074926966537676326235447210,
69793950679652694742597709739166693763042633987085,
41052684708299085211399427365734116182760315001271,
65378607361501080857009149939512557028198746004375,
35829035317434717326932123578154982629742552737307,
94953759765105305946966067683156574377167401875275,
88902802571733229619176668713819931811048770190271,
25267680276078003013678680992525463401061632866526,
36270218540497705585629946580636237993140746255962,
24074486908231174977792365466257246923322810917141,
91430288197103288597806669760892938638285025333403,
34413065578016127815921815005561868836468420090470,
23053081172816430487623791969842487255036638784583,
11487696932154902810424020138335124462181441773470,
63783299490636259666498587618221225225512486764533,
67720186971698544312419572409913959008952310058822,
95548255300263520781532296796249481641953868218774,
76085327132285723110424803456124867697064507995236,
37774242535411291684276865538926205024910326572967,
23701913275725675285653248258265463092207058596522,
29798860272258331913126375147341994889534765745501,
18495701454879288984856827726077713721403798879715,
38298203783031473527721580348144513491373226651381,
34829543829199918180278916522431027392251122869539,
40957953066405232632538044100059654939159879593635,
29746152185502371307642255121183693803580388584903,
41698116222072977186158236678424689157993532961922,
62467957194401269043877107275048102390895523597457,
23189706772547915061505504953922979530901129967519,
86188088225875314529584099251203829009407770775672,
11306739708304724483816533873502340845647058077308,
82959174767140363198008187129011875491310547126581,
97623331044818386269515456334926366572897563400500,
42846280183517070527831839425882145521227251250327,
55121603546981200581762165212827652751691296897789,
32238195734329339946437501907836945765883352399886,
75506164965184775180738168837861091527357929701337,
62177842752192623401942399639168044983993173312731,
32924185707147349566916674687634660915035914677504,
99518671430235219628894890102423325116913619626622,
73267460800591547471830798392868535206946944540724,
76841822524674417161514036427982273348055556214818,
97142617910342598647204516893989422179826088076852,
87783646182799346313767754307809363333018982642090,
10848802521674670883215120185883543223812876952786,
71329612474782464538636993009049310363619763878039,
62184073572399794223406235393808339651327408011116,
66627891981488087797941876876144230030984490851411,
60661826293682836764744779239180335110989069790714,
85786944089552990653640447425576083659976645795096,
66024396409905389607120198219976047599490197230297,
64913982680032973156037120041377903785566085089252,
16730939319872750275468906903707539413042652315011,
94809377245048795150954100921645863754710598436791,
78639167021187492431995700641917969777599028300699,
15368713711936614952811305876380278410754449733078,
40789923115535562561142322423255033685442488917353,
44889911501440648020369068063960672322193204149535,
41503128880339536053299340368006977710650566631954,
81234880673210146739058568557934581403627822703280,
82616570773948327592232845941706525094512325230608,
22918802058777319719839450180888072429661980811197,
77158542502016545090413245809786882778948721859617,
72107838435069186155435662884062257473692284509516,
20849603980134001723930671666823555245252804609722,
53503534226472524250874054075591789781264330331690]
// console.log(largeNum.reduce((a,b)=>a+b));

let collatz = [];
for(i=2;i<100;i++) {
	let tempCount = 0;
	let temp = i;
	while(temp!=1) {
		if(temp%2==0) {
			temp/=2;
		} else {
			temp = (3*temp) + 1;
		}
		tempCount++;
	}
	collatz.push([i, tempCount]);
}
let max = [0,0];
for(i=0;i<collatz.length;i++) {
	if(max[1]<collatz[i][1]) 
		max = collatz[i];
}
console.log(max);

class node {
	constructor(x) {
		this.x = x;
		this.next = null;
	}
}

class singlyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
	const newNode = new node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length+=1;
		return this;
	}
}

function factorial(num) {
	if(num == 0)
		return 1;
	else
		return num*factorial(num-1);
}

function effecientFactorial(num) {
	let primes = eratosthenes(num);
	primes.forEach(function(x,index,arr) {
		let temp = 1;
		let total = 0;
		while(Math.floor(num/(x**temp))>0) {
			total+=Math.floor(num/(x**temp));
			temp++;
		}
		arr[index] = x**total;
	});
	return (num>1)?primes.reduce((a,b)=>a*b):1;
}

function latticePaths(size) {
	let n = 2*size;
	let k = size;
	return effecientFactorial(n)/(effecientFactorial(k)*effecientFactorial(n-k));
}
console.log(latticePaths(20));

console.time('factorial')
console.log(factorial(50))
console.timeEnd('factorial')

console.time('effecientFactorial')
console.log(effecientFactorial(50));
console.timeEnd('effecientFactorial')

let prob16 = [1];
for(let i=0;i<1000;i++) {
	for(let j=prob16.length-1;j>=0;j--) {
		prob16[j]*=2;
		if(prob16[j]>=10&&j==0) {
			prob16[j]-=10;
			prob16.unshift(1);
		}
	}
	for(let j=prob16.length-1;j>=0;j--) {
		if(prob16[j]>=10&&j!=0) {
			prob16[j]-=10;
			prob16[j-1]+=1;
		} else if(prob16[j]>=10&&j==0) {
			prob16[j]-=10;
			prob16.unshift(1);
		}
	}

}

prob16 = prob16.reduce((a,b)=>Number(a)+Number(b));
console.log(prob16);

function numToWord(num) {
	let numsArr = ["", "one","two","three","four","five","six","seven","eight","nine"];
	let tensArr = ["", "ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]; 
	let hundredsArr = ["", "", "", "Hundred", "Thousand", "", "Hundred", "Million", "Hundred", "Hundred", "Billion", "", "HundredBillion"];
	let teensArr = ["ten", "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	let temp = num.toString();
	let word = [];
	let counter = temp.length;
		for(let i=0;i<temp.length;i++,counter--) {
			if(num==0) {
				return "zero";
				break;
			}
			// Starting from the leftmost digit
			currentDigit = Number(temp[i]);
			switch(counter%3) {
				case 2:
					if(currentDigit==1) {
						currentDigit = Number(temp[i+=1]);
						word.push(teensArr[currentDigit]);
						counter--;
						word.push(hundredsArr[counter]);
					} else {
						word.push(tensArr[currentDigit]);
					}
					break;
				default:
					if(currentDigit!=0) {
						word.push(numsArr[currentDigit]);
						word.push(hundredsArr[counter]);
						if(counter%3==0&&(Number(temp[counter-1])!=0||Number(temp[counter-2])!=0)) {
							word.push("and");
						}
					}
			}
		}
	return word.join("");
}
let probs17 = 0;
for(let i=1;i<=1000;i++) {
	probs17+=numToWord(i).length;
}
console.log(probs17);

class treeNode {
	constructor(x) {
		this.x = x;
		this.left = null;
		this.right = null;
	}
}

class tree {
	constructor() {
		this.root = null;
	}
	init(x) {
		if(this.root==null) {
			this.root = new treeNode(x);			
		}
		return this.root;
	}
	recursivePush(node,arr,counter=0,layer=1) {
			if(arr[counter]) {
				node.left = new treeNode(arr[counter+=layer])
				this.recursivePush(node.left,arr,counter,layer+1);
			}
			if(arr[counter]) {
				node.right = new treeNode(arr[counter+=1])
				this.recursivePush(node.right,arr,counter,layer+1);
				}
	}
	display(node=this.root) {
		console.log(node.x);
		if(node.left!=null)
			this.display(node.left);
		if(node.right!=null)
			this.display(node.right);
	}
	sum(node=this.root) {
		let tempNode1 = node;
		let tempNode2 = node;
		let total = node.x;
		while(tempNode1.left!=null) {
			if(tempNode1.left.x!=null)
				total+=tempNode1.left.x;
			tempNode2 = tempNode1;
			while(tempNode2.right!=null) {
				if(tempNode2.right.x!=null)
					total+=tempNode2.right.x;
				tempNode2 = tempNode2.right;
			}
			tempNode1 = tempNode1.left;
		}
		return total;
	}
	candidates(node=this.root,lb) {
		let tempNode1 = node;
		let tempNode2 = node;
		let total = [];
		while(tempNode1.left!=null) {
			if(tempNode1.left.x!=null)
				if(tempNode1.x+tempNode1.left.x>lb)
					total+=1;
			tempNode2 = tempNode1;
			while(tempNode2.right!=null) {
				if(tempNode2.right.x!=null)
					if(tempNode2.x+tempNode2.right.x>lb)
						total+=1;
				tempNode2 = tempNode2.right;
			}
			tempNode1 = tempNode1.left;
		}
		return total;
	}
	randoms(node=this.root) {
		let tempNode;
		let maxTotal = 0;
		let randomNum;
		for(let i=0;i<100000;i++) {
			let total = 0;
			tempNode = this.root;
			let counter = 0;
			while(counter<15) {
				randomNum = Math.floor(Math.random()*2)+1;
				counter+=1;
				if(tempNode!=null)
					total+=tempNode.x;
				if(randomNum==1) {
					tempNode = tempNode.left;
				} else {
					tempNode = tempNode.right;
				}
			}
			if(total>=maxTotal) {
				maxTotal = total;
			}
		}
		return maxTotal;
	}
	maximum(node=this.root) {
		let tempMax = 0;
		let tempNode1 = node;
		let tempNode2 = node;
			while(tempNode1.left!=null) {
				if(tempNode1.left.x!=null)
					if(tempNode1.left.x>tempMax) 
						tempMax = tempNode1.left.x;
				tempNode2 = tempNode1;
				while(tempNode2.right!=null) {
					if(tempNode2.right.x!=null)
						if(tempNode2.right.x>tempMax) 
							tempMax = tempNode2.right.x;
					tempNode2 = tempNode2.right;
				}
				tempNode1 = tempNode1.left;
			}
		return tempMax;	
	}
	longPath(node=this.root,num=0) {
		let nextNode;
		let points = [0,0];
		if(node.left!=null&&node.right!=null) {

			if(this.candidates(node.left,num)>this.candidates(node.right,num)) {
				points[0]+=1;
			} else {
				points[1]+=1;
			}

			if(this.sum(node.left)>this.sum(node.right)) {
				points[0]+=1;
			} else {
				points[1]+=1;
			}

			if(node.left.x>node.right.x) {
				points[0]+=1;
			} else {
				points[1]+=1;
			}

			if(this.randoms(node)>this.randoms(node)) {
				points[0]+=1;
			} else {
				points[1]+=1;
			}

			if(points[0]>points[1]) {
				nextNode = node.left;				
			} else {
				nextNode = node.right;				
			}

			return node.x + this.longPath(nextNode);			
		} else {
			return node.x;
		}
	}
}

let tempArr = [75,95,64,17,47,82,18,35,87,10,20,4,82,47,65,19,1,23,75,3,34,88,2,77,73,7,63,67,99,65,4,28,6,16,70,92,41,41,26,56,83,40,80,70,33,41,48,72,33,47,32,37,16,94,29,53,71,44,65,25,43,91,52,97,51,14,70,11,33,28,77,73,17,78,39,68,17,57,91,71,52,38,17,14,91,43,58,50,27,29,48,63,66,4,68,89,53,67,30,73,16,69,87,40,31,4,62,98,27,23,9,70,98,73,93,38,53,60,4,23];
let counter = 0;
let newTree = new tree();
let rootNode = newTree.init(tempArr[counter]);
newTree.recursivePush(rootNode,tempArr);
console.log(newTree.sum());
console.log(Math.ceil(tempArr.reduce((a,b)=>a+b)));
// console.log(newTree.randoms());

class dates {
	constructor(day,month,year) {
		this.months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		this.day = day;
		this.month = month;
		this.year = year;
	}
	isLeapYear(year=this.year) {
		if((year%4==0&&year%100!=0)||year%400==0)
			return true;
		else
			return false;
	}
	nextDay() {
		this.months[1] = ((this.isLeapYear())?29:28);
		this.day = (this.day+1<=this.months[this.month-1])?this.day+1:1;
		this.month += ((this.day==1)?1:0);
		this.year += ((this.month>12)?1:0);
		this.month -= ((this.month>12)?12:0);
		// console.log(this.day + " " + this.month + " " + this.year);
		return [this.day, this.month, this.year];
	}
	zellers(q=this.day,m=(this.month>2)?this.month:this.month+12,K=(this.month>2)?this.year%100:(this.year-1)%100,J=(this.month>2)?Math.floor(this.year/100):Math.floor((this.year-1)/100)) {
		let h = (q+Math.floor((13*(m+1))/5) + K + Math.floor(K/4) + Math.floor(J/4) + (5*J))%7;
		return h;
	}
}

let testD = new dates(1,1,1901);
console.log(testD.zellers());
let ans = 0;
while(testD.year<=2000) {
	if(testD.zellers()==0&&testD.day==1){
		ans+=1;
	}
	testD.nextDay();
}
console.log(ans);

function numToArray(num) {
	num = num.toString();
	num = num.split("");
	num.forEach(function(item,index,arr) {arr[index]=Number(item)});
	return num;
}

function addArray(arr1,arr2) {
	let smallerArr = (arr1.length<=arr2.length)?arr1:arr2;
	let biggerArr = (arr1.length<=arr2.length)?arr2:arr1;
	for(let o = 0;o<smallerArr.length;o++) {
		biggerArr[o]+=smallerArr[o];
	}
	return biggerArr;
}

function numArrCorrection(arr) {
	let carry = 0;
	let temp;
	if(arr.length==1) {
		if(arr[0]>9) {
			arr[0]-=10;
			arr.unshift(1);
		}
		return arr;
	}
	for(let p=arr.length-1;p>=0;p--) {
		temp = arr[p]+carry;
		arr[p] = (arr[p]+carry)%10
		carry = Math.floor(temp/10);
//		console.log(carry);
		if(p==0 && carry!=0) {
			arr.unshift(carry);
			return arr;
		} else if(carry==0&&p==0) {
			return arr;
		}
	}
}

function multiplyArrToNum(num1,num2) {
	num1 = numToArray(num1);
	num2 = numToArray(num2);
	let num1Len = num1.length-1; // shorter number
	let num2Len = num2.length-1;
	let product = [];
	let tempArr;
	let counter = 0;
	for(let i=num1Len;i>=0;i--,counter++) {
		tempArr = [];
		for(let j=num2Len;j>=0;j--) {
			tempArr.push(num1[i]*num2[j]);
		}
		product.unshift(tempArr);
		for(let c=i;c>0;c--) {
			product[0].unshift(0);
		}
	}
	product = product.reduce((a,c)=> addArray(a,c));
	product.reduce((a,c)=> addArray(a,c))
	product = parseInt(numArrCorrection(product));
//	console.log("REEEEEEEEEEEEEEEE = " + product);
	return product;
}

let prob19 = [1];
for(let i=0;i<100;i++) {
	for(let j=prob19.length-1;j>=0;j--) {
		prob19[j]*=(i+1);
		if(prob19[j]>=10&&j==0) {
			prob19[j]-=10;
			prob19.unshift(1);
		}
	}
	for(let j=prob19.length-1;j>=0;j--) {
		if(prob19[j]>=10&&j!=0) {
			prob19[j]-=10;
			prob19[j-1]+=1;
		} else if(prob19[j]>=10&&j==0) {
			prob19[j]-=10;
			prob19.unshift(1);
		}
	}

}

prob19 = prob19.reduce((a,b)=>Number(a)+Number(b));
console.log(prob19);
console.log(multiplyArrToNum(99,99));

let ans19 = 1;
for(let k = 1;k<=100;k++) {
	ans19 = multiplyArrToNum(ans19,k);
}
console.log(ans19);
// console.log(ans19.reduce((a,b)=>Number(a)+Number(b)));
console.log(factors(1));
console.log(factors(2));
console.log(factors(3));
let amicableNumbers = [];

function d(num) {
	let divisors = factors(num);
	divisors = divisors.filter(x=>x!=num);
	divisors = divisors.reduce((a,b)=>a+b);
	return divisors;
}

for(let i=2;i<10000;i++) {
	let div1 = d(i);
	if(i==d(div1)&&i!=div1){
		amicableNumbers.push(i);

	}
}
console.log(amicableNumbers.reduce((a,b)=>a+b));

function letterToNum(char,place=0) {
	return ((char.charCodeAt(place)>90)?char.charCodeAt(place)-96:char.charCodeAt(place)-64);
}
function wordToNum(word) {
let ret = 0;
	for(let i=0;i<word.length;i++) {
		ret+=letterToNum(word,i);
	}
	return ret;
}
// console.log(letterToNum("z"));
// console.log("A".charCodeAt(0));
// console.log("B".charCodeAt(0));
// console.log("A".charCodeAt(0));
console.log(wordToNum("Ab"));

const fs = require('fs');
var names = fs.readFileSync("./names.txt",{encoding:'utf8', flag:'r'});
names = names.replace(/"/g,"").split(",");
names.sort();
console.log("Data: ", names);
function nameScore(word) {
	var score = 0;
	for(var i = 0; i<word.length; i++) {
		score+=letterScore(word[i]);
	}
	return score;
}

console.log(nameScore("ABC"));
function letterScore(letter) {
	if(letter>='a'&&letter<='z') return letter.charCodeAt() - 96;
	else if(letter>='A'&&letter<='Z') return letter.charCodeAt() - 64;
	else return 0;
}

var sumWords = 0;
for(var k = 0; k<names.length; k++) {
	sumWords+= ((k+1)*nameScore(names[k]));
}
console.log(sumWords);

// A function that outputs the sum of the proper divisors of a number
var primes = eratosthenes(28123);
function sigma(n) {
	var originalNum = n;
 	var sum = 1;
  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    if (0 === n % p) {
      var t = p * p;
      n /= p;
      while (0 === n % p) {
        t *= p;
        n /= p;
      }
      sum = sum * (t - 1) / (p - 1);
    }
    if (p * p > n) {
      break;
    }
  }
  if (n > 1) {
    sum*= n + 1;
  }
  return sum-originalNum;
}

// Create a function that identifies abundant numbers
var cache = {};
function isAbundant(n) {
	if (n < 10)
		return false;
	if (cache[n]) {
		return cache[n];
	}
	cache[n] = (sigma(n) > n)
	return cache[n];
}

var limit = 28123;
// Create an array of abundant numbers
var abundantArr = [];
for (var i = 1; i <= 28123; i++) {
	if (isAbundant(i))
 	   abundantArr.push(i);
}

console.log(abundantArr);

var isSumOfTwoAbundants = new Array(28123 + 1);
for (var i = 0; i < abundantArr.length; i++) {
	for (var j = i; j < abundantArr.length; j++) {
		if (abundantArr[i] + abundantArr[j] <= 28123) {
			isSumOfTwoAbundants[abundantArr[i] + abundantArr[j]] = true;
    	} else {
    		break;
    	}
	}
}

var sum = 0;
for(var i = 1; i<=28123; i++) {
	if(!isSumOfTwoAbundants[i]) {
		sum+=i;		
	}
}
console.log(sum);

function lexicographic(array) {
	if(typeof array === "string") {
		let lexPerm = [];
			if (array.length<=1){
				return array;
			}
			for(var i = 0; i<array.length; i++) {
				let element = array[i];
				if(array.indexOf(element)!=i)
					continue;
				let theRest = array.slice(0,i) + array.slice(i+1, array.length)
				for(let perm of lexicographic(theRest)) {
					lexPerm.push(element + perm);
				}
			}
		return lexPerm;	
	} else if(Array.isArray(array)) {
		let lexPerm = [];
		let i, char;
		if (array.length<=1){
			return array;
		}
		for(i = 0; i < array.length; i++) {
			let element = [array[i]];
			let theRest = array.slice(0,i).concat(array.slice(i+1, array.length))
			for(let perm of lexicographic(theRest)) {
				lexPerm.push(element.concat(perm));
			}
		}
		return lexPerm;
	}
}
console.log(lexicographic("abc"));
console.log("HELL");
// var lexi = lexicographic([0,1,2,3,4,5,6,7,8,9]);
// console.log(lexi);
// console.log(lexi[1000000-1]);

let cmsc106a = [0.015, 0.039, 0.035, 0.048, 0.041,
0.033, 0.054, 0.035, 0.028, 0.021,
0.030, 0.032, 0.021, 0.043, 0.048
];

let cmsc106b = [0.029, 0.067, 0.038, 0.078, 0.046,
0.071, 0.004, 0.016, 0.066, 0.010,
0.019, 0.003
];

function variance(arr) {
	let res, mean;
	mean = arr.reduce((a, b) => a + b, 0)
	
	return res;
}
	
function addTwoArrays(arr1, arr2) {
	return(numArrCorrection(addArray(arr1.reverse(), arr2.reverse()).reverse()));
}

console.log(addArray([1],[1]));
console.log(numArrCorrection(addArray([1],[9]).map(parseInt)));
console.log(numArrCorrection([2]));
console.log(numArrCorrection([1]))
console.log(numArrCorrection(addArray([9,1],[1])));
let box = [0];
let current = [1];
let previous = [0];
let countIndex = 1;
while(current.length!=1000) {
	box = JSON.parse(JSON.stringify(current));
	current = addTwoArrays(current, previous);
	// console.log(current);
	previous = JSON.parse(JSON.stringify(box));
	countIndex+=1;
}
console.log(current.join(""));
console.log(countIndex);
// console.log(parseInt("0"));
// console.log(addTwoArrays([1,3], [8]));
// console.log(addArray([3,1],[8]));
// console.log(numArrCorrection([11,1]))


function fractionToDecimal(d) {
	let hash = {};
	let output = {
		arr: [],
		index: 0
	}; 
    let i = 0, n = 1
    while(true) {
    	i++;
    	n*=10;
    	let y = Math.floor(n / d)
        // This creates a hash table of key value pairs where n is the key and i is the value
        output.arr.push(Math.floor(n/d));
        if (typeof hash[n] === 'undefined') {
            hash[n] = i;
        } else {
        	output.arr.pop();
        	output.index = i - hash[n];
            return output;
        }
        n = n % d;
        if(n==0)
        	break;
    }
    // 1/7
    return 0;
}

console.log(factors(12));
console.log(eratosthenes(12));
let eratosthenes12 = eratosthenes(12);
let factors12 = factors(12);
console.log(factors12.filter((element) => eratosthenes12.find(x => element == x)));

function primeFactors(num) {
	let x = eratosthenes(num);
	let y = factors(num);
	return x.filter((element) => y.find(z => element == z));
}

let maxLength = [[0],[0]];
for(let i = 2; i<1000; i++) {
	let result1 = fractionToDecimal(i);
	if(result1.index>maxLength[0][0]) {
		maxLength[0][0] = i;
		maxLength[1] = result1.arr;
	}
}
console.log(fractionToDecimal(7));
console.log(fractionToDecimal(7));
console.log(maxLength)