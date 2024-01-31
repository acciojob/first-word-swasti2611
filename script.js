function firstWord(s) {
  // your code here
	let str=s.spilt(" ");
	if(s.length==0){
		return str=" "
	}
	for (let index = 0; index <str; index++) {
		return str[0];
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
