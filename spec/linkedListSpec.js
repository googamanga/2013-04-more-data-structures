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

  // add more tests here to test the functionality of linkedList
});