var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  newTree.detachFromParent = treeMethods.detachFromParent;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  newChild.parent = this;
  this.children.push(newChild);
  return newChild;
};

treeMethods.contains = function(value){
  if(this.value === value) {
      return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if (this.children[i].contains(value)) return true;
  }
  return false;
};

treeMethods.detachFromParent = function() {
  var tree = this;
  // find and remove tree from parent's children array
  if (tree.parent) {
    var parent = tree.parent;
    for (var j = 0; j < parent.children.length; j++) {
      if (parent.children[j] === tree) {
        break;
      }
    }
    if (j < parent.children.length) {
      parent.children.splice(j, 1);
    } else {
      throw new Error("Corrupt Tree. Can't remove child from parent");
    }
  }

  tree.parent = null;
  return tree;
};
