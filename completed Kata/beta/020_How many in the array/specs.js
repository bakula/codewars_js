var arr = [0,5,5,2,"c"];
Test.assertEquals(arr.numberOfOccurrences(0), 1);
Test.assertEquals(arr.numberOfOccurrences(4), 0);
Test.assertEquals(arr.numberOfOccurrences(5), 2);
Test.assertEquals(arr.numberOfOccurrences("c"), 1);