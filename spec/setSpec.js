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

    it("Should return false for values not in set", function() {
      expect(set.contains('Dog')).toEqual(false);
      set.add('Cat');
      expect(set.contains('Froggy')).toEqual(false);
    });
  });

  describe("remove", function() {
    it("should remove values that have been added", function(){
      set.add('Dog');
      expect(set.remove('Dog')).toEqual('Dog');
      expect(set.contains('Dog')).toEqual(false);
    });

    it("should return undefined when removing non-existant values", function() {
      expect(set.remove('Dog')).toEqual(undefined);
      set.add('Cat');
      expect(set.remove('Beaver')).toEqual(undefined);
    });
  });

});