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
  return true;
};

setPrototype.remove = function(){
};
