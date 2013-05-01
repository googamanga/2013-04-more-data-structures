var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  this.children.push(newChild);
  return newChild;
};

treeMethods.contains = function(value){
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].value === value) {
      return true;
    }
  }
  return false;
};
