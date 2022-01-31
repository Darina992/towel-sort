
function sortMatrix(matrix) {
  let result = [];
  for(let i = 0;i < matrix.length;i++){
    if(i % 2 !== 0){
    matrix[i] = matrix[i].reverse();
    console.log(matrix[i]);
    matrix[i].forEach((item) => {
      result.push(Number(item));
    });
  } else {
    matrix[i].forEach((item) => {
      result.push(Number(item));
    });
  }
  console.log(result)
  }
  return result
}

module.exports = function towelSort (matrix) {
  return [];
}
