var url1 = 'www.codewars.com?a=1&b=2'
var url2 = 'www.codewars.com?a=1&b=2&a=1&b=3'
var url3 = 'www.codewars.com?a=1'
var url4 = 'www.codewars.com'

Test.expect(stripUrlParams(url1) == url1, "Didn't return correct value when given a url that had nothing to be stripped")
Test.expect(stripUrlParams(url2) == url1, "Didn't strip duplicates from url")
Test.expect(stripUrlParams(url2, ['b']) == url3, "Didn't strip param that was specified in paramsToStrip array")
Test.expect(stripUrlParams(url4, ['b']) == url4, "Didn't return an un-modifed url when there was nothing to strip") 