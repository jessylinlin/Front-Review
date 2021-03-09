//欧几里得
function getGYS (a, b) {
  let c = null;

  while (c !== 0) {
    c = a % b;
    if (c === 0) return b
    a = b;
    b = c;
  }
}

//2、二分查找
function search (list, id) {
  let min = 0,
    max = list.length - 1;

  while (min <= max) {
    let i = parseInt((min + max) / 2);
    let res = list[i];
    if (res.id === id) return res;
    else if (res.id < id) min = i + 1;
    else if (res.id > id) max = i + 1;
  }
  return null;
}

//斐波拉契 递归 + 缓存
function fib (n) {
  if (n == 1 || n == 2) {
    return 1
  }

  return fib(n - 1) + fib(n - 2)
}
//优化
function fib (n) {
  let cache = [0, 1, 1];

  function _fib (n) {
    if (cache[n]) return cache[n]

    cache[n] = _fib(n - 1) + _fib(n - 2);
    return cache[n]
  }

  return _fib(n)
}