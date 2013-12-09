Description:

Instructions

Write a function intersect that takes any number of as arguments. The function must return an array containing all the values that is present in every argument given to the function.

All values given will be arrays.
The first argument determines the order of the returned values.
Return an empty array for empty result set.
Example

var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

intersect(a, b, c); // ['bar', 'foo']