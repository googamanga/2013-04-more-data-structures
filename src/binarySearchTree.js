
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
      if (this.value) callback(this.value);
      if (this.left) this.left.depthFirstLog(callback);
      if (this.right) this.right.depthFirstLog(callback);
    },
    mapDepthFirstLog: function(callback, results){
      results = results || [];
      if (this.value) results.push(callback(this.value));
      if (this.left) this.left.mapDepthFirstLog(callback, results);
      if (this.right) this.right.mapDepthFirstLog(callback, results);
      return results;
    },
    mapDepthFirstLogTwo: function(callback){
      var args = Array.prototype.slice.call(arguments, 1);
      results = [];
      var recursive = function(tree) {
        if (tree.value) results.push(callback.apply(window, [tree.value].concat(args) ));
        if (tree.left) recursive(tree.left);
        if (tree.right) recursive(tree.right);
      };
      recursive(this);
      return results;
    }
  };
  return newTree;
};