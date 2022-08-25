class MyArray {
	constructor() {
		this.length = 0,
		this.data = {}
	}

	get(index) {
		return this.data[index];
	}

	push(element) {
		this.data[this.length] = element;
		this.length++;
		return this.length;
	}

	pop() {
		const deleted = this.data[this.length];
		delete this.data[this.length];
		this.length--;
		return deleted;
	}

	shiftItems(index) {
		for (let i = index; i < this.length-1; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
}