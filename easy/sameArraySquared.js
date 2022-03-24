

function sameSquared(arr1, arr2){
  let table = {};

  for(let num of arr1){
    if(!table[num]){
      table[num * num] = true
    }
  }
  console.log(table)

  for(let num of arr2){
    if(!(num in table)){
      return false;
    }
  }
  return true
}

console.log(sameSquared([1,2,3], [9,1,4]))
