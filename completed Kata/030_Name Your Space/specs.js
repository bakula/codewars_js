var stuff = {}
var val = namespace(this, 'items.things')
Test.expect(!val, 'namespace(this, "items.things") should have returned undefined since the namespace has not been set yet. Instead it returned ' + val)

namespace(this, 'items.things', {name: 'the thing'})
Test.expect(this.items.things.name == 'the thing', "namespace(this, 'items.things', {name: 'the thing'}) should have set this.items.things.name == 'the thing'" )

namespace(stuff, 'moreStuff.evenMoreStuff.id', 1)
Test.expect(stuff.moreStuff.evenMoreStuff.id == 1, "namespace(stuff, 'moreStuff.evenMoreStuff.id', 1) should have set stuff.moreStuff.evenMoreStuff.id == 1")
