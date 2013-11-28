// Test two things:
// * Solution handles the provided example
// * Solution handles a larger example with randomized order

// Initial version used "make_process_tree" instead of "makeProcessTree".
// For backwards compatibility:
if (typeof makeProcessTree !== 'function' &&
    typeof make_process_tree === 'function') {
  makeProcessTree = make_process_tree;  
}

function shuffle(array) {
    var counter = array.length, temp, index;
    while (counter--) {
        index = (Math.random() * counter) | 0;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

var processes = [
  {pid: 1, ppid: -1},
  {pid: 219, ppid: 214},
  {pid: 214, ppid: 1},
  {pid: 124, ppid: 1}
];

var expected = new Process(1, [
  new Process(124, []),
  new Process(214, [
    new Process(219, []),
  ]),
]);

Test.expect(makeProcessTree(processes).equivalent(expected));

var more_processes = [
  {pid: 1, ppid: -1},
  {pid: 2, ppid: 1},
  {pid: 3, ppid: 1},
  {pid: 4, ppid: 1},
  {pid: 5, ppid: 1},
  {pid: 6, ppid: 2},
  {pid: 7, ppid: 3},
  {pid: 8, ppid: 4},
  {pid: 9, ppid: 4},
  {pid: 10, ppid: 5},
  {pid: 11, ppid: 1},
  {pid: 12, ppid: 7},
  {pid: 13, ppid: 2},
  {pid: 14, ppid: 3},
  {pid: 15, ppid: 4}
];

var more_expected = new Process(1, [
  new Process(2, [
    new Process(6, []),
    new Process(13, [])
  ]),
  new Process(3, [
    new Process(7, [
      new Process(12, [])
    ]),
    new Process(14, [])
  ]),
  new Process(4, [
    new Process(8, []),
    new Process(9, []),
    new Process(15, [])
  ]),
  new Process(5, [
    new Process(10, [])
  ]),
  new Process(11, [])
]);

Test.expect(makeProcessTree(shuffle(more_processes)), more_expected);
Test.expect(makeProcessTree(shuffle(more_processes)), more_expected);
Test.expect(makeProcessTree(shuffle(more_processes)), more_expected);