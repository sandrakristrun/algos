function nextGreaterElement(array) {
  // Write your code here.
	let output = []
	let max = Math.max(...array)
  for(let i = 0; i < array.length; i++){//i = 6
		let num = array[i]; //-1
		let j = (i + 1) % array.length //j = 7
		if(max === num){
			output.push(-1)
			j++
			continue;
		}
		while(num >= array[j]){
				j++;
				if(j === array.length){
					j = 0;
				}
			}

		output.push(array[j])//[5,6,6,6,7]
	}
	return output
}
