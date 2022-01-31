
function sortMatrix(arr) {
  let result = [];
  for(let i = 0;i < arr.length;i++){
    if(i % 2 !== 0){
    arr[i] = arr[i].reverse();
    console.log(arr[i]);
    arr[i].forEach((item) => {
      result.push(item);
    });
  } else {
    arr[i].forEach((item) => {
      result.push(item);
    });
  }
  }
  return result
}

module.exports = function towelSort (matrix) {
  return [];
}
