// Code your solution here

function findMatching(drivers, name){
    let matches = drivers.filter(driver => 
        driver.toLowerCase() == name.toLowerCase()
    )
    return matches
}

function fuzzyMatch(drivers, testString) {
    return drivers.filter( driver =>
      driver.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, name) {
    return drivers.filter( record => record.name === name)
  }