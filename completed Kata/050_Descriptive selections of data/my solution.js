/*
given the following data: 
    [  
      ['name', 'age', 'voiced by'],
      ['Peter', '37', 'MacFarlane'],
      ['Lois', '31', 'Borstein']
    ]
*/

function selectNames(table) {
  return map(rest(table), function(num){ return first(num) });// ['Peter', 'Lois']
}

function selectVoices(table) {
  return map(rest(table), function(num){ return third(num) });// ['MacFarlane', 'Borstein']
}

function selectNamesAndVoices(table) {
  return zip(selectNames(table),selectVoices(table));
}