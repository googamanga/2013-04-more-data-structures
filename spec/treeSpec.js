describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it(".contains() should return false if the value does not exist in the tree", function(){
    expect(tree.contains('string')).toBe(false);
  });

  it(".contains() should return true if the value does exist in the tree", function(){
    tree.addChild('string');
    expect(tree.contains('string')).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
});