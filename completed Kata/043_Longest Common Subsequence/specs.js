Test.assertEquals(LCS("a", "b"), "");
Test.assertEquals(LCS("a", "a"), "a");
Test.assertEquals(LCS("abc", "ac"), "ac");
Test.assertEquals(LCS("abcdef", "abc"), "abc");
Test.assertEquals(LCS("abcdef", "acf"), "acf");
Test.assertEquals(LCS("anothertest", "notatest"), "nottest");
Test.assertEquals(LCS("132535365", "123456789"), "12356");
Test.assertEquals(LCS("finaltest", "zzzfinallyzzz"), "final");