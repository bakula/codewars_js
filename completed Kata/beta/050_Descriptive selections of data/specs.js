var family = [  
              ['name', 'age', 'voiced by'],
              ['Peter', '37', 'MacFarlane'],
              ['Lois', '31', 'Borstein'],
              ['Meg', '18', 'Kunis'], 
              ['Chris', '15', 'Green'],
              ['Stewie', '1', 'MacFarlane'], 
              ['Brian', '', 'MacFarlane']  
            ]

Test.assertSimilar(selectNames(family), [ 'Peter', 'Lois', 'Meg', 'Chris', 'Stewie', 'Brian' ])
Test.assertSimilar(selectVoices(family), [ 'MacFarlane', 'Borstein', 'Kunis', 'Green', 'MacFarlane', 'MacFarlane' ])
Test.assertSimilar(selectNamesAndVoices(family), [ ['Peter','MacFarlane'], ['Lois','Borstein'], ['Meg','Kunis'], ['Chris','Green'], ['Stewie','MacFarlane'], ['Brian','MacFarlane'] ])

Test.expect(selectNames.toString().indexOf('rest') !== -1, 'You should use rest()')
Test.expect(selectNames.toString().indexOf('map') !== -1, 'You should use map()')
Test.expect(selectNames.toString().indexOf('first') !== -1, 'You should use first()')

Test.expect(selectVoices.toString().indexOf('rest') !== -1, 'You should use rest()')
Test.expect(selectVoices.toString().indexOf('map') !== -1, 'You should use map()')
Test.expect(selectVoices.toString().indexOf('third') !== -1, 'You should use third()')

Test.expect(selectNamesAndVoices.toString().indexOf('zip') !== -1, 'You should use zip()')
Test.expect(selectNamesAndVoices.toString().indexOf('selectNames') !== -1, 'You should use selectNames()')
Test.expect(selectNamesAndVoices.toString().indexOf('selectVoices') !== -1, 'You should use selectVoices()')