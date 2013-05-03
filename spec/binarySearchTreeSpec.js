describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe(".insert", function() {
    it("should fail if called without a number", function() {
      expect(function(){binarySearchTree.insert('asdf');}).toThrow( new Error("should input a number"));
    });
    it("should create tree with values based on binarySearchTree algorithm", function() {
      binarySearchTree.insert(5);
      binarySearchTree.insert(7);
      binarySearchTree.insert(6);
      expect(binarySearchTree.value).toEqual(5);
      expect(binarySearchTree.right.value).toEqual(7);
      expect(binarySearchTree.right.left.value).toEqual(6);
    });
  });
});