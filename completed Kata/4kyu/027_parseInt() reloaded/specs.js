Test.assertEquals(parseInt('zero'), 0);
Test.assertEquals(parseInt('one'), 1);
Test.assertEquals(parseInt('two'), 2);
Test.assertEquals(parseInt('three'), 3);
Test.assertEquals(parseInt('four'), 4);
Test.assertEquals(parseInt('five'), 5);
Test.assertEquals(parseInt('six'), 6);
Test.assertEquals(parseInt('seven'), 7);
Test.assertEquals(parseInt('eight'), 8);
Test.assertEquals(parseInt('nine'), 9);
Test.assertEquals(parseInt('ten'), 10);

Test.assertEquals(parseInt('twenty'), 20);
Test.assertEquals(parseInt('twenty-one'), 21);
Test.assertEquals(parseInt('thirty-seven'), 37);
Test.assertEquals(parseInt('forty-six'), 46);
Test.assertEquals(parseInt('fifty-nine'), 59);
Test.assertEquals(parseInt('sixty-eight'), 68);
Test.assertEquals(parseInt('seventy-two'), 72);
Test.assertEquals(parseInt('eighty-three'), 83);
Test.assertEquals(parseInt('ninety-four'), 94);

Test.assertEquals(parseInt('one hundred'), 100);
Test.assertEquals(parseInt('one hundred one'), 101);
Test.assertEquals(parseInt('one hundred and one'), 101);
Test.assertEquals(parseInt('one hundred sixty-nine'), 169);
Test.assertEquals(parseInt('two hundred and ninety-nine'), 299);
Test.assertEquals(parseInt('seven hundred thirty-six'), 736);

Test.assertEquals(parseInt('two thousand'), 2000);
Test.assertEquals(parseInt('one thousand three hundred and thirty-seven'), 1337);
Test.assertEquals(parseInt('twenty-six thousand three hundred and fifty-nine'), 26359);
Test.assertEquals(parseInt('thirty-five thousand'), 35000);
Test.assertEquals(parseInt('ninety-nine thousand nine hundred and ninety-nine'), 99999);

Test.assertEquals(parseInt('six hundred sixty-six thousand six hundred sixty six'), 666666);
Test.assertEquals(parseInt('seven hundred thousand'), 700000);
Test.assertEquals(parseInt('two hundred thousand and three'), 200003);
Test.assertEquals(parseInt('two hundred three thousand'), 203000);
Test.assertEquals(parseInt('five hundred thousand three hundred'), 500300);
Test.assertEquals(parseInt('eight hundred eighty-eight thousand eight hundred and eighty-eight'), 888888);

Test.assertEquals(parseInt('one million'), 1000000);