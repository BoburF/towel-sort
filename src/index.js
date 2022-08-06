
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  const arr = matrix.map((item, index) => {
    if(((index + 1) % 2) === 0){
      return item.reverse()
    }else{
      return item
    }
  })
  return arr.flat()
}
