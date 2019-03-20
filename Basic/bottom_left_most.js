function findLeftDepth(root) {
	if (!root) {
	   return 0;
  }
  if (!root.left) {
		return 0;
  }

  let leftDepth = 0;

  if (root.left) {
  		leftDepth ++;
  	findLeftDepth(root.left) ;
  	} else if (root.right) {
  		leftDepth++;
  	findLeftDepth(root.right);
  }
    return leftDepth;
}
// okssss doing some stuff with depth first search somethingxdxdssssssss
function findRightDepth(root) {
	if (!root) {
	   return 0;
  }
  if (!root.left) {
		return 0;
  }

  let rightDepth = 0;

  if (root.right) {
  		rightDepth ++;
  	findRightDepth(root.right) ;
  } else if (root.left) {
  		rightDepth++;
  	findRightDepth(root.right);
  }
    return rightDepth;
}

function findLeftmost(root) {
	let left = findLeftDepth(root);
	let right = findRightDepth(root);

	if (!root.left && !root.right) {
		return root;
	}
  if (left >= right) {
  		findLeftmost(root.left);
  }  else {
  		findLeftmost(root.right);
  }
}
