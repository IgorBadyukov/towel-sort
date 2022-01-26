module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let mas = [];
  let k = 1;
  for (let item of matrix) {
    if(k%2 == 0) {
      item.sort(function (a, b) {
        return b - a;
      });
    }
    k++;
    mas.push(...item);
  }
  return mas;
};
  
