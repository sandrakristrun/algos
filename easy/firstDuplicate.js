function firstDuplicateValue(array) {
  // Write your code here.
	let minIdx = array.length;
	for(let i = 0; i < array.length -1; i++){
		for(let j = i + 1; j < array.length; j++){
			if(array[i] === array[j]){
				if(minIdx > j){
					minIdx = j
				}
			}
		}
	}
	return array[minIdx] || -1
}
