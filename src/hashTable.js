var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  // Check if storage.index is already populated
  //
  // if not populated, just continue

  if (!this._storage.get(index)) {
    // the storage location is empty
    this._storage.set(index, []);
  }

  // Handle case when key already exists in hashtable
  // and value needs to be updated for that key
  //
  // A new tuple is NOT being created.
  var tuples = this._storage.get(index);
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === key) {
      tuples[i][1] = value;
      return value;
    }
  }

  // Handle case when key does not exist in the hashtable
  // A new tuple will be created
  tuples.push([key, value]);
  return value;
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tuples = this._storage.get(index);
  if (!tuples) return undefined; // can't iterate over uninitialized array
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === key) {
      return tuples[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tuples = this._storage.get(index);
  if (!tuples) return undefined; // can't iterate over uninitialized array
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === key) {
      return tuples.splice(i,1)[0][1]; // splice returns an array
    }
  }
  return undefined;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you