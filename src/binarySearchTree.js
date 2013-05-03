////////////////////////////////
/*
Implement a binarySearchTree class with the following properties:
A .left property, a binary search tree (BST) where all values are lower than than it the current value.
A .right property, a BST where all values are higher than than it the current value.
A .insert() method, which accepts a value and places in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  */
var makeBinarySearchTree = function(){
  var newTree = {
    left: null,
    right: null,
    insert: function(value){
      if( typeof value !== 'number') throw new Error("should input a number");
      if(!this.value ){
        this.value = value;
        return this;
      }
      //.insert(value) to right or left
      if(value > this.value) {
        this.right = this.right || makeBinarySearchTree();
        this.right.insert(value);
      } else {
        this.left = this.left || makeBinarySearchTree();
        this.left.insert(value);
      }
      return this;
    },
    contains: function(value){
      if (!this.value) return false;
      if (this.value === value) return true;
      return !!((this.left && this.left.contains(value)) ||
             (this.right && this.right.contains(value))) ;
    },
    depthFirstLog: function(callback){

    }
  };
  return newTree;
};