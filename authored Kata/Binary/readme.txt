Description:

You will complete the Binary class, which is simple helper class for converting numbers to binary representation.

The class is designed to take in a string with decimal or hex value representation and return string in binary representation.

The following are some examples of how this class is used:

var val = new Binary(); 
val.toString() === '';
val.isValid() === false;
val.getBit() === false;
val.getBit(0) === false;

var val = new Binary('11',1); 
val.toString() === '00001011';
val.isValid() === true;
val.getBit() === false;
val.getBit(0) === 1;
val.getBit(1) === 0;

var val = new Binary('FF',2); 
val.toString() === '11111111';
Value must be a decimal: 0-255 or hex 00-FF. If value is out of scope toString will return ''. If value is out of scope isValid will return false. If value is out of scope getBit will return false . If bitIndex is out of scope getBit it will return false.