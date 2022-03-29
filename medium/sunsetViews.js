function sunsetViews(buildings, direction) {
  // Write your code here.
	if(!buildings.length) return []
	let stack = []
	if(direction === 'WEST'){
		stack.push(0)
		for(let i = 1; i < buildings.length; i++){
			let building = buildings[i]
			if(buildings[i] > buildings[stack[stack.length - 1]]){
				stack.push(i)
			}
		}
	} else {
		stack.push(buildings.length - 1) //7
		for(let i = buildings.length - 2; i >= 0; i--){ //6
			let building = buildings[i] //3
			console.log(building, buildings[stack[stack.length -1]], stack)
			if(building > buildings[stack[stack.length - 1]]){ //3>2
				stack.push(i)
			}
		}
		stack.reverse()
	}
		console.log(stack)
  return stack;
}


