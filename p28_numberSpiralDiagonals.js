let sum = 1;
let count = 1;
let corners;
let move = 2;
let temp;
// 3 (1001-3)
// if 1 = 3
// if 2 = 5
// y = 2x + 1
// 1001 = 2x + 1
// 500 = x
let x = 500;
while(x>0) {
	corners = 4;
	while(corners>0) {
		temp = move;
		while(temp>0) {
			count+=1;
			temp-=1;
		}
		sum+=count;
		corners-=1;
	}
	move+=2;
	x-=1;
}
console.log(sum);