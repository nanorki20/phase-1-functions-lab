// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
   const hQ = 42;
   let blocks = Math.abs(hQ - pickUp);
   return blocks
};

function distanceFromHqInFeet(distanceFromHqInBlocks) {
    return Math.abs((distanceFromHqInBlocks - 42) * 264)
}


function distanceTravelledInFeet(pickUp, destination) {
    return Math.abs((destination - pickUp) * 264)
}


function calculatesFarePrice(start, destination){
    let feet = Math.abs((destination - start) * 264);
     
    if (feet < 400) {
        return 0;
    } else if (feet > 400 && feet <=2000) {
        return ((feet-400) * 0.02);
    } else if (feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
};