function threeNumberSum(array, targetSum) {
  // Write your code here.
	let sums = [];
	array.sort((a,b)=> a-b)
	for(let i = 0; i < array.length; i++){
		for(let j = i + 1; j < array.length; j++){
			for(let k = j + 1; k < array.length; k++){
				if(array[i] + array[j] + array[k] === targetSum){
					sums.push([array[i], array[j], array[k]])
				}
			}
		}
	}
	return sums;

}
