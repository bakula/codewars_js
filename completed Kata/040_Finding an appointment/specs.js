var schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];
Test.assertEquals(getStartTime(schedules, 60), '12:15');
Test.assertEquals(getStartTime(schedules, 75), '12:15');
Test.assertEquals(getStartTime(schedules, 76), null);
Test.assertEquals(getStartTime(schedules, 90), null);

schedules = [
  [['09:00', '19:00']],
  [],
  [],
  []
];
Test.assertEquals(getStartTime(schedules, 1), null);

schedules = Test.randomize([
  [['10:00', '13:00'], ['14:00', '17:00'], ['18:00', '19:00']],
  [['10:00', '11:00'], ['12:00', '13:00'], ['14:00', '15:00'], ['16:00', '17:00'], ['18:00', '19:00']]
]);
Test.assertEquals(getStartTime(schedules, 60), '09:00');

schedules = Test.randomize([
  [['09:37', '11:19'], ['11:27', '13:37'], ['16:29', '17:41']],
  [['10:07', '10:39'], ['10:41', '11:03'], ['12:21', '12:22'], ['15:49', '16:11'], ['17:29', '17:54']],
  [['09:48', '12:26'], ['15:41', '15:59'], ['18:50', '18:57']],
  [['11:21', '12:42'], ['12:51', '13:20'], ['17:51', '17:53'], ['18:07', '18:11']],
  [['09:41', '09:57'], ['10:03', '10:14'], ['10:32', '10:39'], ['10:56', '11:17'], ['11:23', '11:41'], ['11:59', '12:03'], ['12:28', '12:45'], ['17:19', '17:27'], ['18:56', '18:57']]
]);
Test.assertEquals(getStartTime(schedules, 37), '09:00');
Test.assertEquals(getStartTime(schedules, 38), '13:37');
Test.assertEquals(getStartTime(schedules, 124), '13:37');
Test.assertEquals(getStartTime(schedules, 125), null);

schedules = Test.randomize([
  [['09:09', '11:27'], ['12:14', '13:41'], ['15:16', '17:17'], ['17:32', '18:50']],
  [['10:38', '12:06'], ['13:39', '15:08'], ['17:23', '17:26'], ['18:02', '18: 26']]
]);
Test.assertEquals(getStartTime(schedules, 9), '09:00');
Test.assertEquals(getStartTime(schedules, 10), '18:50');
Test.assertEquals(getStartTime(schedules, 11), null);