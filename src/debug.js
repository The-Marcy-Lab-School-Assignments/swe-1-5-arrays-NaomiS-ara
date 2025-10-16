/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr = [];
};
function clearArr(arr) {
  arr.length = 0;
}



const getFirstItem = (array) => {
  return array.shift();
};
function getFirstItem(arr) {
  return arr[0];
}



module.exports = {
  clearArr,
  getFirstItem,
};
