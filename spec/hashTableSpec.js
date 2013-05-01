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

  // add more tests here to test the functionality of hashTable
});