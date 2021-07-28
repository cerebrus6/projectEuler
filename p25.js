let box = [];
let current = [1];
let previous = [0];

console.log(expandedForm(10))
console.log(expandedForm(20))
console.log(expandedForm(30))
console.log(expandedForm(100))
while(1) {
	box = current.splice(0);
	current = addArray(current+previous);
	previous = box.splice(0);
	if(current.length==25){
		console.log(current.join(''));
		break;
	}
}