class LinkedList {
  constructor(root = null) {
    this.root = root;
  }

  append(value) {
    let tmp = this.root;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    if (tmp.nextNode === null) {
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let tmp = this.root;
    this.root = new Node(value);
    this.root.nextNode = tmp;
  }

  size() {
    if (this.root === null) return 0;
    let count = 1;
    let tmp = this.root;
    while (tmp.nextNode !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  head() {
    return this.root;
  }

  tail() {
    let tmp = this.root;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.root;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  pop() {
    this.at(this.size() - 2).nextNode = null;
  }

  contains(value) {
    let tmp = this.root;
    while (tmp.nextNode !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.root;
    for (let i = 0; i < this.size(); i++) {
      if (tmp.value === value) {
        return i;
      }
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let tmp = this.root;
    let str = ``;
    while (tmp.nextNode !== null) {
      str += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    str += `( ${tmp.value} ) -> null`;
    return str;
  }

  insertAt(value, index) {
    let theRest = this.at(index + 1);
    this.at(index - 1).nextNode = new Node(value);
    this.at(index).nextNode = theRest;
  }

  removeAt(index) {
    if (index === 0) {
      this.root = this.at(index + 1);
    }
    let theRest = this.at(index + 1);
    this.at(index - 1).nextNode = theRest;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// TEST CASES
let list1 = new LinkedList();
let list2 = new LinkedList();
let node1 = new Node("test", null);
let node2 = new Node("test2", null);
let node3 = new Node("test3", null);
let node4 = new Node("test4", null);
list1.root = node1;
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
console.log(list1.toString());
