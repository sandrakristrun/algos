// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	let sums = []
	calculateSums(root, 0, sums);
	return sums;
}
function calculateSums(node, runningSum, sums){
	if(!node) return;

	const newRunningSum = runningSum + node.value;
	if(!node.left && !node.right){
		sums.push(newRunningSum);
		return;
	}
	calculateSums(node.left, newRunningSum, sums);
	calculateSums(node.right, newRunningSum, sums)
}


