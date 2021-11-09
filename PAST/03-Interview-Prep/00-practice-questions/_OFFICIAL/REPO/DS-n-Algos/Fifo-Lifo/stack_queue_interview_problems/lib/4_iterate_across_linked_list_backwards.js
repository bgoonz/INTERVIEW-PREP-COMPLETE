// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------
class Node {
  constructor( val ) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push( val ) {
      const newNode = new Node( val );
      if ( !this.length ) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
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
      this.top = removedNode.next;
    }
    this.length--;
    return removedNode.value;
  }
}

function iterateAcrossLinkedListBackwards( linkedList ) {
  // TODO: Implement the iterateAcrossLinkedListBackwards function here
  const stack = new Stack();
  let node = linkedList.head;
  let result = '';
  while ( node !== null ) {
    stack.push( node );
    node = node.next;
  }

  while ( stack.length > 0 ) {
    if ( stack.length > 1 ) {
      result += `${stack.pop().value} -> `;
    } else {
      result += stack.pop().value;
    }
  }
  return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
