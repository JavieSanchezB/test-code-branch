const doBracketsBalance = require('./stack');

const stringtoValide =`const addOne = value =>{
return value +1;
}};` 



test('in whatever case }} should return false'+stringtoValide, () => {
expect(doBracketsBalance(stringtoValide)).toBeFalsy();
});
