Test Cases:

Test.expect(!isValidIP(''));
Test.expect(!isValidIP('abc.def.ghi.jkl'));
Test.expect(!isValidIP('123.456.789.0'));
Test.expect(!isValidIP('12.34.56'));
Test.expect(!isValidIP('256.1.2.3'));
Test.expect(!isValidIP('1.2.3.4.5'));
Test.expect(!isValidIP('123,45,67,89'));
Test.expect(!isValidIP(' 1.2.3.4'));
Test.expect(!isValidIP('1.2.3.4 '));

Test.expect(isValidIP('0.0.0.0'));
Test.expect(isValidIP('123.45.67.89'));
Test.expect(isValidIP('255.255.255.255'));
Test.expect(isValidIP('1.2.3.4'));
Test.expect(isValidIP('31.41.59.26'));
Test.expect(isValidIP('53.58.97.93'));
Test.expect(isValidIP('238.46.26.43'));
Test.expect(isValidIP('38.32.79.50'));
Test.expect(isValidIP('28.84.197.169'));
Test.expect(isValidIP('39.93.75.105'));
Test.expect(isValidIP('82.0.97.49'));
Test.expect(isValidIP('44.59.230.78'));
Test.expect(isValidIP('164.0.62.86'));
Test.expect(isValidIP('208.99.86.28'));
Test.expect(isValidIP('0.34.82.53'));
Test.expect(isValidIP('42.117.0.67'));
Test.expect(isValidIP('98.214.80.86'));
Test.expect(isValidIP('51.32.82.30'));
Test.expect(isValidIP('66.47.0.93'));
Test.expect(isValidIP('84.46.0.95'));
Test.expect(isValidIP('50.58.22.31'));
Test.expect(isValidIP('72.53.59.40'));
Test.expect(isValidIP('81.28.48.1'));