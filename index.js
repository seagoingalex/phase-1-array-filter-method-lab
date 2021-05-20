const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
]

function findMatching(driverNameArray, stringArgument) {
    return driverNameArray.filter(function(driverName){
      return driverName.toLowerCase() === stringArgument.toLowerCase();
    })
} 

function fuzzyMatch(driverNameArray, stringArgument) {
    return driverNameArray.filter(function(driverName){
      return driverName[0].toLowerCase() === stringArgument[0].toLowerCase();
    })
} 


function matchName(driverObjectArray, stringArgument) {
    let returnMatch = driverObjectArray.filter(driver => driver.name === stringArgument)
    return returnMatch;
}

console.log(findMatching(drivers,"Bobby"));