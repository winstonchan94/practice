var isSubtree = function(s, t) {
	var result = null;
	function Recur(s, t){

		if(s.val === t.val){
			result = result ? true:IsSame(s, t);
		}

		if(s.left !== null){
			Recur(s.left, t);
		}

		if(s.right !== null){
			Recur(s.right, t);
		}
	}

	function IsSame(q,r){
		let first = false;
		let second = false;
		if(q.left !== null && r.left !== null){
			if(q.left.val === r.left.val){
				first = IsSame(q.left, r.left);
			}
		}else if(q.left === null && r.left === null){
			first = true;
		}

		if(q.right !== null && r.right !== null){
			if(q.right.val === r.right.val){
				second = IsSame(q.right, r.right);
			}
		}else if(q.right === null && r.right === null){
			second = true;
		}

		return first && second;
	}

	Recur(s,t);
	return (result ? true : false)
