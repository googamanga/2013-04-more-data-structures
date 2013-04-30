var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var newNode = makeNode(value);
    if (newLinkedList.head === null) {
      newLinkedList.head = newNode;
    } else {
      //list is not empty
      newLinkedList.tail.next = newNode;
    }
    newLinkedList.tail = newNode;
    return value;
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
