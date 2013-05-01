describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  describe("contains", function() {
    it("should return true for .added Values", function(){
      set.add('Dog');
      expect(set.contains('Dog')).toEqual(true);
    });
  });
});