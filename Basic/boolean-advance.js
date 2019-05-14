let isAccountLocked = true;
let userRole = 'admin';




if (!isAccountLocked) {
    console.log('Is Account locked');
} else if (userRole !== 'admin') {
    console.log('Welcome to the Jungle');
} else {
    console.log('welcome');
}

// Challenge Area

let temp = Math.floor(Math.random() * 100);

//It is freezing outside
if (temp <= 45) {
    console.log("it's freezing outside");
} else if (temp >= 67 ) {
    console.log('it is hot outside')
} else {
    console.log('go for it. it is pretty nice')
}
// it is hot outside
// go for it. it is pretty nice