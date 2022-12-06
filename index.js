// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(
      (sameDriverName) => sameDriverName.toLowerCase() === name.toLowerCase()
    )
  }
  
  function fuzzyMatch(drivers, x){
    return drivers.filter((driverName) => driverName.startsWith(x))
}
   
function matchName(drivers, string){
  return drivers.filter((driver) => driver.name === string)
}