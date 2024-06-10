let a = [2, 5, 6, 7, 9];
let sumarr = [];
let i = 0;




for (let i = 0; i < a.length; i++) {
	let sum = 0;

	if (i == 0) {
		sumarr[i] = a[i];
	} else {
		let j = i - 1;
		sum = sumarr[j] + a[i];
		sumarr[i] = sum;
	}
}
console.log(sumarr);
