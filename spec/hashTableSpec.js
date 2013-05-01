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

  it(".insert should insert string into _storage", function() {
    var key = 'Cat';
    var index = getIndexBelowMaxForKey(key, hashTable._limit);
    hashTable.insert(key, 'Friendly');
    expect(hashTable._storage[index]).toEqual('Friendly');
  });

  it(".retrieve should returns inserted values when no collisions", function() {
    var key = 'Cat';
    hashTable.insert(key, 'Friendly');
    expect(hashTable.retrieve(key)).toEqual('Friendly');
    key = 'Dog';
    hashTable.insert(key, 'Loud');
    expect(hashTable.retrieve(key)).toEqual('Loud');
  });

  // add more tests here to test the functionality of hashTable
});