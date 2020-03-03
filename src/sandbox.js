// closures
const a = x => y => z => (x + y + z);
const result = a(3)(5)(1);
console.log(result);


// currying
const b = (x, y) => ( x + y );
const addTwo = y => b(2, y);
console.log(addTwo(5));
