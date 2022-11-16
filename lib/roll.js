
function roll(x, y, z){
	var sides = x;
	var dice = y;
	var rolls = z;
	var results = new Array(z);
	for (let i = 0; i < results.length; i++){
		results[i] = Math.floor(Math.random() * sides) + 1;
	}
	return results;
}
export {roll};
