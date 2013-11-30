var test = [
  ["this is a string!!","dGhpcyBpcyBhIHN0cmluZyEh"],
  ["this is a test!","dGhpcyBpcyBhIHRlc3Qh"],
  ["now is the time for all good men to come to the aid of their country.","bm93IGlzIHRoZSB0aW1lIGZvciBhbGwgZ29vZCBtZW4gdG8gY29tZSB0byB0aGUgYWlkIG9mIHRoZWlyIGNvdW50cnku"],
  ["1234567890  ", "MTIzNDU2Nzg5MCAg"],
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ ", "QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVog"],
  ["the quick brown fox jumps over the white fence. ","dGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSB3aGl0ZSBmZW5jZS4g"],
  ["dGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSB3aGl0ZSBmZW5jZS4","ZEdobElIRjFhV05ySUdKeWIzZHVJR1p2ZUNCcWRXMXdjeUJ2ZG1WeUlIUm9aU0IzYUdsMFpTQm1aVzVqWlM0"],
  ["VFZSSmVrNUVWVEpPZW1jMVRVTkJaeUFna","VkZaU1NtVnJOVVZXVkVwUFpXMWpNVlJWVGtKYWVVRm5h"],
  ["TVRJek5EVTJOemc1TUNBZyAg","VFZSSmVrNUVWVEpPZW1jMVRVTkJaeUFn"]
];
Array.prototype.rand = function(){
 var tmp = Math.floor(Math.random()*(this.length-1));
 if(tmp == actual){return this.rand();}
 return this[tmp];
}
var actual;
console.log("Encoding Check:");
for(var i = 0; i < 2; i++){
 actual = test.rand();
 Test.assertEquals(actual[0].toBase64(), actual[1]); 
}
console.log("Decoding Check:");
for(var i = 0; i < 2; i++){
 actual = test.rand(); 
 Test.assertEquals(actual[1].fromBase64(), actual[0]);
}
console.log("Padding Check:");
for(var i = 0; i < 3; i++){
 actual = test.rand(); 
 Test.assertEquals(actual[0].toBase64().length % 4, 0);
}
Test.assertNotEquals("dGVzdA==".fromBase64().indexOf('test'), -1);