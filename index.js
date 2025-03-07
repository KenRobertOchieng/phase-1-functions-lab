// Returns the number of blocks from 42nd Street
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  // Returns the number of feet from 42nd Street
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Calculates the number of feet travelled between two blocks
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Calculates the fare based on the distance
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  