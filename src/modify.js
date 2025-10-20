const uppercaseAll = (word1, word2, word3) => {
  return [
    word1.toUpperCase(),
    word2.toUpperCase(),
    word3.toUpperCase(),
  ];
};
function uppercaseAll(...words) {
  return words.map(word => word.toUpperCase());
}


const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
function destructureCoordinates(coord) {
  const [x, y] = coord;
  return `The x coordinate is ${x} and the y coordinate is ${y}`;
}


module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
