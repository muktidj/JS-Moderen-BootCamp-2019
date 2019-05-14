let temp = 55

// Logical And Operator = - True if both sides are true. False otherwise

//Logical Or Operator - True if at least one side is true. False Otherwise
if (temp >= 60 && temp <=90) {
 console.log('it is pretty nice hot');   
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Eh..Do What you want');
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

//Are both vegan ? only offer uo vegan dishes

//At least one vegan? make sure to other up some vegan option
//else offer up anything on the menue

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}