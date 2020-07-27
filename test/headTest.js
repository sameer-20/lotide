
const assertEqual = require ('../assertEqual');
const head = require ('../head.js');

// TEST CODE for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4,5,6,7]), 5);
assertEqual(head(["Hello Dear", "Hello", "Labs"]), "Hello");
assertEqual(head(["5",6,7]), 5);
assertEqual(head(["hEllo", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([]), "");
assertEqual(head(["Hello Dear"]), "Hello Dear");
assertEqual(head([4]), 4);
