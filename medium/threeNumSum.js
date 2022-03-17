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

function threeNumberSum(array, targetSum) {
  // Write your code here.
	let sums = [];
	array.sort((a,b)=> a-b)
	for(let i = 0; i < array.length - 2; i++){
		if(array[i] > targetSum) break;
		let left = i + 1;
		let right = array.length - 1;
		while(left < right){
			if(array[i] + array[left] + array[right] === targetSum){
				sums.push([array[i], array[left],array[right]])
				left++;
				right--;
			} else if(array[i] + array[left] + array[right] < targetSum){
				left++;
			} else {
				right--;
			}
		}
	}
	return sums;
}
