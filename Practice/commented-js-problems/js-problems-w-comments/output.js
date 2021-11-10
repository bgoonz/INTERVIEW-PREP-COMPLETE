/**
 * An asynchronously iterable queue class. Add values with enqueue()
 * and remove them with dequeue(). dequeue() returns a Promise, which
 * means that values can be dequeued before they are enqueued. The
 * class implements [Symbol.asyncIterator] and next() so that it can
 * be used with the for/await loop (which will not terminate until
 * the close() method is called.)
 */
class AsyncQueue {
  constructor() {
    // Values that have been queued but not dequeued yet are stored here
    this.values = [];
    // When Promises are dequeued before their corresponding values are
    // queued, the resolve methods for those Promises are stored here.
    this.resolvers = [];
    // Once closed, no more values can be enqueued, and no more unfulfilled
    // Promises returned.
    this.closed = false;
  }

  enqueue(value) {
    if (this.closed) {
      throw new Error("AsyncQueue closed");
    }
    if (this.resolvers.length > 0) {
      // If this value has already been promised, resolve that Promise
      const resolve = this.resolvers.shift();
      resolve(value);
    } else {
      // Otherwise, queue it up
      this.values.push(value);
    }
  }

  dequeue() {
    if (this.values.length > 0) {
      // If there is a queued value, return a resolved Promise for it
      const value = this.values.shift();
      return Promise.resolve(value);
    } else if (this.closed) {
      // If no queued values and we're closed, return a resolved
      // Promise for the "end-of-stream" marker
      return Promise.resolve(AsyncQueue.EOS);
    } else {
      // Otherwise, return an unresolved Promise,
      // queuing the resolver function for later use
      return new Promise((resolve) => {
        this.resolvers.push(resolve);
      });
    }
  }

  close() {
    // Once the queue is closed, no more values will be enqueued.
    // So resolve any pending Promises with the end-of-stream marker
    while (this.resolvers.length > 0) {
      this.resolvers.shift()(AsyncQueue.EOS);
    }
    this.closed = true;
  }

  // Define the method that makes this class asynchronously iterable
  [Symbol.asyncIterator]() {
    return this;
  }

  // Define the method that makes this an asynchronous iterator. The
  // dequeue() Promise resolves to a value or the EOS sentinel if we're
  // closed. Here, we need to return a Promise that resolves to an
  // iterator result object.
  next() {
    return this.dequeue().then((value) =>
      value === AsyncQueue.EOS
        ? { value: undefined, done: true }
        : { value: value, done: false }
    );
  }
}

// A sentinel value returned by dequeue() to mark "end of stream" when closed
AsyncQueue.EOS = Symbol("end-of-stream");

// Push events of the specified type on the specified document element
// onto an AsyncQueue object, and return the queue for use as an event stream
function eventStream(elt, type) {
  const q = new AsyncQueue(); // Create a queue
  elt.addEventListener(type, (e) => q.enqueue(e)); // Enqueue events
  return q;
}

async function handleKeys() {
  // Get a stream of keypress events and loop once for each one
  for await (const event of eventStream(document, "keypress")) {
    console.log(event.key);
  }
}

const BitSet = (function() { // Set BitSet to the return value of this function
    // Private implementation details here
    function isValid(set, n) { ... }
    function has(set, byte, bit) { ... }
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

    // The public API of the module is just the BitSet class, which we define
    // and return here. The class can use the private functions and constants
    // defined above, but they will be hidden from users of the class
    return class BitSet extends AbstractWritableSet {
        // ... implementation omitted ...
    };
}());

/**
 * Instances of this Complex class represent complex numbers.
 * Recall that a complex number is the sum of a real number and an
 * imaginary number and that the imaginary number i is the square root of -1.
 */
class Complex {
  // Once class field declarations are standardized, we could declare
  // private fields to hold the real and imaginary parts of a complex number
  // here, with code like this:
  //
  // #r = 0;
  // #i = 0;

  // This constructor function defines the instance fields r and i on every
  // instance it creates. These fields hold the real and imaginary parts of
  // the complex number: they are the state of the object.
  constructor(real, imaginary) {
    this.r = real; // This field holds the real part of the number.
    this.i = imaginary; // This field holds the imaginary part.
  }

  // Here are two instance methods for addition and multiplication
  // of complex numbers. If c and d are instances of this class, we
  // might write c.plus(d) or d.times(c)
  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }
  times(that) {
    return new Complex(
      this.r * that.r - this.i * that.i,
      this.r * that.i + this.i * that.r
    );
  }

  // And here are static variants of the complex arithmetic methods.
  // We could write Complex.sum(c,d) and Complex.product(c,d)
  static sum(c, d) {
    return c.plus(d);
  }
  static product(c, d) {
    return c.times(d);
  }

  // These are some instance methods that are defined as getters
  // so they're used like fields. The real and imaginary getters would
  // be useful if we were using private fields this.#r and this.#i
  get real() {
    return this.r;
  }
  get imaginary() {
    return this.i;
  }
  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  // Classes should almost always have a toString() method
  toString() {
    return `{${this.r},${this.i}}`;
  }

  // It is often useful to define a method for testing whether
  // two instances of your class represent the same value
  equals(that) {
    return that instanceof Complex && this.r === that.r && this.i === that.i;
  }

  // Once static fields are supported inside class bodies, we could
  // define a useful Complex.ZERO constant like this:
  // static ZERO = new Complex(0,0);
}

// Here are some class fields that hold useful predefined complex numbers.
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

let a = new EZArray();
a instanceof EZArray; // => true: a is subclass instance
a instanceof Array; // => true: a is also a superclass instance.
a.push(1, 2, 3, 4); // a.length == 4; we can use inherited methods
a.pop(); // => 4: another inherited method
a.first; // => 1: first getter defined by subclass
a.last; // => 3: last getter defined by subclass
a[1]; // => 2: regular array access syntax still works.
Array.isArray(a); // => true: subclass instance really is an array
EZArray.isArray(a); // => true: subclass inherits static methods, too!

// EZArray inherits instance methods because EZArray.prototype
// inherits from Array.prototype
Array.prototype.isPrototypeOf(EZArray.prototype); // => true

// And EZArray inherits static methods and properties because
// EZArray inherits from Array. This is a special feature of the
// extends keyword and is not possible before ES6.
Array.isPrototypeOf(EZArray); // => true

class Glob {
  constructor(glob) {
    this.glob = glob;

    // We implement glob matching using RegExp internally.
    // ? matches any one character except /, and * matches zero or more
    // of those characters. We use capturing groups around each.
    let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");

    // We use the u flag to get Unicode-aware matching.
    // Globs are intended to match entire strings, so we use the ^ and $
    // anchors and do not implement search() or matchAll() since they
    // are not useful with patterns like this.
    this.regexp = new RegExp(`^${regexpText}$`, "u");
  }

  toString() {
    return this.glob;
  }

  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

let pattern = new Glob("docs/*.txt");
"docs/js.txt".search(pattern); // => 0: matches at character 0
"docs/js.htm".search(pattern); // => -1: does not match
let match = "docs/js.txt".match(pattern);
match[0]; // => "docs/js.txt"
match[1]; // => "js"
match.index; // => 0
"docs/js.txt".replace(pattern, "web/$1.htm"); // => "web/js.htm"

/**
 * A Set-like class that keeps track of how many times a value has
 * been added. Call add() and remove() like you would for a Set, and
 * call count() to find out how many times a given value has been added.
 * The default iterator yields the values that have been added at least
 * once. Use entries() if you want to iterate [value, count] pairs.
 */
class Histogram {
  // To initialize, we just create a Map object to delegate to
  constructor() {
    this.map = new Map();
  }

  // For any given key, the count is the value in the Map, or zero
  // if the key does not appear in the Map.
  count(key) {
    return this.map.get(key) || 0;
  }

  // The Set-like method has() returns true if the count is non-zero
  has(key) {
    return this.count(key) > 0;
  }

  // The size of the histogram is just the number of entries in the Map.
  get size() {
    return this.map.size;
  }

  // To add a key, just increment its count in the Map.
  add(key) {
    this.map.set(key, this.count(key) + 1);
  }

  // Deleting a key is a little trickier because we have to delete
  // the key from the Map if the count goes back down to zero.
  delete(key) {
    let count = this.count(key);
    if (count === 1) {
      this.map.delete(key);
    } else if (count > 1) {
      this.map.set(key, count - 1);
    }
  }

  // Iterating a Histogram just returns the keys stored in it
  [Symbol.iterator]() {
    return this.map.keys();
  }

  // These other iterator methods just delegate to the Map object
  keys() {
    return this.map.keys();
  }
  values() {
    return this.map.values();
  }
  entries() {
    return this.map.entries();
  }
}

/*
 * A Range object represents a range of numbers {x: from <= x <= to}
 * Range defines a has() method for testing whether a given number is a member
 * of the range. Range is iterable and iterates all integers within the range.
 */
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // Make a Range act like a Set of numbers
  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }

  // Return string representation of the range using set notation
  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
  }

  // Make a Range iterable by returning an iterator object.
  // Note that the name of this method is a special symbol, not a string.
  [Symbol.iterator]() {
    // Each iterator instance must iterate the range independently of
    // others. So we need a state variable to track our location in the
    // iteration. We start at the first integer >= from.
    let next = Math.ceil(this.from); // This is the next value we return
    let last = this.to; // We won't return anything > this
    return {
      // This is the iterator object
      // This next() method is what makes this an iterator object.
      // It must return an iterator result object.
      next() {
        return next <= last // If we haven't returned last value yet
          ? { value: next++ } // return next value and increment it
          : { done: true }; // otherwise indicate that we're done.
      },

      // As a convenience, we make the iterator itself iterable.
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

for (let x of new Range(1, 10)) console.log(x); // Logs numbers 1 to 10
[...new Range(-2, 2)]; // => [-2, -1, 0, 1, 2]

/**
 * The AbstractSet class defines a single abstract method, has().
 */
class AbstractSet {
  // Throw an error here so that subclasses are forced
  // to define their own working version of this method.
  has(x) {
    throw new Error("Abstract method");
  }
}

/**
 * NotSet is a concrete subclass of AbstractSet.
 * The members of this set are all values that are not members of some
 * other set. Because it is defined in terms of another set it is not
 * writable, and because it has infinite members, it is not enumerable.
 * All we can do with it is test for membership and convert it to a
 * string using mathematical notation.
 */
class NotSet extends AbstractSet {
  constructor(set) {
    super();
    this.set = set;
  }

  // Our implementation of the abstract method we inherited
  has(x) {
    return !this.set.has(x);
  }
  // And we also override this Object method
  toString() {
    return `{ x| x ∉ ${this.set.toString()} }`;
  }
}

/**
 * Range set is a concrete subclass of AbstractSet. Its members are
 * all values that are between the from and to bounds, inclusive.
 * Since its members can be floating point numbers, it is not
 * enumerable and does not have a meaningful size.
 */
class RangeSet extends AbstractSet {
  constructor(from, to) {
    super();
    this.from = from;
    this.to = to;
  }

  has(x) {
    return x >= this.from && x <= this.to;
  }
  toString() {
    return `{ x| ${this.from} ≤ x ≤ ${this.to} }`;
  }
}

/*
 * AbstractEnumerableSet is an abstract subclass of AbstractSet.  It defines
 * an abstract getter that returns the size of the set and also defines an
 * abstract iterator. And it then implements concrete isEmpty(), toString(),
 * and equals() methods on top of those. Subclasses that implement the
 * iterator, the size getter, and the has() method get these concrete
 * methods for free.
 */
class AbstractEnumerableSet extends AbstractSet {
  get size() {
    throw new Error("Abstract method");
  }
  [Symbol.iterator]() {
    throw new Error("Abstract method");
  }

  isEmpty() {
    return this.size === 0;
  }
  toString() {
    return `{${Array.from(this).join(", ")}}`;
  }
  equals(set) {
    // If the other set is not also Enumerable, it isn't equal to this one
    if (!(set instanceof AbstractEnumerableSet)) return false;

    // If they don't have the same size, they're not equal
    if (this.size !== set.size) return false;

    // Loop through the elements of this set
    for (let element of this) {
      // If an element isn't in the other set, they aren't equal
      if (!set.has(element)) return false;
    }

    // The elements matched, so the sets are equal
    return true;
  }
}

/*
 * SingletonSet is a concrete subclass of AbstractEnumerableSet.
 * A singleton set is a read-only set with a single member.
 */
class SingletonSet extends AbstractEnumerableSet {
  constructor(member) {
    super();
    this.member = member;
  }

  // We implement these three methods, and inherit isEmpty, equals()
  // and toString() implementations based on these methods.
  has(x) {
    return x === this.member;
  }
  get size() {
    return 1;
  }
  *[Symbol.iterator]() {
    yield this.member;
  }
}

/*
 * AbstractWritableSet is an abstract subclass of AbstractEnumerableSet.
 * It defines the abstract methods insert() and remove() that insert and
 * remove individual elements from the set, and then implements concrete
 * add(), subtract(), and intersect() methods on top of those. Note that
 * our API diverges here from the standard JavaScript Set class.
 */
class AbstractWritableSet extends AbstractEnumerableSet {
  insert(x) {
    throw new Error("Abstract method");
  }
  remove(x) {
    throw new Error("Abstract method");
  }

  add(set) {
    for (let element of set) {
      this.insert(element);
    }
  }

  subtract(set) {
    for (let element of set) {
      this.remove(element);
    }
  }

  intersect(set) {
    for (let element of this) {
      if (!set.has(element)) {
        this.remove(element);
      }
    }
  }
}

/**
 * A BitSet is a concrete subclass of AbstractWritableSet with a
 * very efficient fixed-size set implementation for sets whose
 * elements are non-negative integers less than some maximum size.
 */
class BitSet extends AbstractWritableSet {
  constructor(max) {
    super();
    this.max = max; // The maximum integer we can store.
    this.n = 0; // How many integers are in the set
    this.numBytes = Math.floor(max / 8) + 1; // How many bytes we need
    this.data = new Uint8Array(this.numBytes); // The bytes
  }

  // Internal method to check if a value is a legal member of this set
  _valid(x) {
    return Number.isInteger(x) && x >= 0 && x <= this.max;
  }

  // Tests whether the specified bit of the specified byte of our
  // data array is set or not. Returns true or false.
  _has(byte, bit) {
    return (this.data[byte] & BitSet.bits[bit]) !== 0;
  }

  // Is the value x in this BitSet?
  has(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      return this._has(byte, bit);
    } else {
      return false;
    }
  }

  // Insert the value x into the BitSet
  insert(x) {
    if (this._valid(x)) {
      // If the value is valid
      let byte = Math.floor(x / 8); // convert to byte and bit
      let bit = x % 8;
      if (!this._has(byte, bit)) {
        // If that bit is not set yet
        this.data[byte] |= BitSet.bits[bit]; // then set it
        this.n++; // and increment set size
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }

  remove(x) {
    if (this._valid(x)) {
      // If the value is valid
      let byte = Math.floor(x / 8); // compute the byte and bit
      let bit = x % 8;
      if (this._has(byte, bit)) {
        // If that bit is already set
        this.data[byte] &= BitSet.masks[bit]; // then unset it
        this.n--; // and decrement size
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }

  // A getter to return the size of the set
  get size() {
    return this.n;
  }

  // Iterate the set by just checking each bit in turn.
  // (We could be a lot more clever and optimize this substantially)
  *[Symbol.iterator]() {
    for (let i = 0; i <= this.max; i++) {
      if (this.has(i)) {
        yield i;
      }
    }
  }
}

// Some pre-computed values used by the has(), insert() and remove() methods
BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

// This is the constructor function for our subclass
function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);

// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;

// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function () {
  return `(${this.from}... +${this.to - this.from})`;
};

/**
 * TOC.js: create a table of contents for a document.
 *
 * This script runs when the DOMContentLoaded event is fired and
 * automatically generates a table of contents for the document.
 * It does not define any global symbols so it should not conflict
 * with other scripts.
 *
 * When this script runs, it first looks for a document element with
 * an id of "TOC". If there is no such element it creates one at the
 * start of the document. Next, the function finds all <h2> through
 * <h6> tags, treats them as section titles, and creates a table of
 * contents within the TOC element. The function adds section numbers
 * to each section heading and wraps the headings in named anchors so
 * that the TOC can link to them. The generated anchors have names
 * that begin with "TOC", so you should avoid this prefix in your own
 * HTML.
 *
 * The entries in the generated TOC can be styled with CSS. All
 * entries have a class "TOCEntry". Entries also have a class that
 * corresponds to the level of the section heading. <h1> tags generate
 * entries of class "TOCLevel1", <h2> tags generate entries of class
 * "TOCLevel2", and so on. Section numbers inserted into headings have
 * class "TOCSectNum".
 *
 * You might use this script with a stylesheet like this:
 *
 *   #TOC { border: solid black 1px; margin: 10px; padding: 10px; }
 *   .TOCEntry { margin: 5px 0px; }
 *   .TOCEntry a { text-decoration: none; }
 *   .TOCLevel1 { font-size: 16pt; font-weight: bold; }
 *   .TOCLevel2 { font-size: 14pt; margin-left: .25in; }
 *   .TOCLevel3 { font-size: 12pt; margin-left: .5in; }
 *   .TOCSectNum:after { content: ": "; }
 *
 * To hide the section numbers, use this:
 *
 *   .TOCSectNum { display: none }
 **/
document.addEventListener("DOMContentLoaded", () => {
  // Find the TOC container element.
  // If there isn't one, create one at the start of the document.
  let toc = document.querySelector("#TOC");
  if (!toc) {
    toc = document.createElement("div");
    toc.id = "TOC";
    document.body.prepend(toc);
  }

  // Find all section heading elements. We're assuming here that the
  // document title uses <h1> and that sections within the document are
  // marked with <h2> through <h6>.
  let headings = document.querySelectorAll("h2,h3,h4,h5,h6");

  // Initialize an array that keeps track of section numbers.
  let sectionNumbers = [0, 0, 0, 0, 0];

  // Now loop through the section header elements we found.
  for (let heading of headings) {
    // Skip the heading if it is inside the TOC container.
    if (heading.parentNode === toc) {
      continue;
    }

    // Figure out what level heading it is.
    // Subtract 1 because <h2> is a level-1 heading.
    let level = parseInt(heading.tagName.charAt(1)) - 1;

    // Increment the section number for this heading level
    // and reset all lower heading level numbers to zero.
    sectionNumbers[level - 1]++;
    for (let i = level; i < sectionNumbers.length; i++) {
      sectionNumbers[i] = 0;
    }

    // Now combine section numbers for all heading levels
    // to produce a section number like 2.3.1.
    let sectionNumber = sectionNumbers.slice(0, level).join(".");

    // Add the section number to the section header title.
    // We place the number in a <span> to make it styleable.
    let span = document.createElement("span");
    span.className = "TOCSectNum";
    span.textContent = sectionNumber;
    heading.prepend(span);

    // Wrap the heading in a named anchor so we can link to it.
    let anchor = document.createElement("a");
    let fragmentName = `TOC${sectionNumber}`;
    anchor.name = fragmentName;
    heading.before(anchor); // Insert anchor before heading
    anchor.append(heading); // and move heading inside anchor

    // Now create a link to this section.
    let link = document.createElement("a");
    link.href = `#${fragmentName}`; // Link destination

    // Copy the heading text into the link. This is a safe use of
    // innerHTML because we are not inserting any untrusted strings.
    link.innerHTML = heading.innerHTML;

    // Place the link in a div that is styleable based on the level.
    let entry = document.createElement("div");
    entry.classList.add("TOCEntry", `TOCLevel${level}`);
    entry.append(link);

    // And add the div to the TOC container.
    toc.append(entry);
  }
});

class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    // If entries are specified, check their types
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }

    // Initialize the superclass with the (type-checked) initial entries
    super(entries);

    // And then initialize this subclass by storing the types
    this.keyType = keyType;
    this.valueType = valueType;
  }

  // Now redefine the set() method to add type checking for any
  // new entries added to the map.
  set(key, value) {
    // Throw an error if the key or value are of the wrong type
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    // If the types are correct, we invoke the superclass's version of
    // the set() method, to actually add the entry to the map. And we
    // return whatever the superclass method returns.
    return super.set(key, value);
  }
}

// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.
function addPrivateProperty(o, name, predicate) {
  let value; // This is the property value

  // The getter method simply returns the value.
  o[`get${name}`] = () => {
    return value;
  };

  // The setter method stores the value or throws an exception if
  // the predicate rejects the value.
  o[`set${name}`] = (v) => {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`);
    } else {
      value = v;
    }
  };
}

// The following code demonstrates the addPrivateProperty() method.
let o = {}; // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", (x) => typeof x === "string");

o.setName("Frank"); // Set the property value
o.getName(); // => "Frank"
o.setName(0); // !TypeError: try to set a value of the wrong type

function arraycopy({
  from,
  to = from,
  n = from.length,
  fromIndex = 0,
  toIndex = 0,
}) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}
let a = [1, 2, 3, 4, 5];
let b = [9, 8, 7, 6, 5];
arraycopy({ from: a, n: 3, to: b, toIndex: 4 }); // => [9,8,7,6,1,2,3,5]

/*
 * Define a new Object.assignDescriptors() function that works like
 * Object.assign() except that it copies property descriptors from
 * source objects into the target object instead of just copying
 * property values. This function copies all own properties, both
 * enumerable and non-enumerable. And because it copies descriptors,
 * it copies getter functions from source objects and overwrites setter
 * functions in the target object rather than invoking those getters and
 * setters.
 *
 * Object.assignDescriptors() propagates any TypeErrors thrown by
 * Object.defineProperty(). This can occur if the target object is sealed
 * or frozen or if any of the source properties try to change an existing
 * non-configurable property on the target object.
 *
 * Note that the assignDescriptors property is added to Object with
 * Object.defineProperty() so that the new function can be created as
 * a non-enumerable property like Object.assign().
 */
Object.defineProperty(Object, "assignDescriptors", {
  // Match the attributes of Object.assign()
  writable: true,
  enumerable: false,
  configurable: true,
  // The function that is the value of the assignDescriptors property.
  value(target, ...sources) {
    for (let source of sources) {
      for (let name of Object.getOwnPropertyNames(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }

      for (let symbol of Object.getOwnPropertySymbols(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, symbol);
        Object.defineProperty(target, symbol, desc);
      }
    }
    return target;
  },
});

// Read lines of text from the source stream, and write any lines
// that match the specified pattern to the destination stream.
async function grep(source, destination, pattern, encoding = "utf8") {
  // Set up the source stream for reading strings, not Buffers
  source.setEncoding(encoding);

  // Set an error handler on the destination stream in case standard
  // output closes unexpectedly (when piping output to `head`, e.g.)
  destination.on("error", (err) => process.exit());

  // The chunks we read are unlikely to end with a newline, so each will
  // probably have a partial line at the end. Track that here
  let incompleteLine = "";

  // Use a for/await loop to asynchronously read chunks from the input stream
  for await (let chunk of source) {
    // Split the end of the last chunk plus this one into lines
    let lines = (incompleteLine + chunk).split("\n");
    // The last line is incomplete
    incompleteLine = lines.pop();
    // Now loop through the lines and write any matches to the destination
    for (let line of lines) {
      if (pattern.test(line)) {
        destination.write(`${line}\n`, encoding);
      }
    }
  }
  // Finally, check for a match on any trailing text.
  if (pattern.test(incompleteLine)) {
    destination.write(`${incompleteLine}\n`, encoding);
  }
}

let pattern = new RegExp(process.argv[2]); // Get a RegExp from command line.
grep(process.stdin, process.stdout, pattern) // Call the async grep() function.
  .catch((err) => {
    // Handle asynchronous exceptions.
    console.error(err);
    process.exit();
  });

const threads = require("worker_threads");

if (threads.isMainThread) {
  let sharedBuffer = new SharedArrayBuffer(4);
  let sharedArray = new Int32Array(sharedBuffer);
  let worker = new threads.Worker(__filename, { workerData: sharedArray });

  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      Atomics.add(sharedArray, 0, 1); // Threadsafe atomic increment
    }

    worker.on("message", (message) => {
      // When both threads are done, use a threadsafe function
      // to read the shared array and confirm that it has the
      // expected value of 20,000,000.
      console.log(Atomics.load(sharedArray, 0));
    });
  });
} else {
  let sharedArray = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) {
    Atomics.add(sharedArray, 0, 1); // Threadsafe atomic increment
  }
  threads.parentPort.postMessage("done");
}

/**
 * This Node program reads text from standard input, computes the frequency
 * of each letter in that text, and displays a histogram of the most
 * frequently used characters. It requires Node 12 or higher to run.
 *
 * In a Unix-type environment you can invoke the program like this:
 *    node charfreq.js < corpus.txt
 */

// This class extends Map so that the get() method returns the specified
// value instead of null when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }

  get(key) {
    if (this.has(key)) {
      // If the key is already in the map
      return super.get(key); // return its value from superclass.
    } else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}

// This class computes and displays letter frequency histograms
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // Map from letters to counts
    this.totalLetters = 0; // How many letters in all
  }

  // This function updates the histogram with the letters of text.
  add(text) {
    // Remove whitespace from the text, and convert to upper case
    text = text.replace(/\s/g, "").toUpperCase();

    // Now loop through the characters of the text
    for (let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count + 1); // Increment it
      this.totalLetters++;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key,value] arrays
    let entries = [...this.letterCounts];

    // Sort the array by count, then alphabetically
    entries.sort((a, b) => {
      // A function to define sort order.
      if (a[1] === b[1]) {
        // If the counts are the same
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
      } else {
        // If the counts differ
        return b[1] - a[1]; // sort by largest count.
      }
    });

    // Convert the counts to percentages
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    // Drop any entries less than 1%
    entries = entries.filter((entry) => entry[1] >= 1);

    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // And return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}

// This async (Promise-returning) function creates a Histogram object,
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});

// This is server-side JavaScript, intended to be run with NodeJS.
// It implements a very simple, completely anonymous chat room.
// POST new messages to /chat, or GET a text/event-stream of messages
// from the same URL. Making a GET request to / returns a simple HTML file
// that contains the client-side chat UI.
const http = require("http");
const fs = require("fs");
const url = require("url");

// The HTML file for the chat client. Used below.
const clientHTML = fs.readFileSync("chatClient.html");

// An array of ServerResponse objects that we're going to send events to
let clients = [];

// Create a new server, and listen on port 8080.
// Connect to http://localhost:8080/ to use it.
let server = new http.Server();
server.listen(8080);

// When the server gets a new request, run this function
server.on("request", (request, response) => {
  // Parse the requested URL
  let pathname = url.parse(request.url).pathname;

  // If the request was for "/", send the client-side chat UI.
  if (pathname === "/") {
    // A request for the chat UI
    response.writeHead(200, { "Content-Type": "text/html" }).end(clientHTML);
  }
  // Otherwise send a 404 error for any path other than "/chat" or for
  // any method other than "GET" and "POST"
  else if (
    pathname !== "/chat" ||
    (request.method !== "GET" && request.method !== "POST")
  ) {
    response.writeHead(404).end();
  }
  // If the /chat request was a GET, then a client is connecting.
  else if (request.method === "GET") {
    acceptNewClient(request, response);
  }
  // Otherwise the /chat request is a POST of a new message
  else {
    broadcastNewMessage(request, response);
  }
});

// This handles GET requests for the /chat endpoint which are generated when
// the client creates a new EventSource object (or when the EventSource
// reconnects automatically).
function acceptNewClient(request, response) {
  // Remember the response object so we can send future messages to it
  clients.push(response);

  // If the client closes the connection, remove the corresponding
  // response object from the array of active clients
  request.connection.on("end", () => {
    clients.splice(clients.indexOf(response), 1);
    response.end();
  });

  // Set headers and send an initial chat event to just this one client
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });
  response.write("event: chat\ndata: Connected\n\n");

  // Note that we intentionally do not call response.end() here.
  // Keeping the connection open is what makes Server-Sent Events work.
}

// This function is called in response to POST requests to the /chat endpoint
// which clients send when users type a new message.
async function broadcastNewMessage(request, response) {
  // First, read the body of the request to get the user's message
  request.setEncoding("utf8");
  let body = "";
  for await (let chunk of request) {
    body += chunk;
  }

  // Once we've read the body send an empty response and close the connection
  response.writeHead(200).end();

  // Format the message in text/event-stream format, prefixing each
  // line with "data: "
  let message = "data: " + body.replace("\n", "\ndata: ");

  // Give the message data a prefix that defines it as a "chat" event
  // and give it a double newline suffix that marks the end of the event.
  let event = `event: chat\n${message}\n\n`;

  // Now send this event to all listening clients
  clients.forEach((client) => client.write(event));
}

// Wait for messages from our parent process
process.on("message", (message) => {
  // When we receive one, do a calculation and send the result
  // back to the parent.
  process.send({ hypotenuse: Math.hypot(message.x, message.y) });
});

function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

classof(null); // => "Null"
classof(undefined); // => "Undefined"
classof(1); // => "Number"
classof(10n ** 100n); // => "BigInt"
classof(""); // => "String"
classof(false); // => "Boolean"
classof(Symbol()); // => "Symbol"
classof({}); // => "Object"
classof([]); // => "Array"
classof(/./); // => "RegExp"
classof(() => {}); // => "Function"
classof(new Map()); // => "Map"
classof(new Set()); // => "Set"
classof(new Date()); // => "Date"

class Range {
  get [Symbol.toStringTag]() {
    return "Range";
  }
  // the rest of this class is omitted here
}
let r = new Range(1, 10);
Object.prototype.toString.call(r); // => "[object Range]"
classof(r); // => "Range"

// Define some drawing attributes
c.font = "bold 60pt sans-serif"; // Big font
c.lineWidth = 2; // Narrow lines
c.strokeStyle = "#000"; // Black lines

// Outline a rectangle and some text
c.strokeRect(175, 25, 50, 325); // A vertical stripe down the middle
c.strokeText("<canvas>", 15, 330); // Note strokeText() instead of fillText()

// Define a complex path with an interior that is outside.
polygon(c, 3, 200, 225, 200); // Large triangle
polygon(c, 3, 200, 225, 100, 0, true); // Smaller reverse triangle inside

// Make that path the clipping region.
c.clip();

// Stroke the path with a 5 pixel line, entirely inside the clipping region.
c.lineWidth = 10; // Half of this 10 pixel line will be clipped away
c.stroke();

// Fill the parts of the rectangle and text that are inside the clipping region
c.fillStyle = "#aaa"; // Light gray
c.fillRect(175, 25, 50, 325); // Fill the vertical stripe
c.fillStyle = "#888"; // Darker gray
c.fillText("<canvas>", 15, 330); // Fill the text

(function updateClock() {
  // Update the SVG clock graphic to show current time
  let now = new Date(); // Current time
  let sec = now.getSeconds(); // Seconds
  let min = now.getMinutes() + sec / 60; // Fractional minutes
  let hour = (now.getHours() % 12) + min / 60; // Fractional hours
  let minangle = min * 6; // 6 degrees per minute
  let hourangle = hour * 30; // 30 degrees per hour

  // Get SVG elements for the hands of the clock
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  // Set an SVG attribute on them to move them around the clock face
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  // Run this function again in 10 seconds
  setTimeout(updateClock, 10000);
})(); // Note immediate invocation of the function here.

// A Promise-based wrapper around setTimeout() that we can use await with.
// Returns a Promise that fulfills in the specified number of milliseconds
function elapsedTime(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval.
async function* clock(interval, max = Infinity) {
  for (let count = 1; count <= max; count++) {
    // regular for loop
    await elapsedTime(interval); // wait for time to pass
    yield count; // yield the counter
  }
}

// A test function that uses the async generator with for/await
async function test() {
  // Async so we can use for/await
  for await (let tick of clock(300, 100)) {
    // Loop 100 times every 300ms
    console.log(tick);
  }
}

function clock(interval, max = Infinity) {
  // A Promise-ified version of setTimeout that we can use await with.
  // Note that this takes an absolute time instead of an interval.
  function until(time) {
    return new Promise((resolve) => setTimeout(resolve, time - Date.now()));
  }

  let startTime = Date.now(); // Remember when we started
  let count = 0; // Remember which iteration we're on

  // Return an asynchronously iterable object
  return {
    async next() {
      // The next() method makes this an iterator
      if (++count > max) {
        // Are we done?
        return { done: true }; // Iteration result indicating done
      }
      // Figure out when the next iteration should begin,
      let targetTime = startTime + count * interval;
      // wait until that time,
      await until(targetTime);
      // and return the count value in an iteration result object.
      return { value: count };
    },
    // This method means that this iterator object is also an iterable.
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
  return function (...args) {
    // We use call for f because we're passing a single value and
    // apply for g because we're passing an array of values.
    return f.call(this, g.apply(this, args));
  };
}

const sum = (x, y) => x + y;
const square = (x) => x * x;
compose(square, sum)(2, 3); // => 25; the square of the sum

// This function writes the specified chunk to the specified stream and
// returns a Promise that will be fulfilled when it is OK to write again.
// Because it returns a Promise, it can be used with await.
function write(stream, chunk) {
  // Write the specified chunk to the specified stream
  let hasMoreRoom = stream.write(chunk);

  if (hasMoreRoom) {
    // If buffer is not full, return
    return Promise.resolve(null); // an already resolved Promise object
  } else {
    return new Promise((resolve) => {
      // Otherwise, return a Promise that
      stream.once("drain", resolve); // resolves on the drain event.
    });
  }
}

// Copy data from the source stream to the destination stream
// respecting backpressure from the destination stream.
// This is much like calling source.pipe(destination).
async function copy(source, destination) {
  // Set an error handler on the destination stream in case standard
  // output closes unexpectedly (when piping output to `head`, e.g.)
  destination.on("error", (err) => process.exit());

  // Use a for/await loop to asynchronously read chunks from the input stream
  for await (let chunk of source) {
    // Write the chunk and wait until there is more room in the buffer.
    await write(destination, chunk);
  }
}

// Copy standard input to standard output
copy(process.stdin, process.stdout);

const fs = require("fs");

// A streaming file copy function, using "flowing mode".
// Copies the contents of the named source file to the named destination file.
// On success, invokes the callback with a null argument. On error,
// invokes the callback with an Error object.
function copyFile(sourceFilename, destinationFilename, callback) {
  let input = fs.createReadStream(sourceFilename);
  let output = fs.createWriteStream(destinationFilename);

  input.on("data", (chunk) => {
    // When we get new data,
    let hasRoom = output.write(chunk); // write it to the output stream.
    if (!hasRoom) {
      // If the output stream is full
      input.pause(); // then pause the input stream.
    }
  });
  input.on("end", () => {
    // When we reach the end of input,
    output.end(); // tell the output stream to end.
  });
  input.on("error", (err) => {
    // If we get an error on the input,
    callback(err); // call the callback with the error
    process.exit(); // and quit.
  });

  output.on("drain", () => {
    // When the output is no longer full,
    input.resume(); // resume data events on the input
  });
  output.on("error", (err) => {
    // If we get an error on the output,
    callback(err); // call the callback with the error
    process.exit(); // and quit.
  });
  output.on("finish", () => {
    // When output is fully written
    callback(null); // call the callback with no error.
  });
}

// Here's a simple command-line utility to copy files
let from = process.argv[2],
  to = process.argv[3];
console.log(`Copying file ${from} to ${to}...`);
copyFile(from, to, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done.");
  }
});

function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}

let c = counter(),
  d = counter(); // Create two counters
c.count(); // => 0
d.count(); // => 0: they count independently
c.reset(); // reset() and count() methods share state
c.count(); // => 0: because we reset c
d.count(); // => 1: d was not reset

function counter(n) {
  // Function argument n is the private variable
  return {
    // Property getter method returns and increments private counter var.
    get count() {
      return n++;
    },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    },
  };
}

let c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
c.count = 2000; // !Error: count can only be set to a larger value

// A utility function to convert angles from degrees to radians
function rads(x) {
  return (Math.PI * x) / 180;
}

// Get the context object of the document's canvas element
let c = document.querySelector("canvas").getContext("2d");

// Define some graphics attributes and draw the curves
c.fillStyle = "#aaa"; // Gray fills
c.lineWidth = 2; // 2-pixel black (by default) lines

// Draw a circle.
// There is no current point, so draw just the circle with no straight
// line from the current point to the start of the circle.
c.beginPath();
c.arc(
  75,
  100,
  50, // Center at (75,100), radius 50
  0,
  rads(360),
  false
); // Go clockwise from 0 to 360 degrees
c.fill(); // Fill the circle
c.stroke(); // Stroke its outline.

// Now draw an ellipse in the same way
c.beginPath(); // Start new path not connected to the circle
c.ellipse(
  200,
  100,
  50,
  35,
  rads(15), // Center, radii, and rotation
  0,
  rads(360),
  false
); // Start angle, end angle, direction

// Draw a wedge. Angles are measured clockwise from the positive x axis.
// Note that arc() adds a line from the current point to the arc start.
c.moveTo(325, 100); // Start at the center of the circle.
c.arc(
  325,
  100,
  50, // Circle center and radius
  rads(-60),
  rads(0), // Start at angle -60 and go to angle 0
  true
); // counterclockwise
c.closePath(); // Add radius back to the center of the circle

// Similar wedge, offset a bit, and in the opposite direction
c.moveTo(340, 92);
c.arc(340, 92, 42, rads(-60), rads(0), false);
c.closePath();

// Use arcTo() for rounded corners. Here we draw a square with
// upper left corner at (400,50) and corners of varying radii.
c.moveTo(450, 50); // Begin in the middle of the top edge.
c.arcTo(500, 50, 500, 150, 30); // Add part of top edge and upper right corner.
c.arcTo(500, 150, 400, 150, 20); // Add right edge and lower right corner.
c.arcTo(400, 150, 400, 50, 10); // Add bottom edge and lower left corner.
c.arcTo(400, 50, 500, 50, 0); // Add left edge and upper left corner.
c.closePath(); // Close path to add the rest of the top edge.

// Quadratic Bezier curve: one control point
c.moveTo(525, 125); // Begin here
c.quadraticCurveTo(550, 75, 625, 125); // Draw a curve to (625, 125)
c.fillRect(550 - 3, 75 - 3, 6, 6); // Mark the control point (550,75)

// Cubic Bezier curve
c.moveTo(625, 100); // Start at (625, 100)
c.bezierCurveTo(645, 70, 705, 130, 725, 100); // Curve to (725, 100)
c.fillRect(645 - 3, 70 - 3, 6, 6); // Mark control points
c.fillRect(705 - 3, 130 - 3, 6, 6);

// Finally, fill the curves and stroke their outlines.
c.fill();
c.stroke();

// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
let [x, y] = toCartesian(r, theta); // [x, y] == [1.0, 1,0]

// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    // Positive integers only
    if (!(n in factorial)) {
      // If no cached result
      factorial[n] = n * factorial(n - 1); // Compute and cache it
    }
    return factorial[n]; // Return the cached result
  } else {
    return NaN; // If input was bad
  }
}
factorial[1] = 1; // Initialize the cache to hold this base case.
factorial(6); // => 720
factorial[5]; // => 120; the call above caches this value

function fetchSequentially(urls) {
  // We'll store the URL bodies here as we fetch them
  const bodies = [];

  // Here's a Promise-returning function that fetches one body
  function fetchOne(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((body) => {
        // We save the body to the array, and we're purposely
        // omitting a return value here (returning undefined)
        bodies.push(body);
      });
  }

  // Start with a Promise that will fulfill right away (with value undefined)
  let p = Promise.resolve(undefined);

  // Now loop through the desired URLs, building a Promise chain
  // of arbitrary length, fetching one URL at each stage of the chain
  for (url of urls) {
    p = p.then(() => fetchOne(url));
  }

  // When the last Promise in that chain is fulfilled, then the
  // bodies array is ready. So let's return a Promise for that
  // bodies array. Note that we don't include any error handlers:
  // we want to allow errors to propagate to the caller.
  return p.then(() => bodies);
}

fetch("/api/users/current") // Make an HTTP (or HTTPS) GET request.
  .then((response) => {
    // When we get a response, first check it
    if (
      response.ok && // for a success code and the expected type.
      response.headers.get("Content-Type") === "application/json"
    ) {
      return response.json(); // Return a Promise for the body.
    } else {
      throw new Error( // Or throw an error.
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .then((currentUser) => {
    // When the response.json() Promise resolves
    displayUserInfo(currentUser); // do something with the parsed body.
  })
  .catch((error) => {
    // Or if anything went wrong, just log the error.
    // If the user's browser is offline, fetch() itself will reject.
    // If the server returns a bad response then we throw an error above.
    console.log("Error while fetching current user:", error);
  });

// This function is like fetch(), but it adds support for a timeout
// property in the options object and aborts the fetch if it is not complete
// within the number of milliseconds specified by that property.
function fetchWithTimeout(url, options = {}) {
  if (options.timeout) {
    // If the timeout property exists and is nonzero
    let controller = new AbortController(); // Create a controller
    options.signal = controller.signal; // Set the signal property
    // Start a timer that will send the abort signal after the specified
    // number of milliseconds have passed. Note that we never cancel
    // this timer. Calling abort() after the fetch is complete has
    // no effect.
    setTimeout(() => {
      controller.abort();
    }, options.timeout);
  }
  // Now just perform a normal fetch
  return fetch(url, options);
}

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

// Return an iterable object that filters the specified iterable,
// iterating only those elements for which the predicate returns true
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    // This object is both iterator and iterable
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}

// Filter a range so we're left with only even numbers
[...filter(new Range(1, 10), (x) => x % 2 === 0)]; // => [2,4,6,8,10]

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
  let results = [], // The array of indexes we'll return
    len = a.length, // The length of the array to be searched
    pos = 0; // The position to search from
  while (pos < len) {
    // While more elements to search...
    pos = a.indexOf(x, pos); // Search
    if (pos === -1) break; // If nothing found, we're done.
    results.push(pos); // Otherwise, store index in array
    pos = pos + 1; // And start next search at next element
  }
  return results; // Return array of indexes
}

// Return the document's cookies as a Map object.
// Assume that cookie values are encoded with encodeURIComponent().
function getCookies() {
  let cookies = new Map(); // The object we will return
  let all = document.cookie; // Get all cookies in one big string
  let list = all.split("; "); // Split into individual name/value pairs
  for (let cookie of list) {
    // For each cookie in that list
    if (!cookie.includes("=")) continue; // Skip if there is no = sign
    let p = cookie.indexOf("="); // Find the first = sign
    let name = cookie.substring(0, p); // Get cookie name
    let value = cookie.substring(p + 1); // Get cookie value
    value = decodeURIComponent(value); // Decode the value
    cookies.set(name, value); // Remember cookie name and value
  }
  return cookies;
}

const http = require("http");

function getJSON(url) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // Start an HTTP GET request for the specified URL
    request = http.get(url, (response) => {
      // called when response starts
      // Reject the Promise if the HTTP status is wrong
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        response.resume(); // so we don't leak memory
      }
      // And reject if the response headers are wrong
      else if (response.headers["content-type"] !== "application/json") {
        reject(new Error("Invalid content-type"));
        response.resume(); // don't leak memory
      } else {
        // Otherwise, register events to read the body of the response
        let body = "";
        response.setEncoding("utf-8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          // When the response body is complete, try to parse it
          try {
            let parsed = JSON.parse(body);
            // If it parsed successfully, fulfill the Promise
            resolve(parsed);
          } catch (e) {
            // If parsing failed, reject the Promise
            reject(e);
          }
        });
      }
    });
    // We also reject the Promise if the request fails before we
    // even get a response (such as when the network is down)
    request.on("error", (error) => {
      reject(error);
    });
  });
}

const https = require("https");

// Read the text content of the URL and asynchronously pass it to the callback.
function getText(url, callback) {
  // Start an HTTP GET request for the URL
  request = https.get(url);

  // Register a function to handle the "response" event.
  request.on("response", (response) => {
    // The response event means that response headers have been received
    let httpStatus = response.statusCode;

    // The body of the HTTP response has not been received yet.
    // So we register more event handlers to to be called when it arrives.
    response.setEncoding("utf-8"); // We're expecting Unicode text
    let body = ""; // which we will accumulate here.

    // This event handler is called when a chunk of the body is ready
    response.on("data", (chunk) => {
      body += chunk;
    });

    // This event handler is called when the response is complete
    response.on("end", () => {
      if (httpStatus === 200) {
        // If the HTTP response was good
        callback(null, body); // Pass response body to the callback
      } else {
        // Otherwise pass an error
        callback(httpStatus, null);
      }
    });
  });

  // We also register an event handler for lower-level network errors
  request.on("error", (err) => {
    callback(err, null);
  });
}

function glob(strings, ...values) {
  // Assemble the strings and values into a single string
  let s = strings[0];
  for (let i = 0; i < values.length; i++) {
    s += values[i] + strings[i + 1];
  }
  // Return a parsed representation of that string
  return new Glob(s);
}

let root = "/tmp";
let filePattern = glob`${root}/*.html`; // A RegExp alternative
"/tmp/test.html".match(filePattern)[1]; // => "test"

const stream = require("stream");

class GrepStream extends stream.Transform {
  constructor(pattern) {
    super({ decodeStrings: false }); // Don't convert strings back to buffers
    this.pattern = pattern; // The regular expression we want to match
    this.incompleteLine = ""; // Any remnant of the last chunk of data
  }

  // This method is invoked when there is a string ready to be
  // transformed. It should pass transformed data to the specified
  // callback function. We expect string input so this stream should
  // only be connected to readable streams that have had
  // setEncoding() called on them.
  _transform(chunk, encoding, callback) {
    if (typeof chunk !== "string") {
      callback(new Error("Expected a string but got a buffer"));
      return;
    }
    // Add the chunk to any previously incomplete line and break
    // everything into lines
    let lines = (this.incompleteLine + chunk).split("\n");

    // The last element of the array is the new incomplete line
    this.incompleteLine = lines.pop();

    // Find all matching lines
    let output = lines // Start with all complete lines,
      .filter((l) => this.pattern.test(l)) // filter them for matches,
      .join("\n"); // and join them back up.

    // If anything matched, add a final newline
    if (output) {
      output += "\n";
    }

    // Always call the callback even if there is no output
    callback(null, output);
  }

  // This is called right before the stream is closed.
  // It is our chance to write out any last data.
  _flush(callback) {
    // If we still have an incomplete line, and it matches
    // pass it to the callback
    if (this.pattern.test(this.incompleteLine)) {
      callback(null, this.incompleteLine + "\n");
    }
  }
}

// Now we can write a program like 'grep' with this class.
let pattern = new RegExp(process.argv[2]); // Get a RegExp from command line.
process.stdin // Start with standard input,
  .setEncoding("utf8") // read it as Unicode strings,
  .pipe(new GrepStream(pattern)) // pipe it to our GrepStream,
  .pipe(process.stdout) // and pipe that to standard out.
  .on("error", () => process.exit()); // Exit gracefully if stdout closes.

const fs = require("fs");
const zlib = require("zlib");

function gzip(filename, callback) {
  // Create the streams
  let source = fs.createReadStream(filename);
  let destination = fs.createWriteStream(filename + ".gz");
  let gzipper = zlib.createGzip();

  // Set up the pipeline
  source
    .on("error", callback) // call callback on read error
    .pipe(gzipper)
    .pipe(destination)
    .on("error", callback) // call callback on write error
    .on("finish", callback); // call callback when writing is complete
}

const fs = require("fs");
const crypto = require("crypto");

// Compute a sha256 hash of the contents of the named file and pass the
// hash (as a string) to the specified error-first callback function.
function sha256(filename, callback) {
  let input = fs.createReadStream(filename); // The data stream.
  let hasher = crypto.createHash("sha256"); // For computing the hash.

  input.on("readable", () => {
    // When there is data ready to read
    let chunk;
    while ((chunk = input.read())) {
      // Read a chunk, and if non-null,
      hasher.update(chunk); // pass it to the hasher,
    } // and keep looping until not readable
  });
  input.on("end", () => {
    // At the end of the stream,
    let hash = hasher.digest("hex"); // compute the hash,
    callback(null, hash); // and pass it to the callback.
  });
  input.on("error", callback); // On error, call callback
}

// Here's a simple command-line utility to compute the hash of a file
sha256(process.argv[2], (err, hash) => {
  // Pass filename from command line.
  if (err) {
    // If we get an error
    console.error(err.toString()); // print it as an error.
  } else {
    // Otherwise,
    console.log(hash); // print the hash string.
  }
});

function html(strings, ...values) {
  // Convert each value to a string and escape special HTML characters
  let escaped = values.map((v) =>
    String(v)
      .replace("&", "&amp;")
      .replace("<", "&lt;")
      .replace(">", "&gt;")
      .replace('"', "&quot;")
      .replace("'", "&#39;")
  );

  // Return the concatenated strings and escaped values
  let result = strings[0];
  for (let i = 0; i < escaped.length; i++) {
    result += escaped[i] + strings[i + 1];
  }
  return result;
}

let operator = "<";
html`<b>x ${operator} y</b>`; // => "<b>x &lt; y</b>"

let kind = "game",
  name = "D&D";
html`<div class="${kind}">${name}</div>`; // =>'<div class="game">D&amp;D</div>'

// We use a Proxy to create an object that appears to have every
// possible property, with the value of each property equal to its name
let identity = new Proxy(
  {},
  {
    // Every property has its own name as its value
    get(o, name, target) {
      return name;
    },
    // Every property name is defined
    has(o, name) {
      return true;
    },
    // There are too many properties to enumerate, so we just throw
    ownKeys(o) {
      throw new RangeError("Infinite number of properties");
    },
    // All properties exist and are not writable, configurable or enumerable.
    getOwnPropertyDescriptor(o, name) {
      return {
        value: name,
        enumerable: false,
        writable: false,
        configurable: false,
      };
    },
    // All properties are read-only so they can't be set
    set(o, name, value, target) {
      return false;
    },
    // All properties are non-configurable, so they can't be deleted
    deleteProperty(o, name) {
      return false;
    },
    // All properties exist and are non-configurable so we can't define more
    defineProperty(o, name, desc) {
      return false;
    },
    // In effect, this means that the object is not extensible
    isExtensible(o) {
      return false;
    },
    // All properties are already defined on this object, so it couldn't
    // inherit anything even if it did have a prototype object.
    getPrototypeOf(o) {
      return null;
    },
    // The object is not extensible, so we can't change the prototype
    setPrototypeOf(o, proto) {
      return false;
    },
  }
);

identity.x; // => "x"
identity.toString; // => "toString"
identity[0]; // => "0"
identity.x = 1; // Setting properties has no effect
identity.x; // => "x"
delete identity.x; // => false: can't delete properties either
identity.x; // => "x"
Object.keys(identity); // !RangeError: can't list all the keys
for (let p of identity); // !RangeError

// Asynchronously load and execute a script from a specified URL
// Returns a Promise that resolves when the script has loaded.
function importScript(url) {
  return new Promise((resolve, reject) => {
    let s = document.createElement("script"); // Create a <script> element
    s.onload = () => {
      resolve();
    }; // Resolve promise when loaded
    s.onerror = (e) => {
      reject(e);
    }; // Reject on failure
    s.src = url; // Set the script URL
    document.head.append(s); // Add <script> to document
  });
}

customElements.define(
  "inline-circle",
  class InlineCircle extends HTMLElement {
    // The browser calls this method when an <inline-circle> element
    // is inserted into the document. There is also a disconnectedCallback()
    // that we don't need in this example.
    connectedCallback() {
      // Set the styles needed to create circles
      this.style.display = "inline-block";
      this.style.borderRadius = "50%";
      this.style.border = "solid black 1px";
      this.style.transform = "translateY(10%)";

      // If there is not already a size defined, set a default size
      // that is based on the current font size.
      if (!this.style.width) {
        this.style.width = "0.8em";
        this.style.height = "0.8em";
      }
    }

    // The static observedAttributes property specifies which attributes
    // we want to be notified about changes to. (We use a getter here since
    // we can only use "static" with methods.)
    static get observedAttributes() {
      return ["diameter", "color"];
    }

    // This callback is invoked when one of the attributes listed above
    // changes, either when the custom element is first parsed, or later.
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "diameter":
          // If the diameter attribute changes, update the size styles
          this.style.width = newValue;
          this.style.height = newValue;
          break;
        case "color":
          // If the color attribute changes, update the color styles
          this.style.backgroundColor = newValue;
          break;
      }
    }

    // Define JavaScript properties that correspond to the element's
    // attributes. These getters and setters just get and set the underlying
    // attributes. If a JavaScript property is set, that sets the attribute
    // which triggers a call to attributeChangedCallback() which updates
    // the element styles.
    get diameter() {
      return this.getAttribute("diameter");
    }
    set diameter(diameter) {
      this.setAttribute("diameter", diameter);
    }
    get color() {
      return this.getAttribute("color");
    }
    set color(color) {
      this.setAttribute("color", color);
    }
  }
);

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.
function isArrayLike(o) {
  if (
    o && // o is not null, undefined, etc.
    typeof o === "object" && // o is an object
    Number.isFinite(o.length) && // o.length is a finite number
    o.length >= 0 && // o.length is non-negative
    Number.isInteger(o.length) && // o.length is an integer
    o.length < 4294967295
  ) {
    // o.length < 2^32 - 1
    return true; // Then o is array-like.
  } else {
    return false; // Otherwise it is not.
  }
}

// Connect to the joke port (6789) on the server named on the command line
let socket = require("net").createConnection(6789, process.argv[2]);
socket.pipe(process.stdout); // Pipe data from the socket to stdout
process.stdin.pipe(socket); // Pipe data from stdin to the socket
socket.on("close", () => process.exit()); // Quit when the socket closes.

// A TCP server that delivers interactive knock-knock jokes on port 6789.
// (Why is six afraid of seven? Because seven ate nine!)
const net = require("net");
const readline = require("readline");

// Create a Server object and start listening for connections
let server = net.createServer();
server.listen(6789, () => console.log("Delivering laughs on port 6789"));

// When a client connects, tell them a knock-knock joke.
server.on("connection", (socket) => {
  tellJoke(socket)
    .then(() => socket.end()) // When the joke is done, close the socket.
    .catch((err) => {
      console.error(err); // Log any errors that occur,
      socket.end(); // but still close the socket!
    });
});

// These are all the jokes we know.
const jokes = {
  Boo: "Don't cry...it's only a joke!",
  Lettuce: "Let us in! It's freezing out here!",
  "A little old lady": "Wow, I didn't know you could yodel!",
};

// Interactively perform a knock-knock joke over this socket, without blocking.
async function tellJoke(socket) {
  // Pick one of the jokes at random
  let randomElement = (a) => a[Math.floor(Math.random() * a.length)];
  let who = randomElement(Object.keys(jokes));
  let punchline = jokes[who];

  // Use the readline module to read the user's input one line at a time.
  let lineReader = readline.createInterface({
    input: socket,
    output: socket,
    prompt: ">> ",
  });

  // A utility function to output a line of text to the client
  // and then (by default) display a prompt.
  function output(text, prompt = true) {
    socket.write(`${text}\r\n`);
    if (prompt) lineReader.prompt();
  }

  // Knock-knock jokes have a call-and-response structure.
  // We expect different input from the user at different stages and
  // take different action when we get that input at different stages.
  let stage = 0;

  // Start the knock-knock joke off in the traditional way.
  output("Knock knock!");

  // Now read lines asynchronously from the client until the joke is done.
  for await (let inputLine of lineReader) {
    if (stage === 0) {
      if (inputLine.toLowerCase() === "who's there?") {
        // If the user gives the right response at stage 0
        // then tell the first part of the joke and go to stage 1.
        output(who);
        stage = 1;
      } else {
        // Otherwise teach the user how to do knock-knock jokes.
        output('Please type "Who\'s there?".');
      }
    } else if (stage === 1) {
      if (inputLine.toLowerCase() === `${who.toLowerCase()} who?`) {
        // If the user's response is correct at stage 1, then
        // deliver the punchline and return since the joke is done.
        output(`${punchline}`, false);
        return;
      } else {
        // Make the user play along.
        output(`Please type "${who} who?".`);
      }
    }
  }
}

let deg = Math.PI / 180; // For converting degrees to radians

// Draw a level-n Koch snowflake fractal on the canvas context c,
// with lower-left corner at (x,y) and side length len.
function snowflake(c, n, x, y, len) {
  c.save(); // Save current transformation
  c.translate(x, y); // Translate origin to starting point
  c.moveTo(0, 0); // Begin a new subpath at the new origin
  leg(n); // Draw the first leg of the snowflake
  c.rotate(-120 * deg); // Now rotate 120 degrees counterclockwise
  leg(n); // Draw the second leg
  c.rotate(-120 * deg); // Rotate again
  leg(n); // Draw the final leg
  c.closePath(); // Close the subpath
  c.restore(); // And restore original transformation

  // Draw a single leg of a level-n Koch snowflake.
  // This function leaves the current point at the end of the leg it has
  // drawn and translates the coordinate system so the current point is (0,0).
  // This means you can easily call rotate() after drawing a leg.
  function leg(n) {
    c.save(); // Save the current transformation
    if (n === 0) {
      // Nonrecursive case:
      c.lineTo(len, 0); //   Just draw a horizontal line
    } //                                       _  _
    else {
      // Recursive case: draw 4 sub-legs like:  \/
      c.scale(1 / 3, 1 / 3); // Sub-legs are 1/3 the size of this leg
      leg(n - 1); // Recurse for the first sub-leg
      c.rotate(60 * deg); // Turn 60 degrees clockwise
      leg(n - 1); // Second sub-leg
      c.rotate(-120 * deg); // Rotate 120 degrees back
      leg(n - 1); // Third sub-leg
      c.rotate(60 * deg); // Rotate back to our original heading
      leg(n - 1); // Final sub-leg
    }
    c.restore(); // Restore the transformation
    c.translate(len, 0); // But translate to make end of leg (0,0)
  }
}

let c = document.querySelector("canvas").getContext("2d");
snowflake(c, 0, 25, 125, 125); // A level-0 snowflake is a triangle
snowflake(c, 1, 175, 125, 125); // A level-1 snowflake is a 6-sided star
snowflake(c, 2, 325, 125, 125); // etc.
snowflake(c, 3, 475, 125, 125);
snowflake(c, 4, 625, 125, 125); // A level-4 snowflake looks like a snowflake!
c.stroke(); // Stroke this very complicated path

const fs = require("fs");
const path = require("path");

async function listDirectory(dirpath) {
  let dir = await fs.promises.opendir(dirpath);
  for await (let entry of dir) {
    let name = entry.name;
    if (entry.isDirectory()) {
      name += "/"; // Add a trailing slash to subdirectories
    }
    let stats = await fs.promises.stat(path.join(dirpath, name));
    let size = stats.size;
    console.log(String(size).padStart(10), name);
  }
}

// If the integer 0x00000001 is arranged in memory as 01 00 00 00, then
// we're on a little-endian platform. On a big-endian platform, we'd get
// bytes 00 00 00 01 instead.
let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

/*
 * Return a Proxy object that wraps o, delegating all operations to
 * that object after logging each operation. objname is a string that
 * will appear in the log messages to identify the object. If o has own
 * properties whose values are objects or functions, then if you query
 * the value of those properties, you'll get a loggingProxy back, so that
 * logging behavior of this proxy is "contagious".
 */
function loggingProxy(o, objname) {
  // Define handlers for our logging Proxy object.
  // Each handler logs a message and then delegates to the target object.
  const handlers = {
    // This handler is a special case because for own properties
    // whose value is an object or function, it returns a proxy rather
    // than returning the value itself.
    get(target, property, receiver) {
      // Log the get operation
      console.log(`Handler get(${objname},${property.toString()})`);

      // Use the Reflect API to get the property value
      let value = Reflect.get(target, property, receiver);

      // If the property is an own property of the target and
      // the value is an object or function then return a Proxy for it.
      if (
        Reflect.ownKeys(target).includes(property) &&
        (typeof value === "object" || typeof value === "function")
      ) {
        return loggingProxy(value, `${objname}.${property.toString()}`);
      }

      // Otherwise return the value unmodified.
      return value;
    },

    // There is nothing special about the following three methods:
    // they log the operation and delegate to the target object.
    // They are a special case simply so we can avoid logging the
    // receiver object which can cause infinite recursion.
    set(target, prop, value, receiver) {
      console.log(`Handler set(${objname},${prop.toString()},${value})`);
      return Reflect.set(target, prop, value, receiver);
    },
    apply(target, receiver, args) {
      console.log(`Handler ${objname}(${args})`);
      return Reflect.apply(target, receiver, args);
    },
    construct(target, args, receiver) {
      console.log(`Handler ${objname}(${args})`);
      return Reflect.construct(target, args, receiver);
    },
  };

  // We can automatically generate the rest of the handlers.
  // Metaprogramming FTW!
  Reflect.ownKeys(Reflect).forEach((handlerName) => {
    if (!(handlerName in handlers)) {
      handlers[handlerName] = function (target, ...args) {
        // Log the operation
        console.log(`Handler ${handlerName}(${objname},${args})`);
        // Delegate the operation
        return Reflect[handlerName](target, ...args);
      };
    }
  });

  // Return a proxy for the object using these logging handlers
  return new Proxy(o, handlers);
}

/*
 * This class represents a subrectangle of a canvas or image. We use Tiles to
 * divide a canvas into regions that can be processed independently by Workers.
 */
class Tile {
  constructor(x, y, width, height) {
    this.x = x; // The properties of a Tile object
    this.y = y; // represent the position and size
    this.width = width; // of the tile within a larger
    this.height = height; // rectangle.
  }

  // This static method is a generator that divides a rectangle of the
  // specified width and height into the specified number of rows and
  // columns and yields numRows*numCols Tile objects to cover the rectangle.
  static *tiles(width, height, numRows, numCols) {
    let columnWidth = Math.ceil(width / numCols);
    let rowHeight = Math.ceil(height / numRows);

    for (let row = 0; row < numRows; row++) {
      let tileHeight =
        row < numRows - 1
          ? rowHeight // height of most rows
          : height - rowHeight * (numRows - 1); // height of last row
      for (let col = 0; col < numCols; col++) {
        let tileWidth =
          col < numCols - 1
            ? columnWidth // width of most columns
            : width - columnWidth * (numCols - 1); // and last column

        yield new Tile(
          col * columnWidth,
          row * rowHeight,
          tileWidth,
          tileHeight
        );
      }
    }
  }
}

/*
 * This class represents a pool of workers, all running the same code. The
 * worker code you specify must respond to each message it receives by
 * performing some kind of computation and then posting a single message with
 * the result of that computation.
 *
 * Given a WorkerPool and message that represents work to be performed, simply
 * call addWork(), with the message as an argument. If there is a Worker
 * object that is currently idle, the message will be posted to that worker
 * immediately. If there are no idle Worker objects, the message will be
 * queued and will be posted to a Worker when one becomes available.
 *
 * addWork() returns a Promise, which will resolve with the message recieved
 * from the work, or will reject if the worker throws an unhandled error.
 */
class WorkerPool {
  constructor(numWorkers, workerSource) {
    this.idleWorkers = []; // Workers that are not currently working
    this.workQueue = []; // Work not currently being processed
    this.workerMap = new Map(); // Map workers to resolve and reject funcs

    // Create the specified number of workers, add message and error
    // handlers and save them in the idleWorkers array.
    for (let i = 0; i < numWorkers; i++) {
      let worker = new Worker(workerSource);
      worker.onmessage = (message) => {
        this._workerDone(worker, null, message.data);
      };
      worker.onerror = (error) => {
        this._workerDone(worker, error, null);
      };
      this.idleWorkers[i] = worker;
    }
  }

  // This internal method is called when a worker finishes working, either
  // by sending a message or by throwing an error.
  _workerDone(worker, error, response) {
    // Look up the resolve() and reject() functions for this worker
    // and then remove the worker's entry from the map.
    let [resolver, rejector] = this.workerMap.get(worker);
    this.workerMap.delete(worker);

    // If there is no queued work, put this worker back in
    // the list of idle workers. Otherwise, take work from the queue
    // and send it to this worker.
    if (this.workQueue.length === 0) {
      this.idleWorkers.push(worker);
    } else {
      let [work, resolver, rejector] = this.workQueue.shift();
      this.workerMap.set(worker, [resolver, rejector]);
      worker.postMessage(work);
    }

    // Finally, resolve or reject the promise associated with the worker.
    error === null ? resolver(response) : rejector(error);
  }

  // This method adds work to the worker pool and returns a Promise that
  // will resolve with a worker's response when the work is done. The work
  // is a value to be passed to a worker with postMessage(). If there is an
  // idle worker, the work message will be sent immediately. Otherwise it
  // will be queued until a worker is available.
  addWork(work) {
    return new Promise((resolve, reject) => {
      if (this.idleWorkers.length > 0) {
        let worker = this.idleWorkers.pop();
        this.workerMap.set(worker, [resolve, reject]);
        worker.postMessage(work);
      } else {
        this.workQueue.push([work, resolve, reject]);
      }
    });
  }
}

/*
 * This class holds the state information necessary to render a Mandelbrot set.
 * The cx and cy properties give the point in the complex plane that is the
 * center of the image. The perPixel property specifies how much the real and
 * imaginary parts of that complex number changes for each pixel of the image.
 * The maxIterations property specifies how hard we work to compute the set.
 * Larger numbers require more computation but produce crisper images.
 * Note that the size of the canvas is not part of the state. Given cx, cy, and
 * perPixel we simply render whatever portion of the Mandelbrot set fits in
 * the canvas at its current size.
 *
 * Objects of this type are used with history.pushState() and are used to read
 * the desired state from a bookmarked or shared URL.
 */
class PageState {
  // This factory method returns an initial state to display the entire set.
  static initialState() {
    let s = new PageState();
    s.cx = -0.5;
    s.cy = 0;
    s.perPixel = 3 / window.innerHeight;
    s.maxIterations = 500;
    return s;
  }

  // This factory method obtains state from a URL, or returns null if
  // a valid state could not be read from the URL.
  static fromURL(url) {
    let s = new PageState();
    let u = new URL(url); // Initialize state from the url's search params.
    s.cx = parseFloat(u.searchParams.get("cx"));
    s.cy = parseFloat(u.searchParams.get("cy"));
    s.perPixel = parseFloat(u.searchParams.get("pp"));
    s.maxIterations = parseInt(u.searchParams.get("it"));
    // If we got valid values, return the PageState object, otherwise null.
    return isNaN(s.cx) ||
      isNaN(s.cy) ||
      isNaN(s.perPixel) ||
      isNaN(s.maxIterations)
      ? null
      : s;
  }

  // This instance method encodes the current state into the search
  // parameters of the browser's current location.
  toURL() {
    let u = new URL(window.location);
    u.searchParams.set("cx", this.cx);
    u.searchParams.set("cy", this.cy);
    u.searchParams.set("pp", this.perPixel);
    u.searchParams.set("it", this.maxIterations);
    return u.href;
  }
}

// These constants control the parallelism of the Mandelbrot set computation.
// You may need to adjust them to get optimum performance on your computer.
const ROWS = 3,
  COLS = 4,
  NUMWORKERS = navigator.hardwareConcurrency || 2;

// This is the main class of our Mandelbrot set program. Simply invoke the
// constructor function with the <canvas> element to render into. The program
// assumes that this <canvas> element is styled so that it is always as big
// as the browser window.
class MandelbrotCanvas {
  constructor(canvas) {
    // Store the canvas, get its context object, and initialize a WorkerPool
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.workerPool = new WorkerPool(NUMWORKERS, "mandelbrotWorker.js");

    // Define some properties that we'll use later
    this.tiles = null; // Subregions of the canvas
    this.pendingRender = null; // We're not currently rendering
    this.wantsRerender = false; // No render is currently requested
    this.resizeTimer = null; // Prevents us from resizing too frequently
    this.colorTable = null; // For converting raw data to pixel values.

    // Set up our event handlers
    this.canvas.addEventListener("pointerdown", (e) => this.handlePointer(e));
    window.addEventListener("keydown", (e) => this.handleKey(e));
    window.addEventListener("resize", (e) => this.handleResize(e));
    window.addEventListener("popstate", (e) => this.setState(e.state, false));

    // Initialize our state from the URL or start with the initial state.
    this.state = PageState.fromURL(window.location) || PageState.initialState();

    // Save this state with the history mechanism.
    history.replaceState(this.state, "", this.state.toURL());

    // Set the canvas size and get an array of tiles that cover it.
    this.setSize();

    // And render the Mandelbrot set into the canvas.
    this.render();
  }

  // Set the canvas size and initialize an array of Tile objects. This
  // method is called from the constructor and also by the handleResize()
  // method when the browser window is resized.
  setSize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.tiles = [...Tile.tiles(this.width, this.height, ROWS, COLS)];
  }

  // This function makes a change to the PageState, then re-renders the
  // Mandelbrot set using that new state, and also saves the new state with
  // history.pushState(). If the first argument is a function that function
  // will be called with the state object as its argument and should make
  // changes to the state. If the first argument is an object, then we simply
  // copy the properties of that object into the state object. If the optional
  // second argument is false, then the new state will not be saved. (We
  // do this when calling setState in response to a popstate event.)
  setState(f, save = true) {
    // If the argument is a function, call it to update the state.
    // Otherwise, copy its properties into the current state.
    if (typeof f === "function") {
      f(this.state);
    } else {
      for (let property in f) {
        this.state[property] = f[property];
      }
    }

    // In either case, start rendering the new state ASAP.
    this.render();

    // Normally we save the new state. Except when we're called with
    // a second argument of false which we do when we get a popstate event.
    if (save) {
      history.pushState(this.state, "", this.state.toURL());
    }
  }

  // This method asynchronously draws the portion of the Mandelbrot set
  // specified by the PageState object into the canvas. It is called by
  // the constructor, by setState() when the state changes, and by the
  // resize event handler when the size of the canvas changes.
  render() {
    // Sometimes the user may use the keyboard or mouse to request renders
    // more quickly than we can perform them. We don't want to submit all
    // the renders to the worker pool. Instead if we're rendering, we'll
    // just make a note that a new render is needed, and when the current
    // render completes, we'll render the current state, possibly skipping
    // multiple intermediate states.
    if (this.pendingRender) {
      // If we're already rendering,
      this.wantsRerender = true; // make a note to rerender later
      return; // and don't do anything more now.
    }

    // Get our state variables and compute the complex number for the
    // upper left corner of the canvas.
    let { cx, cy, perPixel, maxIterations } = this.state;
    let x0 = cx - (perPixel * this.width) / 2;
    let y0 = cy - (perPixel * this.height) / 2;

    // For each of our ROWS*COLS tiles, call addWork() with a message
    // for the code in mandelbrotWorker.js. Collect the resulting Promise
    // objects into an array.
    let promises = this.tiles.map((tile) =>
      this.workerPool.addWork({
        tile: tile,
        x0: x0 + tile.x * perPixel,
        y0: y0 + tile.y * perPixel,
        perPixel: perPixel,
        maxIterations: maxIterations,
      })
    );

    // Use Promise.all() to get an array of responses from the array of
    // promises. Each response is the computation for one of our tiles.
    // Recall from mandelbrotWorker.js that each response includes the
    // Tile object, an ImageData object that includes iteration counts
    // instead of pixel values, and the minimum and maximum iterations
    // for that tile.
    this.pendingRender = Promise.all(promises)
      .then((responses) => {
        // First, find the overall max and min iterations over all tiles.
        // We need these numbers so we can assign colors to the pixels.
        let min = maxIterations,
          max = 0;
        for (let r of responses) {
          if (r.min < min) min = r.min;
          if (r.max > max) max = r.max;
        }

        // Now we need a way to convert the raw iteration counts from the
        // workers into pixel colors that will be displayed in the canvas.
        // We know that all the pixels have between min and max iterations
        // so we precompute the colors for each iteration count and store
        // them in the colorTable array.

        // If we haven't allocated a color table yet, or if it is no longer
        // the right size, then allocate a new one.
        if (!this.colorTable || this.colorTable.length !== maxIterations + 1) {
          this.colorTable = new Uint32Array(maxIterations + 1);
        }

        // Given the max and the min, compute appropriate values in the
        // color table. Pixels in the set will be colored fully opaque
        // black. Pixels outside the set will be translucent black with higher
        // iteration counts resulting in higher opacity. Pixels with
        // minimum iteration counts will be transparent and the white
        // background will show through, resulting in a grayscale image.
        if (min === max) {
          // If all the pixels are the same,
          if (min === maxIterations) {
            // Then make them all black
            this.colorTable[min] = 0xff000000;
          } else {
            // Or all transparent.
            this.colorTable[min] = 0;
          }
        } else {
          // In the normal case where min and max are different, use a
          // logarithic scale to assign each possible iteration count an
          // opacity between 0 and 255, and then use the shift left
          // operator to turn that into a pixel value.
          let maxlog = Math.log(1 + max - min);
          for (let i = min; i <= max; i++) {
            this.colorTable[i] =
              Math.ceil((Math.log(1 + i - min) / maxlog) * 255) << 24;
          }
        }

        // Now translate the iteration numbers in each response's
        // ImageData to colors from the colorTable.
        for (let r of responses) {
          let iterations = new Uint32Array(r.imageData.data.buffer);
          for (let i = 0; i < iterations.length; i++) {
            iterations[i] = this.colorTable[iterations[i]];
          }
        }

        // Finally, render all the imageData objects into their
        // corresponding tiles of the canvas using putImageData().
        // (First, though, remove any CSS transforms on the canvas that may
        // have been set by the pointerdown event handler.)
        this.canvas.style.transform = "";
        for (let r of responses) {
          this.context.putImageData(r.imageData, r.tile.x, r.tile.y);
        }
      })
      .catch((reason) => {
        // If anything went wrong in any of our Promises, we'll log
        // an error here. This shouldn't happen, but this will help with
        // debugging if it does.
        console.error("Promise rejected in render():", reason);
      })
      .finally(() => {
        // When we are done rendering, clear the pendingRender flags
        this.pendingRender = null;
        // And if render requests came in while we were busy, rerender now.
        if (this.wantsRerender) {
          this.wantsRerender = false;
          this.render();
        }
      });
  }

  // If the user resizes the window, this function will be called repeatedly.
  // Resizing a canvas and rerendering the Mandlebrot set is an expensive
  // operation that we can't do multiple times a second, so we use a timer
  // to defer handling the resize until 200ms have elapsed since the last
  // resize event was received.
  handleResize(event) {
    // If we were already deferring a resize, clear it.
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    // And defer this resize instead.
    this.resizeTimer = setTimeout(() => {
      this.resizeTimer = null; // Note that resize has been handled
      this.setSize(); // Resize canvas and tiles
      this.render(); // Rerender at the new size
    }, 200);
  }

  // If the user presses a key, this event handler will be called.
  // We call setState() in response to various keys, and setState() renders
  // the new state, updates the URL, and saves the state in browser history.
  handleKey(event) {
    switch (event.key) {
      case "Escape": // Type Escape to go back to the initial state
        this.setState(PageState.initialState());
        break;
      case "+": // Type + to increase the number of iterations
        this.setState((s) => {
          s.maxIterations = Math.round(s.maxIterations * 1.5);
        });
        break;
      case "-": // Type - to decrease the number of iterations
        this.setState((s) => {
          s.maxIterations = Math.round(s.maxIterations / 1.5);
          if (s.maxIterations < 1) s.maxIterations = 1;
        });
        break;
      case "o": // Type o to zoom out
        this.setState((s) => (s.perPixel *= 2));
        break;
      case "ArrowUp": // Up arrow to scroll up
        this.setState((s) => (s.cy -= (this.height / 10) * s.perPixel));
        break;
      case "ArrowDown": // Down arrow to scroll down
        this.setState((s) => (s.cy += (this.height / 10) * s.perPixel));
        break;
      case "ArrowLeft": // Left arrow to scroll left
        this.setState((s) => (s.cx -= (this.width / 10) * s.perPixel));
        break;
      case "ArrowRight": // Right arrow to scroll right
        this.setState((s) => (s.cx += (this.width / 10) * s.perPixel));
        break;
    }
  }

  // This method is called when we get a pointerdown event on the canvas.
  // The pointerdown event might be the start of a zoom gesture (a click or
  // tap) or a pan gesture (a drag). This handler registers handlers for
  // the pointermove and pointerup events in order to respond to the rest
  // of the gesture. (These two extra handlers are removed when the gesture
  // ends with a pointerup.)
  handlePointer(event) {
    // The pixel coordinates and time of the initial pointer down.
    // Because the canvas is as big as the window, these event coordinates
    // are also canvas coordinates.
    const x0 = event.clientX,
      y0 = event.clientY,
      t0 = Date.now();

    // This is the handler for move events.
    const pointerMoveHandler = (event) => {
      // How much have we moved, and how much time has passed?
      let dx = event.clientX - x0,
        dy = event.clientY - y0,
        dt = Date.now() - t0;

      // If the pointer has moved enough or enough time has passed that
      // this is not a regular click, then use CSS to pan the display.
      // (We will rerender it for real when we get the pointerup event.)
      if (dx > 10 || dy > 10 || dt > 500) {
        this.canvas.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    // This is the handler for pointerup events
    const pointerUpHandler = (event) => {
      // When the pointer goes up, the gesture is over, so remove
      // the move and up handlers until the next gesture.
      this.canvas.removeEventListener("pointermove", pointerMoveHandler);
      this.canvas.removeEventListener("pointerup", pointerUpHandler);

      // How much did the pointer move, and how much time passed?
      const dx = event.clientX - x0,
        dy = event.clientY - y0,
        dt = Date.now() - t0;
      // Unpack the state object into individual constants.
      const { cx, cy, perPixel } = this.state;

      // If the pointer moved far enough or if enough time passed, then
      // this was a pan gesture, and we need to change state to change
      // the center point. Otherwise, the user clicked or tapped on a
      // point and we need to center and zoom in on that point.
      if (dx > 10 || dy > 10 || dt > 500) {
        // The user panned the image by (dx, dy) pixels.
        // Convert those values to offsets in the complex plane.
        this.setState({ cx: cx - dx * perPixel, cy: cy - dy * perPixel });
      } else {
        // The user clicked. Compute how many pixels the center moves.
        let cdx = x0 - this.width / 2;
        let cdy = y0 - this.height / 2;

        // Use CSS to quickly and temporarily zoom in
        this.canvas.style.transform = `translate(${-cdx * 2}px, ${
          -cdy * 2
        }px) scale(2)`;

        // Set the complex coordinates of the new center point and
        // zoom in by a factor of 2.
        this.setState((s) => {
          s.cx += cdx * s.perPixel;
          s.cy += cdy * s.perPixel;
          s.perPixel /= 2;
        });
      }
    };

    // When the user begins a gesture we register handlers for the
    // pointermove and pointerup events that follow.
    this.canvas.addEventListener("pointermove", pointerMoveHandler);
    this.canvas.addEventListener("pointerup", pointerUpHandler);
  }
}

// Finally, here's how we set up the canvas. Note that this JavaScript file
// is self-sufficient. The HTML file only needs to include this one <script>.
let canvas = document.createElement("canvas"); // Create a canvas element
document.body.append(canvas); // Insert it into the body
document.body.style = "margin:0"; // No margin for the <body>
canvas.style.width = "100%"; // Make canvas as wide as body
canvas.style.height = "100%"; // and as high as the body.
new MandelbrotCanvas(canvas); // And start rendering into it!

// This is a simple worker that receives a message from its parent thread,
// performs the computation described by that message and then posts the
// result of that computation back to the parent thread.
onmessage = function (message) {
  // First, we unpack the message we received:
  //  - tile is an object with width and height properties. It specifies the
  //    size of the rectangle of pixels for which we will be computing
  //    Mandelbrot set membership.
  //  - (x0, y0) is the point in the complex plane that corresponds to the
  //    upper-left pixel in the tile.
  //  - perPixel is the pixel size in both the real and imaginary dimensions.
  //  - maxIterations specifies the maximum number of iterations we will
  //    perform before deciding that a pixel is in the set.
  const { tile, x0, y0, perPixel, maxIterations } = message.data;
  const { width, height } = tile;

  // Next, we create an ImageData object to represent the rectangular array
  // of pixels, get its internal ArrayBuffer, and create a typed array view
  // of that buffer so we can treat each pixel as a single integer instead of
  // four individual bytes. We'll store the number of iterations for each
  // pixel in this iterations array. (The iterations will be transformed into
  // actual pixel colors in the parent thread.)
  const imageData = new ImageData(width, height);
  const iterations = new Uint32Array(imageData.data.buffer);

  // Now we begin the computation. There are three nested for loops here.
  // The outer two loop over the rows and columns of pixels, and the inner
  // loop iterates each pixel to see if it "escapes" or not. The various
  // loop variables are the following:
  // - row and column are integers representing the pixel coordinate.
  // - x and y represent the complex point for each pixel: x + yi.
  // - index is the index in the iterations array for the current pixel.
  // - n tracks the number of iterations for each pixel.
  // - max and min track the largest and smallest number of iterations
  //   we've seen so far for any pixel in the rectangle.
  let index = 0,
    max = 0,
    min = maxIterations;
  for (let row = 0, y = y0; row < height; row++, y += perPixel) {
    for (let column = 0, x = x0; column < width; column++, x += perPixel) {
      // For each pixel we start with the complex number c = x+yi.
      // Then we repeatedly compute the complex number z(n+1) based on
      // this recursive formula:
      //    z(0) = c
      //    z(n+1) = z(n)^2 + c
      // If |z(n)| (the magnitude of z(n)) is > 2, then the
      // pixel is not part of the set and we stop after n iterations.
      let n; // The number of iterations so far
      let r = x,
        i = y; // Start with z(0) set to c
      for (n = 0; n < maxIterations; n++) {
        let rr = r * r,
          ii = i * i; // Square the two parts of z(n).
        if (rr + ii > 4) {
          // If |z(n)|^2 is > 4 then
          break; // we've escaped and can stop iterating.
        }
        i = 2 * r * i + y; // Compute imaginary part of z(n+1).
        r = rr - ii + x; // And the real part of z(n+1).
      }
      iterations[index++] = n; // Remember # iterations for each pixel.
      if (n > max) max = n; // Track the maximum number we've seen.
      if (n < min) min = n; // And the minimum as well.
    }
  }

  // When the computation is complete, send the results back to the parent
  // thread. The imageData object will be copied, but the giant ArrayBuffer
  // it contains will be transferred for a nice performance boost.
  postMessage({ tile, imageData, min, max }, [imageData.data.buffer]);
};

// Return an iterable object that iterates the result of applying f()
// to each value from the source iterable
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    // This object is both iterator and iterable
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return { value: f(v.value) };
      }
    },
  };
}

// Map a range of integers to their squares and convert to an array
[...map(new Range(1, 4), (x) => x * x)]; // => [1, 4, 9, 16]

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
  return (a) => map(a, f);
}

const increment = (x) => x + 1;
const incrementAll = mapper(increment);
incrementAll([1, 2, 3]); // => [2,3,4]

// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  const cache = new Map(); // Value cache stored in the closure.

  return function (...args) {
    // Create a string version of the arguments to use as a cache key.
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
  // Type checking for a and b has been omitted
  if (a < b) {
    // Ensure that a >= b when we start
    [a, b] = [b, a]; // Destructuring assignment to swap variables
  }
  while (b !== 0) {
    // This is Euclid's algorithm for GCD
    [a, b] = [b, a % b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
gcdmemo(85, 187); // => 17

// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});
factorial(5); // => 120: also caches values for 4, 3, 2 and 1.

// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // This is different than Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 2, y: 3, z: 4}
merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 1, y: 2, z: 4}

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
  return function (...args) {
    // Return a new function
    let result = f.apply(this, args); // that calls f
    return !result; // and negates its result.
  };
}

const even = (x) => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
[1, 1, 3, 5, 5].every(odd); // => true: every element of the array is odd

// Set the onload property of the Window object to a function.
// The function is the event handler: it is invoked when the document loads.
window.onload = function () {
  // Look up a <form> element
  let form = document.querySelector("form#shipping");
  // Register an event handler function on the form that will be invoked
  // before the form is submitted. Assume isFormValid() is defined elsewhere.
  form.onsubmit = function (event) {
    // When the user submits the form
    if (!isFormValid(this)) {
      // check whether form inputs are valid
      event.preventDefault(); // and if not, prevent form submission.
    }
  };
};

// We define some simple functions here
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

// For the sake of the example, we implement the simple functions again,
// this time within an object literal;
const operators = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow, // This works for predefined functions too
};

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
  if (typeof operators[operation] === "function") {
    return operators[operation](operand1, operand2);
  } else throw "unknown operator";
}

operate2("add", "hello", operate2("add", " ", "world")); // => "hello world"
operate2("pow", 10, 2); // => 100


const child_process = require("child_process");
const util = require("util");
const execP = util.promisify(child_process.exec);

function parallelExec(commands) {
  // Use the array of commands to create an array of Promises
  let promises = commands.map((command) =>
    execP(command, { encoding: "utf8" })
  );
  // Return a Promise that will fulfill to an array of the fulfillment
  // values of each of the individual promises. (Instead of returning objects
  // with stdout and stderr properties we just return the stdout value.)
  return Promise.all(promises).then((outputs) =>
    outputs.map((out) => out.stdout)
  );
}

module.exports = parallelExec;

const threads = require("worker_threads");

if (threads.isMainThread) {
  // In the main thread, we create a shared typed array with
  // one element. Both threads will be able to read and write
  // sharedArray[0] at the same time.
  let sharedBuffer = new SharedArrayBuffer(4);
  let sharedArray = new Int32Array(sharedBuffer);

  // Now create a worker thread, passing the shared array to it with
  // as its initial workerData value so we don't have to bother with
  // sending and receiving a message
  let worker = new threads.Worker(__filename, { workerData: sharedArray });

  // Wait for the worker to start running and then increment the
  // shared integer 10 million times.
  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) sharedArray[0]++;

    // Once we're done with our increments, we start listening for
    // message events so we know when the worker is done.
    worker.on("message", () => {
      // Although the shared integer has been incremented
      // 20 million times, its value will generally be much less.
      // On my computer the final value is typically under 12 million.
      console.log(sharedArray[0]);
    });
  });
} else {
  // In the worker thread, we get the shared array from workerData
  // and then increment it 10 million times.
  let sharedArray = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) sharedArray[0]++;
  // When we're done incrementing, let the main thread know
  threads.parentPort.postMessage("done");
}

const child_process = require("child_process");

// Start a new node process running the code in child.js in our directory
let child = child_process.fork(`${__dirname}/child.js`);

// Send a message to the child
child.send({ x: 4, y: 3 });

// Print the child's response when it arrives.
child.on("message", (message) => {
  console.log(message.hypotenuse); // This should print "5"
  // Since we only send one message we only expect one response.
  // After we receive it we call disconnect() to terminate the connection
  // between parent and child. This allows both processes to exit cleanly.
  child.disconnect();
});

// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
  return function (...innerArgs) {
    // Return this function
    let args = [...outerArgs, ...innerArgs]; // Build the argument list
    return f.apply(this, args); // Then invoke f with it
  };
}

// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
  return function (...innerArgs) {
    // Return this function
    let args = [...innerArgs, ...outerArgs]; // Build the argument list
    return f.apply(this, args); // Then invoke f with it
  };
}

// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...outerArgs]; // local copy of outer args template
    let innerIndex = 0; // which inner arg is next
    // Loop through the args, filling in undefined values from inner args
    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
    }
    // Now append any remaining inner arguments
    args.push(...innerArgs.slice(innerIndex));
    return f.apply(this, args);
  };
}

// Here is a function with three arguments
const f = function (x, y, z) {
  return x * (y - z);
};
// Notice how these three partial applications differ
partialLeft(f, 2)(3, 4); // => -2: Bind first argument: 2 * (3 - 4)
partialRight(f, 2)(3, 4); // =>  6: Bind last argument: 3 * (4 - 2)
partial(f, undefined, 2)(3, 4); // => -6: Bind middle argument: 3 * (2 - 4)

const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1 / 3);
cuberoot(increment(26)); // => 3

const not = partialLeft(compose, (x) => !x);
const even = (x) => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
odd(3) && isNumber(2); // => true

// sum() and square() functions are defined above. Here are some more:
const product = (x, y) => x * y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, 0.5);
const reciprocal = partial(Math.pow, undefined, neg(1));

// Now compute the mean and standard deviation.
let data = [1, 1, 3, 5, 5]; // Our data
let mean = product(reduce(data, sum), reciprocal(data.length));
let stddev = sqrt(
  product(
    reduce(map(data, compose(square, partial(sum, neg(mean)))), sum),
    reciprocal(sum(data.length, neg(1)))
  )
);
[mean, stddev]; // => [3, 2]

/**
 * Create an <svg> element and draw a pie chart into it.
 *
 * This function expects an object argument with the following properties:
 *
 *   width, height: the size of the SVG graphic, in pixels
 *   cx, cy, r: the center and radius of the pie
 *   lx, ly: the upper-left corner of the chart legend
 *   data: an object whose property names are data labels and whose
 *         property values are the values associated with each label
 *
 * The function returns an <svg> element. The caller must insert it into
 * the document in order to make it visible.
 */
function pieChart(options) {
  let { width, height, cx, cy, r, lx, ly, data } = options;

  // This is the XML namespace for svg elements
  let svg = "http://www.w3.org/2000/svg";

  // Create the <svg> element, and specify pixel size and user coordinates
  let chart = document.createElementNS(svg, "svg");
  chart.setAttribute("width", width);
  chart.setAttribute("height", height);
  chart.setAttribute("viewBox", `0 0 ${width} ${height}`);

  // Define the text styles we'll use for the chart. If we leave these
  // values unset here, they can be set with CSS instead.
  chart.setAttribute("font-family", "sans-serif");
  chart.setAttribute("font-size", "18");

  // Get labels and values as arrays and add up the values so we know how
  // big the pie is.
  let labels = Object.keys(data);
  let values = Object.values(data);
  let total = values.reduce((x, y) => x + y);

  // Figure out the angles for all the slices. Slice i starts at angles[i]
  // and ends at angles[i+1]. The angles are measured in radians.
  let angles = [0];
  values.forEach((x, i) => angles.push(angles[i] + (x / total) * 2 * Math.PI));

  // Now loop through the slices of the pie
  values.forEach((value, i) => {
    // Compute the two points where our slice intersects the circle
    // These formulas are chosen so that an angle of 0 is at 12 o'clock
    // and positive angles increase clockwise.
    let x1 = cx + r * Math.sin(angles[i]);
    let y1 = cy - r * Math.cos(angles[i]);
    let x2 = cx + r * Math.sin(angles[i + 1]);
    let y2 = cy - r * Math.cos(angles[i + 1]);

    // This is a flag for angles larger than a half circle
    // It is required by the SVG arc drawing component
    let big = angles[i + 1] - angles[i] > Math.PI ? 1 : 0;

    // This string describes how to draw a slice of the pie chart:
    let path =
      `M${cx},${cy}` + // Move to circle center.
      `L${x1},${y1}` + // Draw line to (x1,y1).
      `A${r},${r} 0 ${big} 1` + // Draw an arc of radius r...
      `${x2},${y2}` + // ...ending at to (x2,y2).
      "Z"; // Close path back to (cx,cy).

    // Compute the CSS color for this slice. This formula works for only
    // about 15 colors. So don't include more than 15 slices in a chart.
    let color = `hsl(${(i * 40) % 360},${90 - 3 * i}%,${50 + 2 * i}%)`;

    // We describe a slice with a <path> element. Note createElementNS().
    let slice = document.createElementNS(svg, "path");

    // Now set attributes on the <path> element
    slice.setAttribute("d", path); // Set the path for this slice
    slice.setAttribute("fill", color); // Set slice color
    slice.setAttribute("stroke", "black"); // Outline slice in black
    slice.setAttribute("stroke-width", "1"); // 1 CSS pixel thick
    chart.append(slice); // Add slice to chart

    // Now draw a little matching square for the key
    let icon = document.createElementNS(svg, "rect");
    icon.setAttribute("x", lx); // Position the square
    icon.setAttribute("y", ly + 30 * i);
    icon.setAttribute("width", 20); // Size the square
    icon.setAttribute("height", 20);
    icon.setAttribute("fill", color); // Same fill color as slice
    icon.setAttribute("stroke", "black"); // Same outline, too.
    icon.setAttribute("stroke-width", "1");
    chart.append(icon); // Add to the chart

    // And add a label to the right of the rectangle
    let label = document.createElementNS(svg, "text");
    label.setAttribute("x", lx + 30); // Position the text
    label.setAttribute("y", ly + 30 * i + 16);
    label.append(`${labels[i]} ${value}`); // Add text to label
    chart.append(label); // Add label to the chart
  });

  return chart;
}

function pipe(readable, writable, callback) {
  // First, set up error handling
  function handleError(err) {
    readable.close();
    writable.close();
    callback(err);
  }

  // Next define the pipe and handle the normal termination case
  readable
    .on("error", handleError)
    .pipe(writable)
    .on("error", handleError)
    .on("finish", callback);
}

// Define a regular polygon with n sides, centered at (x,y) with radius r.
// The vertices are equally spaced along the circumference of a circle.
// Put the first vertex straight up or at the specified angle.
// Rotate clockwise, unless the last argument is true.
function polygon(c, n, x, y, r, angle = 0, counterclockwise = false) {
  c.moveTo(
    x + r * Math.sin(angle), // Begin a new subpath at the first vertex
    y - r * Math.cos(angle)
  ); // Use trigonometry to compute position
  let delta = (2 * Math.PI) / n; // Angular distance between vertices
  for (let i = 1; i < n; i++) {
    // For each of the remaining vertices
    angle += counterclockwise ? -delta : delta; // Adjust angle
    c.lineTo(
      x + r * Math.sin(angle), // Add line to next vertex
      y - r * Math.cos(angle)
    );
  }
  c.closePath(); // Connect last vertex back to the first
}

// Assume there is just one canvas, and get its context object to draw with.
let c = document.querySelector("canvas").getContext("2d");

// Start a new path and add polygon subpaths
c.beginPath();
polygon(c, 3, 50, 70, 50); // Triangle
polygon(c, 4, 150, 60, 50, Math.PI / 4); // Square
polygon(c, 5, 255, 55, 50); // Pentagon
polygon(c, 6, 365, 53, 50, Math.PI / 6); // Hexagon
polygon(c, 4, 365, 53, 20, Math.PI / 4, true); // Small square inside the hexagon

// Set some properties that control how the graphics will look
c.fillStyle = "#ccc"; // Light gray interiors
c.strokeStyle = "#008"; // outlined with dark blue lines
c.lineWidth = 5; // five pixels wide.

// Now draw all the polygons (each in its own subpath) with these calls
c.fill(); // Fill the shapes
c.stroke(); // And stroke their outlines

const https = require("https");

/*
 * Convert the body object to a JSON string then HTTPS POST it to the
 * specified API endpoint on the specified host. When the response arrives,
 * parse the response body as JSON and resolve the returned Promise with
 * that parsed value.
 */
function postJSON(host, endpoint, body, port, username, password) {
  // Return a Promise object immediately, then call resolve or reject
  // when the HTTPS request succeeds or fails.
  return new Promise((resolve, reject) => {
    // Convert the body object to a string
    let bodyText = JSON.stringify(body);

    // Configure the HTTPS request
    let requestOptions = {
      method: "POST", // Or "GET", "PUT", "DELETE", etc.
      host: host, // The host to connect to
      path: endpoint, // The URL path
      headers: {
        // HTTP headers for the request
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(bodyText),
      },
    };

    if (port) {
      // If a port is specified,
      requestOptions.port = port; // use it for the request.
    }
    // If credentials are specified, add an Authorization header.
    if (username && password) {
      requestOptions.auth = `${username}:${password}`;
    }

    // Now create the request based on the configuration object
    let request = https.request(requestOptions);

    // Write the body of the POST request and end the request.
    request.write(bodyText);
    request.end();

    // Fail on request errors (such as no network connection)
    request.on("error", (e) => reject(e));

    // Handle the response when it starts to arrive.
    request.on("response", (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        // We don't care about the response body in this case, but
        // we don't want it to stick around in a buffer somewhere, so
        // we put the stream into flowing mode without registering
        // a "data" handler so that the body is discarded.
        response.resume();
        return;
      }

      // We want text, not bytes. We're assuming the text will be
      // JSON-formatted but aren't bothering to check the
      // Content-Type header.
      response.setEncoding("utf8");

      // Node doesn't have a streaming JSON parser, so we read the
      // entire response body into a string.
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });

      // And now handle the response when it is complete.
      response.on("end", () => {
        // When the response is done,
        try {
          // try to parse it as JSON
          resolve(JSON.parse(body)); // and resolve the result.
        } catch (e) {
          // Or, if anything goes wrong,
          reject(e); // reject with the error
        }
      });
    });
  });
}

// This function takes an array of input values and a "promiseMaker" function.
// For any input value x in the array, promiseMaker(x) should return a Promise
// that will fulfill to an output value. This function returns a Promise
// that fulfills to an array of the computed output values.
//
// Rather than creating the Promises all at once and letting them run in
// parallel, however, promiseSequence() only runs one Promise at a time
// and does not call promiseMaker() for a value until the previous Promise
// has fulfilled.
function promiseSequence(inputs, promiseMaker) {
  // Make a private copy of the array that we can modify
  inputs = [...inputs];

  // Here's the function that we'll use as a Promise callback
  // This is the pseudorecursive magic that makes this all work.
  function handleNextInput(outputs) {
    if (inputs.length === 0) {
      // If there are no more inputs left, then return the array
      // of outputs, finally fulfilling this Promise and all the
      // previous resolved-but-not-fulfilled Promises.
      return outputs;
    } else {
      // If there are still input values to process, then we'll
      // return a Promise object, resolving the current Promise
      // with the future value from a new Promise.
      let nextInput = inputs.shift(); // Get the next input value,
      return (
        promiseMaker(nextInput) // compute the next output value,
          // Then create a new outputs array with the new output value
          .then((output) => outputs.concat(output))
          // Then "recurse", passing the new, longer, outputs array
          .then(handleNextInput)
      );
    }
  }

  // Start with a Promise that fulfills to an empty array and use
  // the function above as its callback.
  return Promise.resolve([]).then(handleNextInput);
}

// Given a URL, return a Promise that fulfills to the URL body text
function fetchBody(url) {
  return fetch(url).then((r) => r.text());
}
// Use it to sequentially fetch a bunch of URL bodies
promiseSequence(urls, fetchBody)
  .then((bodies) => {
    /* do something with the array of strings */
  })
  .catch(console.error);

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
  get uint16() {
    return Math.floor(Math.random() * 65536);
  },
  get int16() {
    return Math.floor(Math.random() * 65536) - 32768;
  },
};

// This is a factory function that returns a new range object.
function range(from, to) {
  // Use Object.create() to create an object that inherits from the
  // prototype object defined below.  The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  let r = Object.create(range.methods);

  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;

  // Finally return the new object
  return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) {
    return this.from <= x && x <= this.to;
  },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // Return a string representation of the range
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};

// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // Return a string representation of the range
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
};

class Range {
  constructor(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
  }

  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) {
    return this.from <= x && x <= this.to;
  }

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  // Return a string representation of the range
  toString() {
    return `(${this.from}...${this.to})`;
  }
}

const fs = require("fs"); // Require the filesystem module

// Read a config file, parse its contents as JSON, and pass the
// resulting value to the callback. If anything goes wrong,
// print an error message to stderr and invoke the callback with null
function readConfigFile(path, callback) {
  fs.readFile(path, "utf8", (err, text) => {
    if (err) {
      // Something went wrong reading the file
      console.error(err);
      callback(null);
      return;
    }
    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      // Something went wrong parsing the file contents
      console.error(e);
    }
    callback(data);
  });
}

const util = require("util");
const fs = require("fs"); // Require the filesystem module
const pfs = {
  // Promise-based variants of some fs functions
  readFile: util.promisify(fs.readFile),
};

function readConfigFile(path) {
  return pfs.readFile(path, "utf-8").then((text) => {
    return JSON.parse(text);
  });
}

const fs = require("fs");
const util = require("util");
const pfs = { readFile: util.promisify(fs.readFile) };

async function readConfigFile(path) {
  let text = await pfs.readFile(path, "utf-8");
  return JSON.parse(text);
}

const fs = require("fs");
function readConfigFileSync(path) {
  let text = fs.readFileSync(path, "utf-8");
  return JSON.parse(text);
}

function readOnlyProxy(o) {
  function readonly() {
    throw new TypeError("Readonly");
  }
  return new Proxy(o, {
    set: readonly,
    defineProperty: readonly,
    deleteProperty: readonly,
    setPrototypeOf: readonly,
  });
}

let o = { x: 1, y: 2 }; // Normal writable object
let p = readOnlyProxy(o); // Readonly version of it
p.x; // => 1: reading properties works
p.x = 2; // !TypeError: can't change properties
delete p.y; // !TypeError: can't delete properties
p.z = 3; // !TypeError: can't add properties
p.__proto__ = {}; // !TypeError: can't change the prototype

/**
 * This class defines a custom HTML <search-box> element that displays an
 * <input> text input field plus two icons or emoji. By default, it displays a
 * magnifying glass emoji (indicating search) to the left of the text field
 * and an X emoji (indicating cancel) to the right of the text field. It
 * hides the border on the input field and displays a border around itself,
 * creating the appearance that the two emoji are inside the input
 * field. Similarly, when the internal input field is focused, the focus ring
 * is displayed around the <search-box>.
 *
 * You can override the default icons by including <span> or <img> children
 * of <search-box> with slot="left" and slot="right" attributes.
 *
 * <search-box> supports the normal HTML disabled and hidden attributes and
 * also size and placeholder attributes, which have the same meaning for this
 * element as they do for the <input> element.
 *
 * Input events from the internal <input> element bubble up and appear with
 * their target field set to the <search-box> element.
 *
 * The element fires a "search" event with the detail property set to the
 * current input string when the user clicks on the left emoji (the magnifying
 * glass). The "search" event is also dispatched when the internal text field
 * generates a "change" event (when the text has changed and the user types
 * Return or Tab).
 *
 * The element fires a "clear" event when the user clicks on the right emoji
 * (the X). If no handler calls preventDefault() on the event then the element
 * clears the user's input once event dispatch is complete.
 *
 * Note that there are no onsearch and onclear properties or attributes:
 * handlers for the "search" and "clear" events can only be registered with
 * addEventListener().
 */
class SearchBox extends HTMLElement {
  constructor() {
    super(); // Invoke the superclass constructor; must be first.

    // Create a shadow DOM tree and attach it to this element, setting
    // the value of this.shadowRoot.
    this.attachShadow({ mode: "open" });

    // Clone the template that defines the descendants and stylesheet for
    // this custom component, and append that content to the shadow root.
    this.shadowRoot.append(SearchBox.template.content.cloneNode(true));

    // Get references to the important elements in the shadow DOM
    this.input = this.shadowRoot.querySelector("#input");
    let leftSlot = this.shadowRoot.querySelector('slot[name="left"]');
    let rightSlot = this.shadowRoot.querySelector('slot[name="right"]');

    // When the internal input field gets or loses focus, set or remove
    // the "focused" attribute which will cause our internal stylesheet
    // to display or hide a fake focus ring on the entire component. Note
    // that the "blur" and "focus" events bubble and appear to originate
    // from the <search-box>.
    this.input.onfocus = () => {
      this.setAttribute("focused", "");
    };
    this.input.onblur = () => {
      this.removeAttribute("focused");
    };

    // If the user clicks on the magnifying glass, trigger a "search"
    // event.  Also trigger it if the input field fires a "change"
    // event. (The "change" event does not bubble out of the Shadow DOM.)
    leftSlot.onclick = this.input.onchange = (event) => {
      event.stopPropagation(); // Prevent click events from bubbling
      if (this.disabled) return; // Do nothing when disabled
      this.dispatchEvent(
        new CustomEvent("search", {
          detail: this.input.value,
        })
      );
    };

    // If the user clicks on the X, trigger a "clear" event.
    // If preventDefault() is not called on the event, clear the input.
    rightSlot.onclick = (event) => {
      event.stopPropagation(); // Don't let the click bubble up
      if (this.disabled) return; // Don't do anything if disabled
      let e = new CustomEvent("clear", { cancelable: true });
      this.dispatchEvent(e);
      if (!e.defaultPrevented) {
        // If the event was not "cancelled"
        this.input.value = ""; // then clear the input field
      }
    };
  }

  // When some of our attributes are set or changed, we need to set the
  // corresponding value on the internal <input> element. This life cycle
  // method, together with the static observedAttributes property below,
  // takes care of that.
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.input.disabled = newValue !== null;
    } else if (name === "placeholder") {
      this.input.placeholder = newValue;
    } else if (name === "size") {
      this.input.size = newValue;
    } else if (name === "value") {
      this.input.value = newValue;
    }
  }

  // Finally, we define property getters and setters for properties that
  // correspond to the HTML attributes we support. The getters simply return
  // the value (or the presence) of the attribute. And the setters just set
  // the value (or the presence) of the attribute. When a setter method
  // changes an attribute, the browser will automatically invoke the
  // attributeChangedCallback above.

  get placeholder() {
    return this.getAttribute("placeholder");
  }
  get size() {
    return this.getAttribute("size");
  }
  get value() {
    return this.getAttribute("value");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get hidden() {
    return this.hasAttribute("hidden");
  }

  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  set size(value) {
    this.setAttribute("size", value);
  }
  set value(text) {
    this.setAttribute("value", text);
  }
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  set hidden(value) {
    if (value) this.setAttribute("hidden", "");
    else this.removeAttribute("hidden");
  }
}

// This static field is required for the attributeChangedCallback method.
// Only attributes named in this array will trigger calls to that method.
SearchBox.observedAttributes = ["disabled", "placeholder", "size", "value"];

// Create a <template> element to hold the stylesheet and the tree of
// elements that we'll use for each instance of the SearchBox element.
SearchBox.template = document.createElement("template");

// We initialize the template by parsing this string of HTML. Note, however,
// that when we instantiate a SearchBox, we are able to just clone the nodes
// in the template and do have to parse the HTML again.
SearchBox.template.innerHTML = `
<style>
/*
 * The :host selector refers to the <search-box> element in the light
 * DOM. These styles are defaults and can be overridden by the user of the
 * <search-box> with styles in the light DOM.
 */
:host {
  display: inline-block;   /* The default is inline display */
  border: solid black 1px; /* A rounded border around the <input> and <slots> */
  border-radius: 5px;
  padding: 4px 6px;        /* And some space inside the border */
}
:host([hidden]) {          /* Note the parentheses: when host has hidden... */
  display:none;            /* ...attribute set don't display it */
}
:host([disabled]) {        /* When host has the disabled attribute... */
  opacity: 0.5;            /* ...gray it out */
}
:host([focused]) {         /* When host has the focused attribute... */
  box-shadow: 0 0 2px 2px #6AE;  /* display this fake focus ring. */
}

/* The rest of the stylesheet only applies to elements in the Shadow DOM. */
input {
  border-width: 0;         /* Hide the border of the internal input field. */
  outline: none;           /* Hide the focus ring, too. */
  font: inherit;           /* <input> elements don't inherit font by default */
  background: inherit;     /* Same for background color. */
}
slot {
  cursor: default;         /* An arrow pointer cursor over the buttons */
  user-select: none;       /* Don't let the user select the emoji text */
}
</style>
<div>
  <slot name="left">\u{1f50d}</slot>  <!-- U+1F50D is a magnifying glass -->
  <input type="text" id="input" />    <!-- The actual input element -->
  <slot name="right">\u{2573}</slot>  <!-- U+2573 is an X -->
</div>
`;

// Finally, we call customElement.define() to register the SearchBox element
// as the implementation of the <search-box> tag. Custom elements are required
// to have a tag name that contains a hyphen.
customElements.define("search-box", SearchBox);

function* sequence(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

[...sequence("abc", oneDigitPrimes())]; // => ["a","b","c",2,3,5,7]

// This object generates strictly increasing serial numbers
const serialnum = {
  // This data property holds the next serial number.
  // The _ in the property name hints that it is for internal use only.
  _n: 0,

  // Return the current value and increment it
  get next() {
    return this._n++;
  },

  // Set a new value of n, but only if it is larger than current
  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
  },
};
serialnum.next = 10; // Set the starting serial number
serialnum.next; // => 10
serialnum.next; // => 11: different value each time we get next

// Store the name/value pair as a cookie, encoding the value with
// encodeURIComponent() in order to escape semicolons, commas, and spaces.
// If daysToLive is a number, set the max-age attribute so that the cookie
// expires after the specified number of days. Pass 0 to delete a cookie.
function setCookie(name, value, daysToLive = null) {
  let cookie = `${name}=${encodeURIComponent(value)}`;
  if (daysToLive !== null) {
    cookie += `; max-age=${daysToLive * 60 * 60 * 24}`;
  }
  document.cookie = cookie;
}

function setTheme(name) {
  // Create a new <link rel="stylesheet"> element to load the named stylesheet
  let link = document.createElement("link");
  link.id = "theme";
  link.rel = "stylesheet";
  link.href = `themes/${name}.css`;

  // Look for an existing link with id "theme"
  let currentTheme = document.querySelector("#theme");
  if (currentTheme) {
    // If there is an existing theme, replace it with the new one.
    currentTheme.replaceWith(link);
  } else {
    // Otherwise, just insert the link to the theme stylesheet.
    document.head.append(link);
  }
}

let authHeaders = new Headers();
// Don't use Basic auth unless it is over an HTTPS connection.
authHeaders.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
fetch("/api/users/", { headers: authHeaders })
  .then((response) => response.json()) // Error handling omitted...
  .then((usersList) => displayAllUsers(usersList));

async function search(term) {
  let url = new URL("/api/search");
  url.searchParams.set("q", term);
  let response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  let resultsArray = await response.json();
  return resultsArray;
}

// Return the largest prime smaller than n, using the sieve of Eratosthenes
function sieve(n) {
  let a = new Uint8Array(n + 1); // a[x] will be 1 if x is composite
  let max = Math.floor(Math.sqrt(n)); // Don't do factors higher than this
  let p = 2; // 2 is the first prime
  while (p <= max) {
    // For primes less than max
    for (
      let i = 2 * p;
      i <= n;
      i += p // Mark multiples of p as composite
    )
      a[i] = 1;
    while (a[++p] /* empty */); // The next unmarked index is prime
  }
  while (a[n]) n--; // Loop backward to find the last prime
  return n; // And return it
}

// Smear the pixels of the rectangle to the right, producing a
// sort of motion blur as if objects are moving from right to left.
// n must be 2 or larger. Larger values produce bigger smears.
// The rectangle is specified in the default coordinate system.
function smear(c, n, x, y, w, h) {
  // Get the ImageData object that represents the rectangle of pixels to smear
  let pixels = c.getImageData(x, y, w, h);

  // This smear is done in-place and requires only the source ImageData.
  // Some image processing algorithms require an additional ImageData to
  // store transformed pixel values. If we needed an output buffer, we could
  // create a new ImageData with the same dimensions like this:
  //   let output_pixels = c.createImageData(pixels);

  // Get the dimensions of the grid of pixels in the ImageData object
  let width = pixels.width,
    height = pixels.height;

  // This is the byte array that holds the raw pixel data, left-to-right and
  // top-to-bottom. Each pixel occupies 4 consecutive bytes in R,G,B,A order.
  let data = pixels.data;

  // Each pixel after the first in each row is smeared by replacing it with
  // 1/nth of its own value plus m/nths of the previous pixel's value
  let m = n - 1;

  for (let row = 0; row < height; row++) {
    // For each row
    let i = row * width * 4 + 4; // The offset of the second pixel of the row
    for (let col = 1; col < width; col++, i += 4) {
      // For each column
      data[i] = (data[i] + data[i - 4] * m) / n; // Red pixel component
      data[i + 1] = (data[i + 1] + data[i - 3] * m) / n; // Green
      data[i + 2] = (data[i + 2] + data[i - 2] * m) / n; // Blue
      data[i + 3] = (data[i + 3] + data[i - 1] * m) / n; // Alpha component
    }
  }

  // Now copy the smeared image data back to the same position on the canvas
  c.putImageData(pixels, x, y);
}

const threads = require("worker_threads");

// The worker_threads module exports the boolean isMainThread property.
// This property is true when Node is running the main thread and it is
// false when Node is running a worker. We can use this fact to implement
// the main and worker threads in the same file.
if (threads.isMainThread) {
  // If we're running in the main thread, then all we do is export
  // a function. Instead of performing a computationally intensive
  // task on the main thread, this function passes the task to a worker
  // and returns a Promise that will resolve when the worker is done.
  module.exports = function reticulateSplines(splines) {
    return new Promise((resolve, reject) => {
      // Create a worker that loads and runs this same file of code.
      // Note the use of the special __filename variable.
      let reticulator = new threads.Worker(__filename);

      // Pass a copy of the splines array to the worker
      reticulator.postMessage(splines);

      // And then resolve or reject the Promise when we get
      // a message or error from the worker.
      reticulator.on("message", resolve);
      reticulator.on("error", reject);
    });
  };
} else {
  // If we get here, it means we're in the worker, so we register a
  // handler to get messages from the main thread. This worker is designed
  // to only receive a single message, so we register the event handler
  // with once() instead of on(). This allows the worker to exit naturally
  // when its work is complete.
  threads.parentPort.once("message", (splines) => {
    // When we get the splines from the parent thread, loop
    // through them and reticulate all of them.
    for (let spline of splines) {
      // For the sake of example, assume that spline objects usually
      // have a reticulate() method that does a lot of computation.
      spline.reticulate ? spline.reticulate() : (spline.reticulated = true);
    }

    // When all the splines have (finally!) been reticulated
    // pass a copy back to the main thread.
    threads.parentPort.postMessage(splines);
  });
}

// This is a simple static HTTP server that serves files from a specified
// directory. It also implements a special /test/mirror endpoint that
// echoes the incoming request, which can be useful when debugging clients.
const http = require("http"); // Use "https" if you have a certificate
const url = require("url"); // For parsing URLs
const path = require("path"); // For manipulating filesystem paths
const fs = require("fs"); // For reading files

// Serve files from the specified root directory via an HTTP server that
// listens on the specified port.
function serve(rootDirectory, port) {
  let server = new http.Server(); // Create a new HTTP server
  server.listen(port); // Listen on the specified port
  console.log("Listening on port", port);

  // When requests come in, handle them with this function
  server.on("request", (request, response) => {
    // Get the path portion of the request URL, ignoring
    // any query parameters that are appended to it.
    let endpoint = url.parse(request.url).pathname;

    // If the request was for "/test/mirror", send back the request
    // verbatim. Useful when you need to see the request headers and body.
    if (endpoint === "/test/mirror") {
      // Set response header
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");

      // Specify response status code
      response.writeHead(200); // 200 OK

      // Begin the response body with the request
      response.write(
        `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
      );

      // Output the request headers
      let headers = request.rawHeaders;
      for (let i = 0; i < headers.length; i += 2) {
        response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
      }

      // End headers with an extra blank line
      response.write("\r\n");

      // Now we need to copy any request body to the response body
      // Since they are both streams, we can use a pipe
      request.pipe(response);
    }
    // Otherwise, serve a file from the local directory.
    else {
      // Map the endpoint to a file in the local filesystem
      let filename = endpoint.substring(1); // strip leading /
      // Don't allow "../" in the path because it would be a security
      // hole to serve anything outside the root directory.
      filename = filename.replace(/\.\.\//g, "");
      // Now convert from relative to absolute filename
      filename = path.resolve(rootDirectory, filename);

      // Now guess the type file's content type based on extension
      let type;
      switch (path.extname(filename)) {
        case ".html":
        case ".htm":
          type = "text/html";
          break;
        case ".js":
          type = "text/javascript";
          break;
        case ".css":
          type = "text/css";
          break;
        case ".png":
          type = "image/png";
          break;
        case ".txt":
          type = "text/plain";
          break;
        default:
          type = "application/octet-stream";
          break;
      }

      let stream = fs.createReadStream(filename);
      stream.once("readable", () => {
        // If the stream becomes readable, then set the
        // Content-Type header and a 200 OK status. Then pipe the
        // file reader stream to the response. The pipe will
        // automatically call response.end() when the stream ends.
        response.setHeader("Content-Type", type);
        response.writeHead(200);
        stream.pipe(response);
      });

      stream.on("error", (err) => {
        // Instead, if we get an error trying to open the stream
        // then the file probably does not exist or is not readable.
        // Send a 404 Not Found plain-text response with the
        // error message.
        response.setHeader("Content-Type", "text/plain; charset=UTF-8");
        response.writeHead(404);
        response.end(err.message);
      });
    }
  });
}

// When we're invoked from the command line, call the serve() function
serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);

// This is how we could define a stats module
const stats = (function () {
  // Utility functions private to the module
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  // A public function that will be exported
  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  // A public function that we will export
  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }

  // We export the public function as properties of an object
  return { mean, stddev };
})();

// And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]); // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)

let data = [1, 1, 3, 5, 5]; // This is our array of numbers

// The mean is the sum of the elements divided by the number of elements
let total = 0;
for (let i = 0; i < data.length; i++) total += data[i];
let mean = total / data.length; // mean == 3; The mean of our data is 3

// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for (let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let stddev = Math.sqrt(total / (data.length - 1)); // stddev == 2

// First, define two simple functions
const sum = (x, y) => x + y;
const square = (x) => x * x;

// Then use those functions with Array methods to compute mean and stddev
let data = [1, 1, 3, 5, 5];
let mean = data.reduce(sum) / data.length; // mean == 3
let deviations = data.map((x) => x - mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
stddev; // => 2

const map = function (a, ...args) {
  return a.map(...args);
};
const reduce = function (a, ...args) {
  return a.reduce(...args);
};
const sum = (x, y) => x + y;
const square = (x) => x * x;

let data = [1, 1, 3, 5, 5];
let mean = reduce(data, sum) / data.length;
let deviations = map(data, (x) => x - mean);
let stddev = Math.sqrt(
  reduce(map(deviations, square), sum) / (data.length - 1)
);
stddev; // => 2

/**
 * An asynchronous function for streaming the body of a Response object
 * obtained from a fetch() request. Pass the Response object as the first
 * argument followed by two optional callbacks.
 *
 * If you specify a function as the second argument, that reportProgress
 * callback will be called once for each chunk that is received. The first
 * argument passed is the total number of bytes received so far. The second
 * argument is a number between 0 and 1 specifying how complete the download
 * is. If the Response object has no "Content-Length" header, however, then
 * this second argument will always be NaN.
 *
 * If you want to process the data in chunks as they arrive, specify a
 * function as the third argument. The chunks will be passed, as Uint8Array
 * objects, to this processChunk callback.
 *
 * streamBody() returns a Promise that resolves to a string. If a processChunk
 * callback was supplied then this string is the concatenation of the values
 * returned by that callback. Otherwise the string is the concatenation of
 * the chunk values converted to UTF-8 strings.
 */
async function streamBody(response, reportProgress, processChunk) {
  // How many bytes are we expecting, or NaN if no header
  let expectedBytes = parseInt(response.headers.get("Content-Length"));
  let bytesRead = 0; // How many bytes received so far
  let reader = response.body.getReader(); // Read bytes with this function
  let decoder = new TextDecoder("utf-8"); // For converting bytes to text
  let body = ""; // Text read so far

  while (true) {
    // Loop until we exit below
    let { done, value } = await reader.read(); // Read a chunk

    if (value) {
      // If we got a byte array:
      if (processChunk) {
        // Process the bytes if
        let processed = processChunk(value); // a callback was passed.
        if (processed) {
          body += processed;
        }
      } else {
        // Otherwise, convert bytes
        body += decoder.decode(value, { stream: true }); // to text.
      }

      if (reportProgress) {
        // If a progress callback was
        bytesRead += value.length; // passed, then call it
        reportProgress(bytesRead, bytesRead / expectedBytes);
      }
    }
    if (done) {
      // If this is the last chunk,
      break; // exit the loop
    }
  }

  return body; // Return the body text we accumulated
}

// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for iterable object
  while (n-- > 0) {
    // Loop n times:
    let next = it.next(); // Get the next item from the iterator.
    if (next.done) return;
    // If there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}

// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())]; // => [1, 1, 2, 3, 5]

// Return the plain-text content of element e, recursing into child elements.
// This method works like the textContent property
function textContent(e) {
  let s = ""; // Accumulate the text here
  for (let child = e.firstChild; child !== null; child = child.nextSibling) {
    let type = child.nodeType;
    if (type === 3) {
      // If it is a Text node
      s += child.nodeValue; // add the text content to our string.
    } else if (type === 1) {
      // And if it is an Element node
      s += textContent(child); // then recurse.
    }
  }
  return s;
}

// This function takes a function and returns a wrapped version
function timed(f) {
  return function (...args) {
    // Collect args into a rest parameter array
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      // Pass all of our arguments to the wrapped function
      return f(...args); // Spread the args back out again
    } finally {
      // Before we return the wrapped return value, print elapsed time.
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
    }
  };
}

// Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// Now invoke the timed version of that test function
timed(benchmark)(1000000); // => 500000500000; this is the sum of the numbers

// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
  let original = o[m]; // Remember original method in the closure.
  o[m] = function (...args) {
    // Now define the new method.
    console.log(new Date(), "Entering:", m); // Log message.
    let result = original.apply(this, args); // Invoke original.
    console.log(new Date(), "Exiting:", m); // Log message.
    return result; // Return result.
  };
}

// Shear transform:
//   x' = x + kx*y;
//   y' = ky*x + y;
function shear(c, kx, ky) {
  c.transform(1, ky, kx, 1, 0, 0);
}

// Rotate theta radians counterclockwise around the point (x,y)
// This can also be accomplished with a translate, rotate, translate sequence
function rotateAbout(c, theta, x, y) {
  let ct = Math.cos(theta);
  let st = Math.sin(theta);
  c.transform(ct, -st, st, ct, -x * ct - y * st + x, x * st - y * ct + y);
}

// Recursively traverse the Document or Element e, invoking the function
// f on e and on each of its descendants
function traverse(e, f) {
  f(e); // Invoke f() on e
  for (let child of e.children) {
    // Iterate over the children
    traverse(child, f); // And recurse on each one
  }
}

function traverse2(e, f) {
  f(e); // Invoke f() on e
  let child = e.firstElementChild; // Iterate the children linked-list style
  while (child !== null) {
    traverse2(child, f); // And recurse
    child = child.nextElementSibling;
  }
}

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;

// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
  return uniqueInteger.counter++; // Return and increment counter property
}
uniqueInteger(); // => 0
uniqueInteger(); // => 1

let uniqueInteger = (function () {
  // Define and invoke
  let counter = 0; // Private state of function below
  return function () {
    return counter++;
  };
})();
uniqueInteger(); // => 0
uniqueInteger(); // => 1

// The canvas.toBlob() function is callback-based.
// This is a Promise-based wrapper for it.
async function getCanvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(resolve);
  });
}

// Here is how we upload a PNG file from a canvas
async function uploadCanvasImage(canvas) {
  let pngblob = await getCanvasBlob(canvas);
  let formdata = new FormData();
  formdata.set("canvasimage", pngblob);
  let response = await fetch("/upload", { method: "POST", body: formdata });
  let body = await response.json();
}

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // These control the Promise
    // If the argument is invalid, reject the Promise
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    // Otherwise, wait asynchronously and then resolve the Promise.
    // setTimeout will invoke resolve() with no arguments, which means
    // that the Promise will fulfill with the undefined value.
    setTimeout(resolve, duration);
  });
}

// Begin by creating an audioContext object. Safari still requires
// us to use webkitAudioContext instead of AudioContext.
let audioContext = new (this.AudioContext || this.webkitAudioContext)();

// Define the base sound as a combination of three pure sine waves
let notes = [293.7, 370.0, 440.0]; // D major chord: D, F# and A

// Create oscillator nodes for each of the notes we want to play
let oscillators = notes.map((note) => {
  let o = audioContext.createOscillator();
  o.frequency.value = note;
  return o;
});

// Shape the sound by controlling its volume over time.
// Starting at time 0 quickly ramp up to full volume.
// Then starting at time 0.1 slowly ramp down to 0.
let volumeControl = audioContext.createGain();
volumeControl.gain.setTargetAtTime(1, 0.0, 0.02);
volumeControl.gain.setTargetAtTime(0, 0.1, 0.2);

// We're going to send the sound to the default destination:
// the user's speakers
let speakers = audioContext.destination;

// Connect each of the source notes to the volume control
oscillators.forEach((o) => o.connect(volumeControl));

// And connect the output of the volume control to the speakers.
volumeControl.connect(speakers);

// Now start playing the sounds and let them run for 1.25 seconds.
let startTime = audioContext.currentTime;
let stopTime = startTime + 1.25;
oscillators.forEach((o) => {
  o.start(startTime);
  o.stop(stopTime);
});

// If we want to create a sequence of sounds we can use event handlers
oscillators[0].addEventListener("ended", () => {
  // This event handler is invoked when the note stops playing
});

function words(s) {
  var r = /\s+|$/g; // Match one or more spaces or end
  r.lastIndex = s.match(/[^ ]/).index; // Start matching at first nonspace
  return {
    // Return an iterable iterator object
    [Symbol.iterator]() {
      // This makes us iterable
      return this;
    },
    next() {
      // This makes us an iterator
      let start = r.lastIndex; // Resume where the last match ended
      if (start < s.length) {
        // If we're not done
        let match = r.exec(s); // Match the next word boundary
        if (match) {
          // If we found one, return the word
          return { value: s.substring(start, match.index) };
        }
      }
      return { done: true }; // Otherwise, say that we're done
    },
  };
}

[...words(" abc def  ghi! ")]; // => ["abc", "def", "ghi!"]

function write(stream, chunk, callback) {
  // Write the specified chunk to the specified stream
  let hasMoreRoom = stream.write(chunk);

  // Check the return value of the write() method:
  if (hasMoreRoom) {
    // If it returned true, then
    setImmediate(callback); // invoke callback asynchronously.
  } else {
    // If it returned false, then
    stream.once("drain", callback); // invoke callback on drain event.
  }
}

// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
  // Get an iterator for each iterable
  let iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    // While there are still some iterators
    if (index >= iterators.length) {
      // If we reached the last iterator
      index = 0; // go back to the first one.
    }
    let item = iterators[index].next(); // Get next item from next iterator.
    if (item.done) {
      // If that iterator is done
      iterators.splice(index, 1); // then remove it from the array.
    } else {
      // Otherwise,
      yield item.value; // yield the iterated value
      index++; // and move on to the next iterator.
    }
  }
}

// Interleave three iterable objects
[...zip(oneDigitPrimes(), "ab", [0])]; // => [2,"a",0,3,"b",5,7]

// This utility function asynchronously obtains the database object (creating
// and initializing the DB if necessary) and passes it to the callback.
function withDB(callback) {
  let request = indexedDB.open("zipcodes", 1); // Request v1 of the database
  request.onerror = console.error; // Log any errors
  request.onsuccess = () => {
    // Or call this when done
    let db = request.result; // The result of the request is the database
    callback(db); // Invoke the callback with the database
  };

  // If version 1 of the database does not yet exist, then this event
  // handler will be triggered. This is used to create and initialize
  // object stores and indexes when the DB is first created or to modify
  // them when we switch from one version of the DB schema to another.
  request.onupgradeneeded = () => {
    initdb(request.result, callback);
  };
}

// withDB() calls this function if the database has not been initialized yet.
// We set up the database and populate it with data, then pass the database to
// the callback function.
//
// Our zip code database includes one object store that holds objects like this:
//
//   {
//     zipcode: "02134",
//     city: "Allston",
//     state: "MA",
//   }
//
// We use the "zipcode" property as the database key and create an index for
// the city name.
function initdb(db, callback) {
  // Create the object store, specifying a name for the store and
  // an options object that includes the "key path" specifying the
  // property name of the key field for this store.
  let store = db.createObjectStore(
    "zipcodes", // store name
    { keyPath: "zipcode" }
  );

  // Now index the object store by city name as well as by zip code.
  // With this method the key path string is passed directly as a
  // required argument rather than as part of an options object.
  store.createIndex("cities", "city");

  // Now get the data we are going to initialize the database with.
  // The zipcodes.json data file was generated from CC-licensed data from
  // www.geonames.org: https://download.geonames.org/export/zip/US.zip
  fetch("zipcodes.json") // Make an HTTP GET request
    .then((response) => response.json()) // Parse the body as JSON
    .then((zipcodes) => {
      // Get 40K zip code records
      // In order to insert zip code data into the database we need a
      // transaction object. To create our transaction object, we need
      // to specify which object stores we'll be using (we only have
      // one) and we need to tell it that we'll be doing writes to the
      // database, not just reads:
      let transaction = db.transaction(["zipcodes"], "readwrite");
      transaction.onerror = console.error;

      // Get our object store from the transaction
      let store = transaction.objectStore("zipcodes");

      // The best part about the IndexedDB API is that object stores
      // are *really* simple. Here's how we add (or update) our records:
      for (let record of zipcodes) {
        store.put(record);
      }

      // When the transaction completes successfully, the database
      // is initialized and ready for use, so we can call the
      // callback function that was originally passed to withDB()
      transaction.oncomplete = () => {
        callback(db);
      };
    });
}

// Given a zip code, use the IndexedDB API to asynchronously look up the city
// with that zip code, and pass it to the specified callback, or pass null if
// no city is found.
export function lookupCity(zip, callback) {
  withDB((db) => {
    // Create a read-only transaction object for this query. The
    // argument is an array of object stores we will need to use.
    let transaction = db.transaction(["zipcodes"]);

    // Get the object store from the transaction
    let zipcodes = transaction.objectStore("zipcodes");

    // Now request the object that matches the specified zipcode key.
    // The lines above were synchronous, but this one is async.
    let request = zipcodes.get(zip);
    request.onerror = console.error; // Log errors
    request.onsuccess = () => {
      // Or call this function on success
      let record = request.result; // This is the query result
      if (record) {
        // If we found a match, pass it to the callback
        callback(`${record.city}, ${record.state}`);
      } else {
        // Otherwise, tell the callback that we failed
        callback(null);
      }
    };
  });
}

// Given the name of a city, use the IndexedDB API to asynchronously
// look up all zip code records for all cities (in any state) that have
// that (case-sensitive) name.
export function lookupZipcodes(city, callback) {
  withDB((db) => {
    // As above, we create a transaction and get the object store
    let transaction = db.transaction(["zipcodes"]);
    let store = transaction.objectStore("zipcodes");

    // This time we also get the city index of the object store
    let index = store.index("cities");

    // Ask for all matching records in the index with the specified
    // city name, and when we get them we pass them to the callback.
    // If we expected more results, we might use openCursor() instead.
    let request = index.getAll(city);
    request.onerror = console.error;
    request.onsuccess = () => {
      callback(request.result);
    };
  });
}

import { lookupCity, lookupZipcodes } from "./zipcodeDatabase.js";

window.addEventListener("load", () => {
  let zipcodeInput = document.querySelector("#zipcodeInput");
  let cityOutput = document.querySelector("#cityOutput");
  zipcodeInput.onchange = () => {
    lookupCity(zipcodeInput.value, (city) => {
      cityOutput.value = city || "Unknown zip code";
    });
  };

  let cityInput = document.querySelector("#cityInput");
  let zipcodesOutput = document.querySelector("#zipcodesOutput");
  cityInput.onchange = () => {
    zipcodesOutput.textContent = "Matching zipcodes:";
    lookupZipcodes(cityInput.value, (zipcodes) => {
      zipcodes.forEach((zip) => {
        let item = document.createElement("li");
        item.append(`${zip.zipcode}: ${zip.city}, ${zip.state}`);
        zipcodesOutput.append(item);
      });
    });
  };
});

