
function findMatching(driversArray, string){
  let result = driversArray.filter(driver => driver.toUpperCase() === string.toUpperCase());
  return result
}

  
function fuzzyMatch(drivers, string){
  let result = drivers.filter(driver => driver.indexOf(string) === string.indexOf(string))
  return result
}

function matchName(drivers, string){
  let result = drivers.filter(driver => driver.name === string)
  return result;
}
//   describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];

//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });
// });
