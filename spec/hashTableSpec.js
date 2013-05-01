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

  it(".insert should insert string into _storage using tuple", function() {
    var key = 'Cat';
    var index = getIndexBelowMaxForKey(key, hashTable._limit);
    hashTable.insert(key, 'Friendly');
    expect(hashTable._storage.get(index)[0][0]).toEqual('Cat');
    expect(hashTable._storage.get(index)[0][1]).toEqual('Friendly');
  });

  it(".retrieve should returns inserted values when no collisions", function() {
    var key = 'Cat';
    hashTable.insert(key, 'Friendly');
    expect(hashTable.retrieve(key)).toEqual('Friendly');
    key = 'Dog';
    hashTable.insert(key, 'Loud');
    expect(hashTable.retrieve(key)).toEqual('Loud');
  });

  it(".insert should handle collisions", function() {
    hashTable.insert('Cat', 'Upper case Cat');
    hashTable.insert('cat', 'lower case cat');

    expect(getIndexBelowMaxForKey('Cat', hashTable._limit)).toEqual(
      getIndexBelowMaxForKey('cat', hashTable._limit));
    expect(hashTable._storage.get(getIndexBelowMaxForKey('Cat', hashTable._limit))[0]).toEqual(
      ['Cat', 'Upper case Cat']);
  });

  // add more tests here to test the functionality of hashTable
});