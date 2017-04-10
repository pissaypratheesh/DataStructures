/**
 * Created by m01352 on 10/04/17.
 */
function Heap (arr) {
    this.content = [null]; //
    if (arr) arr.forEach(this.insert.bind(this));
}

Heap.prototype = {
    // returns the top val and sets it after
    peak: function(data) {return this.content[1]},
    insert: function(data) {
        this.bubble(this.content.push(data) -1);
    },
    popMin: function() {
        var topVal = this.content[1];
        this.content[1] = this.content.pop();
        this.sink(1);
        return topVal;
    },
    bubble: function(i) {
        var parentIndex = Math.floor(i/2);
        if (this.content[parentIndex] > this.content[i]) {
            this.swap(i, parentIndex);
            this.bubble(parentIndex);
        }
    },
    sink: function(i) {
        var leftLesser = this.content[i*2]
            < this.content[i*2 +1];
        var childIndex = leftLesser? i*2 : i*2 +1;

        if (this.content[childIndex] < this.content[i]) {
            this.swap(i, childIndex);
            this.sink(i);
        }
    },
    swap: function(i,j) {
        if (j< 0) j += this.content.length;
        this.content[i] ^= this.content[j];
        this.content[j] ^= this.content[i];
        this.content[i] ^= this.content[j];
    }
}

////////////////////////////////////////////////////////////

//var heap = new Heap([9,1,5,8,5,7,0]);
var heap = new Heap([2,3,1,5,9,1]);
console.log(heap.content);

heap.popMin();
console.log(heap.content);

heap.insert(0);
console.log(heap.content);