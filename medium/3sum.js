
function threeSum(arr){

  arr.sort((a,b)=> a-b)

  let sums = new Set()
  for(let i = 0; i < arr.length; i++){
      let num1 = arr[i]
      let left = i + 1
      let right = arr.length - 1
      while(right > left){
          let potentialSum = num1 + arr[left] + arr[right]
          if(potentialSum === 0){
              sums.add([num1 + arr[left] + arr[right]])
          } else if(potentialSum > 0){
              right--
          } else {
              left++
          }
      }
  }

  return Array.from(sums)


}
console.log(threeSum([-1,0,1,2,-1,-4]))
