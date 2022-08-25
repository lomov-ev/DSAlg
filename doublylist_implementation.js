class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: 10,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
  	const array = [];
  	let currentNode = this.head;
  	while(currentNode !== null) {
  		array.push(currentNode.value);
  		currentNode = currentNode.next;
  	}
  	return array;
  }

  traverseToIndex(index) {
  	let counter = 0;
  	let currentNode = this.head;
  	while (counter !== index) {
  		currentNode = currentNode.next;
  		counter++;
  	}
  	return currentNode;
  }

  insert(index, value) {
  	if (index >= this.length) {return this.append(value)};
  	const newNode = new Node(value);
  	const leader = this.traverseToIndex(index-1);
  	const follower = leader.next;
  	leader.next = newNode;
    newNode.prev = leader;
  	newNode.next = follower;
    follower.prev = newNode;
  	this.length++;
  	return this.printList;
  }

  remove(index) {
  	const leader = this.traverseToIndex(index-1);
  	const unwantedNode = leader.next;
  	const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
  	this.length--;
  	return this.printList();
  }
}

let a = new LinkedList(10);
a.append(5);
a.prepend(19);
a.remove(2);

console.log(a);
