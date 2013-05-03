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
    tree.addChild('1a').addChild('2a');
    tree.addChild('1b').addChild('2b');
    expect(tree.contains('2a')).toBe(true);
    expect(tree.contains('2b')).toBe(true);
    expect(tree.contains('2a')).toBe(true);
    expect(tree.contains('2b')).toBe(true);
  });

  it(".detachFromParent should return detached child when parent exists", function(){
    tree.addChild('1a').addChild('2a');
    var twoBTree = tree.addChild('1b').addChild('2b');
    expect(twoBTree.detachFromParent()).toBe(twoBTree);
    expect(tree.contains('2b')).toBe(false);
  });

  it(".detachFromParent should return detached child when NO parent exists", function(){
    tree.addChild('1a').addChild('2a');
    var twoBTree = tree.addChild('1b').addChild('2b');
    expect(twoBTree.detachFromParent()).toBe(twoBTree);
    expect(twoBTree.detachFromParent()).toBe(twoBTree);
  });

  it(".detachFromParent should remove all child trees", function(){
    tree.addChild('1a').addChild('2a');
    var oneBTree = tree.addChild('1b');
    var twoBTree = oneBTree.addChild('2b');
    expect(oneBTree.detachFromParent()).toBe(oneBTree);
    expect(tree.contains('2b')).toBe(false);
  });
});