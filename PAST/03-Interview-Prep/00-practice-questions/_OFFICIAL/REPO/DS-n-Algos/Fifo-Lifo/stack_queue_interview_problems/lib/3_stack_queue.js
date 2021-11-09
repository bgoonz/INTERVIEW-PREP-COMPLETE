// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor( val ) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push( node ) {
    // const newNode = new Node(node);
    if ( !this.length ) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return ++this.length;
  }

  pop() {
    if ( !this.length ) return null;
    const removedNode = this.top;
    if ( this.length === 1 ) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return removedNode;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue( val ) {
      const newNode = new Node( val );
      if ( !this.length ) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.inStack.push( new Node( newNode.value ) );
    return ++this.length;
  }

  dequeue() {
    if ( !this.length ) return null;
    if ( this.length === 1 ) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    if ( this.outStack.length === 0 ) {
      while ( this.inStack.length > 0 ) {
        this.outStack.push( this.inStack.pop() );
      }
    }
    return this.outStack.pop();
  }

  size() {
    return this.outStack.length + this.inStack.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
