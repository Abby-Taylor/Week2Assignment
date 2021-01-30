var even = 0;
var i = 2;
while ( even < 100 ) {
    even += i;
    console.log(even);
}

var backwards = 100;
i =  3;
while (backwards >= 0) {
    console.log (backwards); 
    backwards -= i; 
}
for (everyOther = 1; everyOther <= 100; everyOther+=2) {
    console.log(everyOther);
}
for (everyNumber = 0; everyNumber < 101; everyNumber++) {
    if ( (everyNumber % 3 == 0) && (everyNumber % 5 == 0)) {
        console.log ('Hello World!');
    } else if (everyNumber % 3 == 0) {
        console.log ('Hello!');
    } else if (everyNumber % 5 == 0) {
        console.log('World!');
    } else console.log(everyNumber);
} 
