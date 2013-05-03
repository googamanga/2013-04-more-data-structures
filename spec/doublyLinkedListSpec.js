describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  describe("linkedList", function() {
    it("should populate head and tail on .addToTail", function() {
      linkedList.addToTail('A testing string');
      expect(linkedList.head.value).toEqual('A testing string');
      expect(linkedList.tail.value).toEqual('A testing string');
    });

    it(".addToHead should add a new node on the head", function() {
      linkedList.addToTail('added to tail');
      linkedList.addToHead('added to head');
      expect(linkedList.contains('added to tail')).toEqual(true);
    });

    it("should populate head and tail on .addToTail", function() {
      linkedList.addToTail('A testing string');
      expect(linkedList.head.value).toEqual('A testing string');
      expect(linkedList.tail.value).toEqual('A testing string');
    });

    it("should add nodes consecutively", function() {
      linkedList.addToTail('string1');
      linkedList.addToTail('string2');
      linkedList.addToTail('string3');
      expect(linkedList.tail.value).toEqual('string3');
      expect(linkedList.head.value).toEqual('string1');
    });

    it(".contains(value) should return true if value is in the linkedList", function() {
      linkedList.addToTail('string1');
      linkedList.addToTail('string2');
      linkedList.addToTail('string3');
      expect(linkedList.contains('string2')).toEqual(true);
      expect(linkedList.contains('string3')).toEqual(true);
    });

    it(".contains(value) should return false if value is not in the linkedList", function() {
      linkedList.addToTail('string1');
      linkedList.addToTail('string2');
      linkedList.addToTail('string3');
      expect(linkedList.contains('asdf;l')).toEqual(false);
    });
  });

  it(".removeHead() should return values in the FIFO order they were added", function() {
    linkedList.addToTail('string1');
    linkedList.addToTail('string2');
    linkedList.addToTail('string3');
    expect(linkedList.removeHead()).toEqual('string1');
    expect(linkedList.removeHead()).toEqual('string2');
    expect(linkedList.removeHead()).toEqual('string3');
  });

  it(".removeHead() should throw an error when the list is empty", function() {
    var shouldThrow = function(){
      linkedList.removeHead(); // may need to return if throw doesn't propogate
    };
    expect(shouldThrow).toThrow();
  });

  it("head and tail should be null when the last node is removed", function() {
    linkedList.addToTail('string1');
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it("should recover after error on removeHead() on empty list", function() {
    var shouldThrow = function(){
      linkedList.removeHead(); // may need to return if throw doesn't propogate
    };
    linkedList.addToTail('string1');
    linkedList.addToTail('string2');
    linkedList.removeHead();
    linkedList.removeHead();
    expect(shouldThrow).toThrow();

    linkedList.addToTail('string1');
    linkedList.addToTail('string2');
    expect(linkedList.removeHead()).toEqual('string1');
    expect(linkedList.removeHead()).toEqual('string2');
    expect(shouldThrow).toThrow();
  });
});