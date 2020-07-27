
// TEST CODE for assertEqual.js

const assertEqual = require ('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "lIghthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse");
assertEqual(1, 1);
assertEqual(12345, 12345);
assertEqual(12345, 123);
assertEqual(2345, 123);
assertEqual("1", 1);
assertEqual(1, "1");
assertEqual("12345", "12345");
assertEqual("12345", "123");
assertEqual("", 123);
assertEqual(123, "");
assertEqual("", "");
assertEqual("", '');
assertEqual("",);


