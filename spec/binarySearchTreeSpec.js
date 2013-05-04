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

  describe(".contains", function() {
    it("should return false on empty tree", function() {
      expect(binarySearchTree.contains(5)).toEqual(false);
    });
    it("should return true when the value is found in the tree", function() {
      binarySearchTree.insert(5);
      expect(binarySearchTree.contains(5)).toEqual(true);
      binarySearchTree.insert(7);
      binarySearchTree.insert(6);
      expect(binarySearchTree.contains(6)).toEqual(true);
    });
    it("should return false when the value is not in the tree", function() {
      binarySearchTree.insert(5);
      binarySearchTree.insert(7);
      binarySearchTree.insert(6);
      expect(binarySearchTree.contains(8)).toEqual(false);
    });
  });
  describe(".depthFirstLog", function() {
    it("should call callback on every value depth first", function() {
      binarySearchTree.insert(5);
      binarySearchTree.insert(8);
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.insert(4);
      binarySearchTree.insert(1);
      binarySearchTree.insert(6);
      binarySearchTree.insert(9);
      binarySearchTree.insert(7);
      var s = "";
      var tester = function(value){
        s += value;
      };
      binarySearchTree.depthFirstLog(tester);
     expect(s).toEqual('532148679');
    });
  });

  describe(".mapDepthFirstLog", function() {
    it("should call callback on every value depth first", function() {
      binarySearchTree.insert(5);
      binarySearchTree.insert(8);
      binarySearchTree.insert(3);
      binarySearchTree.insert(4);
      expect(binarySearchTree.mapDepthFirstLog(function(value){
        return ""+value+value;
      })).toEqual(["55","33", "44", "88"]);
    });
  });
});