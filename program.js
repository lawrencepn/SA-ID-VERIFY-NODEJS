var id = 8707076443086;

var a_array = [];
var b_array = [];
var c_array = [];

//split numbers into an array

for(var i = 0; i < id.toString().length; i++){

	a_array.push(parseInt(id.toString().charAt(i)))
	
}

//add all the odd numbers exluding the last one
for(var k = 0; k < a_array.length - 1; k++){

	if ((k + 2) % 2 == 0) {
		b_array.push(a_array[k]);
	}else{
		c_array.push(a_array[k])
	}
}

//add the numbers at odd positions
var c = b_array.reduce(function(a,b){
	return a + b;
})

//lay out the numbers at even positions and * 2
var b_ = '';
for(i in c_array){
	b_+= c_array[i]
}
var d = parseInt(b_) * 2;

//make d into array and reduce to add var e
var d_array = [];

for(var j = 0; j < d.toString().length; j++){
	d_array.push(parseInt(d.toString().charAt(j)));
}
var e = d_array.reduce(function(a, b){
	return a + b;
})
//add c to d

var f = c + e;

//subtrack second digit of f from 10

var g = 10 - parseInt(f.toString().charAt(1));

//if eqaul to id[12]
if (g == a_array[12]) {
	if (a_array[6] = 0 || a_array[6] <= 4) {
		console.log('Your ID Number is Valid and your FEMALE')
	}else if(a_array[6] >= 5 || a_array[6] <= 9){
		console.log('Your ID Number is Valid and your MALE')
	}
	

}else{
	console.log('Your ID Number is Invalid')
}