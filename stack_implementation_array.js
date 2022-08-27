class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    if (this.isEmpty()) return [];
    return this.data[this.data.length-1];
  }
  push(value) {
    this.data.push(value);
    return this.data.length-1;
  }
  pop() {
    if (this.isEmpty()) return null;
  	const popped = this.data[this.data.length-1];
  	this.data.pop();
  	return popped;
  }
  isEmpty() {
  	return this.data.length === 0;
  }
}

let a = new Stack();
a.push(1);
a.push(2);