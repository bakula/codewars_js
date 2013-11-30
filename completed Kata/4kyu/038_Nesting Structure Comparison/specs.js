Test.expect([1,1,1].sameStructureAs([2,2,2]), "[1,1,1] same as [2,2,2]");

Test.expect([1,[1,1]].sameStructureAs([2,[2,2]]), "[1,[1,1]] same as [2,[2,2]]");
Test.expect(![1,[1,1]].sameStructureAs([[2,2],2]), "[1,[1,1]] not same as [[2,2],2]");
Test.expect(![1,[1,1]].sameStructureAs([2,[2]]), "[1,[1,1]] not same as [2,[2]]");

Test.expect([[[],[]]].sameStructureAs([[[],[]]]), "[[[],[]]] same as [[[],[]]]");
Test.expect(![[[],[]]].sameStructureAs([[1,1]]), "[[[],[]]] not same as [[1,1]]");

Test.expect([1,[[[1]]]].sameStructureAs([2,[[[2]]]]), "[1,[[[1]]]] same as [2,[[[2]]]]");

Test.expect(![].sameStructureAs(1), "[] not same as 1");
Test.expect(![].sameStructureAs({}), "[] not same as {}");

Test.expect([1,'[',']'].sameStructureAs(['[',']',1]), "[1,'[',']'] same as ['[',']',1]");