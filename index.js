function iterativeLog(array) {
  array.forEach(function(elem, index) {
    console.log(`${index}: ${elem}`);
  })
}
function iterate(callback) {
  var array = ['black', 'white', 'blue']
  array.forEach(callback)
  return array
}
function doToArray(array, callback) {
  array.forEach(callback)
}
