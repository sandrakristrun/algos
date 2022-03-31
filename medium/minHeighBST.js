function minHeightBst(array) {
  // Write your code here.

	return constructBST(array, null, 0, array.length - 1)

}

function constructBST(array, bst, startIdx, endIdx){
	if(endIdx < startIdx) return
	let mid = Math.floor((startIdx + endIdx)/2)
	let newNode = new BST(array[mid])
		if(bst === null){
			bst = newNode;
		} else {
			if(array[mid] < bst.value){
				bst.left = newNode;
				bst = bst.left
			} else {
				bst.right = newNode;
				bst = bst.right
			}
		}
		console.log(bst)
		constructBST(array, bst, startIdx, mid - 1)
		constructBST(array, bst, mid + 1, endIdx)
	return bst
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}


