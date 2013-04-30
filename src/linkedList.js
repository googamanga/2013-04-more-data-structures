// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var newNode = makeNode(value);
    newLinkedList.tail = newNode;
    if (newLinkedList.head === null) {
      newLinkedList.head = newNode;
    }
    return newLinkedList;
  };

  newLinkedList.removeHead = function(){
  };

  newLinkedList.contains = function(){
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
