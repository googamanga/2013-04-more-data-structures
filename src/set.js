var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  if (!this.contains(value)) {
    this._storage.push(value);
  }
};

setPrototype.contains = function(value){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};

setPrototype.remove = function(value){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === value) break;
  }
  return (i === this._storage.length) ? undefined : this._storage.splice(i, 1)[0];
};
