describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("getIndexBelowMaxForKey(string, limit) should return number < limit", function() {
    expect(getIndexBelowMaxForKey('Dog', hashTable._limit)).toBeLessThan(hashTable._limit);
  });

  describe("insert and retrieve", function() {
    it("should return inserted values when no collisions", function() {
      var key = 'Cat';
      hashTable.insert(key, 'Friendly');
      expect(hashTable.retrieve(key)).toEqual('Friendly');
      key = 'Dog';
      hashTable.insert(key, 'Loud');
      expect(hashTable.retrieve(key)).toEqual('Loud');
    });

    it("should handle collisions", function() {
      hashTable.insert('Cat', 'Upper case Cat');
      hashTable.insert('cat', 'lower case cat');
      expect(getIndexBelowMaxForKey('Cat', hashTable._limit)).toEqual(
        getIndexBelowMaxForKey('cat', hashTable._limit));
      expect(hashTable.retrieve('Cat')).toEqual('Upper case Cat');
      expect(hashTable.retrieve('cat')).toEqual('lower case cat');
    });

    it("Retrieve should return undefined when table does not contain key", function() {
      expect(hashTable.retrieve('adsf')).toEqual(undefined);
      hashTable.insert('Cat', 'Upper case Cat');
      expect(hashTable.retrieve('cat')).toEqual(undefined);
    });
  });
});