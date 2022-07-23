module.exports = function reverse(n) {
  let result = '';
  n = Math.abs(n);
  n = String(n);
  for (let i = 0; i < n.length; i += 1) {
    result = `${n[i]}${result}`
  };
  result = Number(result);
  return result;
}
