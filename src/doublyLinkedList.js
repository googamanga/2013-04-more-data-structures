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

  newLinkedList.addToHead = function(value){
    var newNode = makeNode(value);
    if (newLinkedList.head === null) {
      // list is empty
      newLinkedList.tail = newNode;
    } else {
      //list is not empty
      newLinkedList.head.previous = newNode;
      newNode.next = newLinkedList.head;
    }
    newLinkedList.head = newNode;
    return value;
  };

  newLinkedList.removeHead = function(){
    if (!newLinkedList.head) {
      throw new Error("Cannot remove node from an empty list");
    }
    var node = newLinkedList.head;
    if (newLinkedList.head === newLinkedList.tail) {
      // there is only one item in the list
      newLinkedList.head = null;
      newLinkedList.tail = null;
    } else {
      // there are multiple items in the list
      newLinkedList.head = node.next;
    }
    return node.value;
  };

  newLinkedList.contains = function(value){
    var walker = newLinkedList.head;
    do {
      if (walker.value === value) return true;
      walker = walker.next;
    } while (walker !== null);
    return false;
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;
  newNode.previous = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
