---
templateKey: blog-post
title: Heap Maps 101
date: 2018-10-20T14:04:10.000Z
isFeaturedPost: false
draft: true
description: What is a heap map? How can I implement one one in JavaScript? All that and more in this blog post breaking down heap maps.
featuredImage: /img/heap-map-rundown.png
thumbnail: /img/heap-map-rundown.png
tags:
  - tutorial
  - tech
  - algoritms
---

Great another tutorial on heap maps. Good news is there can never be enough tutorials on heap maps because they can be trick to understand. First thing to know is a heap map is a set of values stored in a specific order that allows efficient access or modification. Heap maps are usually represented in a tree structure and there is only two sorting directions the tree values can be stored. Heap map can be either be ascending (smallest number is at the top) called a **min heap** or descending(where the largest number is at the top) known as a **max heap**.

!["Binary Min Max Heap Map Comparison"](/img/min-max-heap-diagram.png "Binary Min Max Heap Map Comparison")

### Why use a heap map
We have to first look at the problem we are trying to solve. If you want to find the smallest or the largest element quickly then heap map is the answer. This is because we are always sorting the heap when elements are entering or leaving. One of the biggest benefits is not having to look at every element when sorting elements. In tree structure, after looking at the first row of children and determining which branch to follow we are eliminating having to look at least half of the tree. In small heap maps the benefits may not be apparent but with larger heap map it is plenty. 

The most common implementation of heaps are the _binary_ kind. This is where a parent node can only have up to _two_ child. And we can track the parent's children using a solution like this.
```javascript
class Node {
  constructor(val, left, right) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
```
The reason why binary heap maps are so common is because instead of worrying about linking and keeping track of objects, we can take advantage of using an array to store and sort the values. We will always be able to find a parent's left child by using this fail proof -- super complicated -- formula of `index * 2` and the right child `(index*2) + 1`. As an alternative we can find a child's parent by doing another fool proof -- even more complicated -- formula of `index / 2`.

**Examples of Heap Maps**
- A* Algoritrim
- Priority Queues
- Patients in an emergency rooms
- Whole Food checkout customers ¯\ __ (ツ) __ /¯

### [Are Priority Queues and Heap Maps the same](#priority-queue-verses-heap-map)
Short answer. Yes. Priority queues are an idea verses an implementation. Long answer. Ummmmmm, sure! Priority queues can have any underlying data structure like an array, link list, hash map, binary tree, or a heap map. As long as you can get the highest priority element, it is an priority queue. And depending which operation (peek, add, remove) needs to be the most efficient is best way to chose the data structure to use.  

!["Data Structure Runtime Representations"](/img/lmu-data-structure-references.png "Data Structure Runtime Representations")

Source [CS LMU edu](https://cs.lmu.edu/~ray/notes/pqueues/)

As a small side note: Usually when choosing a heap structure we would like to only remove the `peek` element. But we are not limited to that. We can remove any element by creating another function. If removing a random element is a very important feature, it would be best to choose a different data structure like a binary search tree(BST). This is because heaps are better at finding the min or max. Whereas binary search trees are good at find all elements, since its ordered from left to right.

***

Another note: You will notice through out this tutorial I left the array index 0 as null. When learning how to implement an heap maps most tutorials I followed were not in JavaScript and left the the first index 0 as well. And I wanted you to have a good comparison when looking at other tutorials.

### [Peek](#peak)
Element at index 1. It is constant time look up. **Θ(1)**

### [Add](#add)
When an element is added to the heap map we push it to the last index of the array. Then we would need to "bubble it up". This new element will alway be a child element until it is in its final position. So we need to compare the child element and swap array indexes as needed. 

This can be done on logarithmic time **Θ(log n)**

Let's begin 

!["Min Heap Add Step 1"](/img/min-heap-add-1-wide.png "Min Heap Add Step 1")

*** 

We first start with adding the new element to the back of the array. 
!["Min Heap Add Step 2"](/img/min-heap-add-2-wide.png "Min Heap Add Step 2")
```javascript
this.heap.push(element);
```

***

We then need to compare this new element to its parent to see if it smaller or larger. In this case 2 is smaller then 7. We can swap the two elements.
!["Min Heap Add Step 3"](/img/min-heap-add-3-wide.png "Min Heap Add Step 3")
```javascript
if (parent <= element) { break; } // false
```

!["Min Heap Add Step 4"](/img/min-heap-add-4-wide.png "Min Heap Add Step 4")
```javascript
else {
  this.heap[parentN] = element;
  this.heap[n] = parent;
}
```

**The first loop is over so we start the comparisons again**

***

We then need to compare the new element to its parent to see if it smaller or larger. In this case 4 is NOT smaller then 3. Therefore it can stay at its current index.
!["Min Heap Add Step 5"](/img/min-heap-add-5-wide.png "Min Heap Add Step 5")
```javascript
if (parent <= element) { break; } // true
```

**YAY the heap is in order!!!!**

### POP

When an element is removed it creates an hole in the array. We need to fill that hole with the last element in the array. 

We would then need to shuffle the element down in to the correct balanced position. By doing so we are comparing the element's with it's new children  and swapping array indexes when needed.

This can be done on logarithmic time **Θ(log n)**

Let's begin.

!["Min Heap Pop Step 1"](/img/pop-min-heap-1-wide.png "Min Heap Pop Step 1")

***

We need to remove the first index by replacing it with the last index in the array. 

!["Min Heap Pop Step 2"](/img/pop-min-heap-2-wide.png "Min Heap Pop Step 2")
```javascript
const peek = this.heap[1];
```
!["Min Heap Pop Step 3"](/img/pop-min-heap-3-wide.png "Min Heap Pop Step 3")
```javascript
const end = this.heap.pop();
this.heap[1] = end;
```
***

We need to check the left child against the parent to see if it is smaller. In this case 5 is smaller then 22. Now lets save the index number of the left child which is 2.
!["Min Heap Pop Step 4"](/img/pop-min-heap-4-wide.png "Min Heap Pop Step 4")
```javascript
var leftScore = this.compare(parent, leftChild);
if (leftScore > 0) { // true
  swapN = leftN;
}
```

***

We will do the same comparison to the right child. In this case 7 is smaller then 22. But before we can save the child's index we need to compare it to the left child. 5 is smaller then 7 so we actually don't need to save the the right child's index.

!["Min Heap Pop Step 5a"](/img/pop-min-heap-5-wide.png "Min Heap Pop Step 5a")
```javascript
const rightScore = this.compare(parent, rightChild);
```
!["Min Heap Pop Step 5b"](/img/pop-min-heap-5b-wide.png "Min Heap Pop Step 5b")
```javascript
if (rightScore > leftScore) { // false
  swapN = rightN;
}
```

***

Now we swap the indexes between the parent and child
!["Min Heap Pop Step 6"](/img/pop-min-heap-6-wide.png "Min Heap Pop Step 6")
```javascript
// swapN = leftN
this.heap[n] = this.heap[swapN];
this.heap[swapN] = parent;
n = swapN;
```

**The first loop is over so we start the comparisons again**

***

We need to check the left child against the parent to see if it is smaller. In this case 34 is NOT smaller then 22. So we do NOT save the index number of the left child.

!["Min Heap Pop Step 7"](/img/pop-min-heap-7-wide.png "Min Heap Pop Step 7")
```javascript
var leftScore = this.compare(parent, leftChild);
if (leftScore > 0) { // false
  swapN = leftN;
}
```

***
Next we comparison the right child it's parent. In this case 15 is smaller then 22. Since we haven't saved a "swap" index and we know the child is smaller then it's parent, we can save the index number of the right child which is 5.

!["Min Heap Pop Step 8"](/img/pop-min-heap-8-wide.png "Min Heap Pop Step 8")
```javascript
const rightScore = this.compare(parent, rightChild);
```
!["Min Heap Pop Step 9"](/img/pop-min-heap-9-wide.png "Min Heap Pop Step 9")
```javascript
if ((swapN == null && rightScore > 0)) { // true
  swapN = rightN;
}
```

***

Now we swap the indexes between the parent and child

!["Min Heap Pop Step 10"](/img/pop-min-heap-10-wide.png "Min Heap Pop Step 10")
```javascript
// swapN = rightN
this.heap[n] = this.heap[swapN];
this.heap[swapN] = parent;
n = swapN;
```

**YAY the heap is in order!!!!**

When learning how to implement an heap map I followed [Eloquent JavaScript](http://eloquentjavascript.net/1st_edition/appendix2.html) heap map implementation. It has a score function, which I didn't found it not very useful. So I created a `compare` function that determines if the parent is larger by returning a positive number.

Now the part we have all been waiting for. The full code!!!
```javascript
class BinaryHeap {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare || this.compareFunction;
  }
  /**
   * Get the length of the heap
   *
   * return number
   */
  size() {
    return this.heap.length;
  }

  /**
   * Determing if the parent is larger then its child.
   * Returning a positive number means parent is larger
   * @param {number} parent
   * @param {number} child
   *
   * return number
   */
  compareFunction(parent, child) {
    return parent - child;
  }

  /**
   * Get the peek element fill the in the holw with the last element in array
   * Then sort the replaced element.
   *
   * return number
   */
  pop() {
    const peek = this.heap[1]; // 1
    const end = this.heap.pop(); // 9
    if (this.size() > 1) {
      this.heap[1] = end;
      this.sinkDown(1);
    }
    return peek;
  }

  /**
   * Add new elements to the end of the array then sort
   *
   * @param {number} element
   *
   * return null
   */
  add(element) {
    this.heap.push(element);
    this.bubbleUp(this.size() - 1);
    // console.log(JSON.parse(JSON.stringify(this.heap)));
  }

  /**
   * Sorting the current element by comparing it parent to see
   * if it is smaller
   *
   * @param {number} n the index number of the current element
   */
  bubbleUp(n) {
    const element = this.heap[n];
    // When at 1, we are at the peek.
    while (n > 1) {
      // Compute the parent element's index, and fetch it.
      const parentN = Math.floor((n + 1) / 2);
      const parent = this.heap[parentN];
      // if we get a positive number, then the parent is larger
      // and we can leave it in its current index
      if (this.compare(parent, element) < 0) break;

      //Otherwise swap the parent and child
      this.heap[parentN] = element;
      this.heap[n] = parent;
      n = parentN;
    }
  }

  sinkDown(n) {
    const length = this.size();
    const parent = this.heap[n];

    while (true) { // we break out the loop when we can no longer swap elements
      // Get child elements indexes.
      const leftN = n * 2;
      const rightN = leftN + 1;
      // This is used to store the new position of the element
      let swapN = null;
      // If the first child exists (is inside the array)...
      if (leftN < length) {
        const leftChild = this.heap[leftN];
        //positive result means the parent is larger
        var leftScore = this.compare(parent, leftChild);
        if (leftScore > 0) swapN = leftN;
      }
      // Do the same checks for the other child.
      if (rightN < length) {
        const rightChild = this.heap[rightN];
        const rightScore = this.compare(parent, rightChild);
        // check if swap is null and parent is bigger
        // Otherwise if the rightScore is bigger it means its the smaller child
        // we need to set the swap index to the smaller child index
        if ((swapN == null && rightScore > 0) || rightScore > leftScore) {
          swapN = rightN;
        }
      }
      
      // No need to swap further, we are done.
      if (swapN == null) break;

      // Otherwise, swap and continue the loop.
      this.heap[n] = this.heap[swapN];
      this.heap[swapN] = parent;
      n = swapN;
    }
  }
}
```

Try it our ourself.
```javascript
const heap = new BinaryHeap();
[34, 15, 22, 7, 5, 3].forEach(ele => {
  heap.add(ele);
});
// When looping the console will show the ending heap map over and over. 
//You can use this to see whats in going on step by step in the console.
// It is hacky don't quote me. :)
console.log(JSON.parse(JSON.stringify(heap.heap)));
```
