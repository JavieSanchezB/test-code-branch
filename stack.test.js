const doBracketsBalance = require('./stack');

const stringtoValide =`const addOne = value =>{
return value +1;
}};` 

const stringvalidadecorrect=`const addOne = value =>{
    return value +1;
    };` 

    
const stringvalidadecorrectkeysfull=`{[()]}` 
const stringvalidadecorrectkeysfullincorrect=`({[)]}` 


test('in whatever case }} should return false'+stringtoValide, () => {
expect(doBracketsBalance(stringtoValide)).toBeFalsy();
});

test('in whatever case } should return true'+stringvalidadecorrect, () => {
    expect(doBracketsBalance(stringvalidadecorrect)).toBeTruthy();
    });

    test('in whatever case {[()]} should return true'+stringvalidadecorrectkeysfull, () => {
        expect(doBracketsBalance(stringvalidadecorrectkeysfull)).toBeTruthy();
        });

        test('in whatever case ({[)]} should return true'+stringvalidadecorrectkeysfullincorrect, () => {
            expect(doBracketsBalance(stringvalidadecorrectkeysfullincorrect)).toBeFalsy();
            });
    
