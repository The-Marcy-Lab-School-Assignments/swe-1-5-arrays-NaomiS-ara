const addToFrontOrBack = () => {
};
function addToFrontOrBack(arr, value, isFront) {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
}

//let myArray = [1, 2, 3];
addToFrontOrBack(myArray, 0, true);
console.log(myArray);  // Should log: [0, 1, 2, 3]

addToFrontOrBack(myArray, 4, false);
console.log(myArray);  // Should log: [0, 1, 2, 3, 4]



const reverseString = () => {
};
function reverseString(str) {
return str.split("").reverse().join("");


const newArrayFullOf = () => {
}; 
function newArrayFullOf(value, numOfValue) {
  return new Array(numOfValue).fill(value);
}


const insertIntoMiddle = () => {
};
function insertIntoMiddle(arr, value) {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, value);
}



const deleteFromMiddle = () => {
};
function deleteFromMiddle(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1);
}



const isRightIndex = () => {
};
function isRightIndex(arr, value, index) {
  return arr[index] === value;
}



const roundAllNumsDown = () => {
};
function roundAllNumsDown(arr) {
  return arr.map(num => Math.floor(num));
}


const getAllYCoordinates = () => {
};
function getAllYCoordinates(arrOfCoords) {
  return arrOfCoords.map(coord => coord[1]);
}


module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
}