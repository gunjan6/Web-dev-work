let numbers= [1,2,3,4];
let filtered = numbers.filter(value => value >=0); 
let items = filtered.map (function (num) {
  let obj = {value : num}
  return obj; 
  }); 
