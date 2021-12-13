# The queue data structure (JS)(PY)

{% embed url="https://jsfiddle.net/bgoonz/8kLv015j/embedded/js/dark" %}

### The queue data structure <a href="#1-the-queue-data-structure" id="1-the-queue-data-structure"></a>

If you enjoy traveling (like I do), most likely you passed the check-in process at the airport. If there are a lot of travelers willing to check-in, naturally a queue of people is formed at the check-in desk.

[![Airport Check-In Queue](https://dmitripavlutin.com/static/74238f7d04ea1cd6e04eb09ba0a9dd77/b60ba/airport-queue.jpg)](https://dmitripavlutin.com/static/74238f7d04ea1cd6e04eb09ba0a9dd77/a6028/airport-queue.jpg)

A traveler who's just entered the airport and wants to check-in is going to _enqueue_ into the queue. Another traveler that has just passed the check-in process at the desk is _dequeued_ from the queue.

This is the real-world example of a queue — and the queue data structure works the same way.

The queue is a type of First Input-First Output (FIFO) data structure. The first enqueued item (input) is the first to dequeue (output).

A queue has 2 pointers: head and tail. The earliest enqueued item in the queue is at the _head_, while the latest enqueued item is at the _tail_ of the queue.

Recalling the airport example, the traveler at the check-in desk is the head of the queue. The traveler who has just entered the queue is at the tail.

![Queue Data Structure](https://dmitripavlutin.com/2e1aee372cae31a13b0809df4ac606ff/queue-12.svg)

From a higher-point of view, the queue is the data structure that lets you process items, one at a time, in the same order they come in.

### 2. The operations on queues <a href="#2-the-operations-on-queues" id="2-the-operations-on-queues"></a>

The queue supports 2 main operations: enqueue and dequeue. Additionally, you might find it useful to have the peek and length operations.

#### 2.1 Enqueue operation <a href="#21-enqueue-operation" id="21-enqueue-operation"></a>

The enqueue operation inserts an item at the tail of the queue. The enqueued item becomes the tail of the queue.

![Queue: Enqueue Operation](https://dmitripavlutin.com/12d9d3b766b1bcea5ed3db2bba5508a2/enqueue.svg)

The enqueue operation in the picture above inserts the item `8` at the tail. `8` becomes the tail of the queue.

```
queue.enqueue(8);
```

#### 2.2 Dequeue operation <a href="#22-dequeue-operation" id="22-dequeue-operation"></a>

The dequeue operation extracts the item at the head of the queue. The next item in the queue becomes the head.

![Queue Data Structure: Dequeue Operation](https://dmitripavlutin.com/e0cd562e31b3ef1550b5a399b34f5578/dequeue.svg)

In the picture above the dequeue operation returns and removes the item `7` from the queue. After dequeue, item `2` becomes the new head.

```
queue.dequeue(); // => 7
```

#### 2.3 Peek operation <a href="#23-peek-operation" id="23-peek-operation"></a>

The peek operation reads the head of the queue, without altering the queue.

![Queue Data Structure: Peek Operation](https://dmitripavlutin.com/b700f665b9187f27e80847d1e5a06ad9/peek.svg)

Item `7` is the head of the queue in the picture above. The peek operation simply returns the head — the item `7` — without modifying the queue.

```
queue.peek(); // => 7
```

#### 2.4 Queue length <a href="#24-queue-length" id="24-queue-length"></a>

Length operation counts how many items the queue contains.

![Queue Data Structure: Length](https://dmitripavlutin.com/94122f61db4215e6e87974873dc60aad/length.svg)

The queue in the picture has 4 items: `4`, `6`, `2`, and `7`. As result, the queue length is `4`.

```
queue.length; // => 4
```

#### 2.5 Queue operations time complexity <a href="#25-queue-operations-time-complexity" id="25-queue-operations-time-complexity"></a>

What's important regarding all of the queue operations — enqueue, dequeue, peek and length — all these operations must be performed in constant time `O(1)`.

The constant time `O(1)` means that no matter the size of the queue (it can have 10 or 1 million items): the enqueue, dequeue, peek and length operations must be performed at relatively the same time.

### 3. Implementing a queue in JavaScript <a href="#3-implementing-a-queue-in-javascript" id="3-implementing-a-queue-in-javascript"></a>

Let's look at a possible implementation of the queue data structure while maintaining the requirement that all operations must perform in constant time `O(1)`.

```
class Queue {  constructor() {    this.items = {};    this.headIndex = 0;    this.tailIndex = 0;  }  enqueue(item) {    this.items[this.tailIndex] = item;    this.tailIndex++;  }  dequeue() {    const item = this.items[this.headIndex];    delete this.items[this.headIndex];    this.headIndex++;    return item;  }  peek() {    return this.items[this.headIndex];  }  get length() {    return this.tailIndex - this.headIndex;  }}const queue = new Queue();queue.enqueue(7);queue.enqueue(2);queue.enqueue(6);queue.enqueue(4);queue.dequeue(); // => 7queue.peek();    // => 2queue.length;    // => 3
```

[Try the demo.](https://jsfiddle.net/dmitri_pavlutin/g6pd4hqb/2/)

`const queue = new Queue()` is how you create an instance of a queue.

Calling `queue.enqueue(7)` method enqueues the item `7` into the queue.

`queue.dequeue()` dequeues a head item from the queue, while `queue.peek()` just peeks the item at the head.

Finally, `queue.length` shows how many items are still in the queue.

Regarding the implementation: inside the `Queue` class the plain object `this.items` keeps the items of the queue by a numerical index. The index of the head item is tracked by `this.headIndex`, and the tail item is tracked by `this.tailIndex`.

_**Queue**_** methods complexity**

`queue()`, `dequeue()`, `peek()` and `length()` methods of the `Queue` class use only:

- Property accessors (e.g. `this.items[this.headIndex]`),
- Or perform aritmetical operations (e.g. `this.headIndex++`)

Thus the time complexity of these methods is constant time `O(1)`.

### 4. Summary <a href="#4-summary" id="4-summary"></a>

The queue data structure is a type of First Input First Output (FIFO): the earliest enqueued item is the earlies to dequeue.

The queue has 2 main operations: enqueue and dequeue. Additionally, queues can have helper operations like peek and length.

All queue operations have to be performed in constant time `O(1)`.
