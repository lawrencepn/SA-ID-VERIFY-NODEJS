
//Lawrence Nyakiso Copy Right 2014
//Download from NPM
//MIT License

module.exports = function(id, callback){
	var a_array = [];
	var b_array = [];
	var c_array = [];

	//split the id number into an array

	for(var i = 0; i < id.toString().length; i++){

		a_array.push(parseInt(id.toString().charAt(i)))
		
	}
	//add all the numbers in the odd position excluding the last one
	for(var k = 0; k < a_array.length - 1; k++){

		if ((k + 2) % 2 == 0) {

			b_array.push(a_array[k]);

		}else{

			c_array.push(a_array[k])
		}
	}

	var c = b_array.reduce(function(a,b){

		return a + b;
	})

	//lay out the numbers at even positions as an interger and multiply the resulting int by 2
	var b_ = '';

	for(i in c_array){

		b_+= c_array[i]
	}

	var d = parseInt(b_) * 2;

	//the result from the previous step is an int, split the into and array
	//and add all the numbers in the new array
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

	//if equal to id[12], the last digit in the id number
	if (g == a_array[12]) {

		if (a_array[6] = 0 || a_array[6] <= 4) {
			var result = {
				'valid' : true,
				'gender' : 'FEMALE'
			}
			callback(null, result)

		}else if(a_array[6] >= 5 || a_array[6] <= 9){
			var result = {
				'valid' : true,
				'gender' : 'MALE'
			}
			callback(null, result)
		}
		

	}else{

		return 'Your ID Number is Invalid'
	}
}
