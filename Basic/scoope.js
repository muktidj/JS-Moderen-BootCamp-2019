// Lexical scoope (Static Scope)
//Global Scope - Defined outside of all code block
// Local Scope - Defined inside a code Block

// Global Scoope (varOne)
// Local Scoope (varTwo)
// Local Scoope (varFour)
// Local Scoope (varThree)
let varOne = 'varOne'

if(true) {
    console.log(varOne)
    let varTwo = 'varTwo';
    console.log(varTwo);
    
    if(true) {
        let varFour = 'varFour'
    } 

}

if(true) {
    let varThree = 'varThree';
}

