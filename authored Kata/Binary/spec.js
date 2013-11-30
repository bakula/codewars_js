var a3 = new Binary('FF',2);
Test.expect(a3.toString() === '11111111', "Expect 11111111 on toString for FF values and type 2, not:"+a3.toString());
var a4 = new Binary('10',2);
Test.expect(a4.toString() === '00010000', "Expect 00010000 on toString for 10 values and type 2, not:"+a4.toString());
var a5 = new Binary('10',1);
Test.expect(a5.toString() === '00001010', "Expect 00001010 on toString for 10 values and type 1, not:"+a5.toString());
var a6 = new Binary('31',1);
Test.expect(a6.toString() === '00011111', "Expect 00011111 on toString for 31 values and type 1, not:"+a6.toString());
var a7 = new Binary('129');
Test.expect(a7.toString() === '10000001', "Expect 10000001 on toString for 129 values and type undefined, not:"+a7.toString());
var a8 = new Binary('255');
Test.expect(a8.toString() === '11111111', "Expect 11111111 on toString for 255 values and type undefined, not:"+a8.toString());
Test.expect(a8.isValid(), "Expect true on isValid for 255 value and type 1, not:"+a8.isValid());

var a1 = new Binary();
Test.expect(a1.toString() === '', "Expect '' on toString for undefined value, not:"+a1.toString());
Test.expect(!a1.isValid(), "Expect False on isValid for undefined value, not:"+a1.isValid());
Test.expect(!a1.getBit(), "Expect False on getBit for undefined bitIndex, not:"+a1.getBit());
Test.expect(!a1.getBit(0), "Expect False on getBit for undefined value, not:"+a1.getBit(0));

var a2 = new Binary('0F');
Test.expect(a2.toString() === '', "Expect '' on toString for hex values and no type, not:"+a2.toString() );
Test.expect(!a2.getBit(), "Expect False on getBit for or hex values and no type, not:"+a2.getBit());
Test.expect(!a2.getBit(0), "Expect False on getBit for or hex values and no type, not:"+a2.getBit(0));

var a9 = new Binary('FF',2);
Test.expect(!a9.getBit(), "Expect False on getBit for undefined bitIndex, not:"+a9.getBit());
Test.expect(a9.getBit(0) === 1, "Expect 1 on getBit for or index 0, not:"+a9.getBit(0) );
Test.expect(!a9.getBit(8), "Expect False on getBit for index 8, not:"+a9.getBit(8) );