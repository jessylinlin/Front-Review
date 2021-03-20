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

//斐波拉契数列
//递归
function fib (n) {
  if (n == 1 || n == 2) return n;

  return fib(n - 1) + fib(n - 2);
}
//利用缓存优化
function fib (n) {
  let cache = [0, 1, 1];

  function _fib (n) {
    if (cache[n]) return cache[n];

    cache[n] = _fib(n - 1) + _fib(n - 2);
    return cache[n]
  }

  return _fib(n)
}

//有效的括号
//入栈出栈, 先进先出
var isValidString = function (str) {
  const len = str.length;
  const strMap = new Map([
    ['}', '{'],
    [']', '['],
    [')', '('],
  ]);
  const stack = [];

  if (len % 2 == 1) {
    return false
  }

  str.split('').forEach(key => {
    if (strMap.has(key)) {
      if (!stack.length || stack[stack.length - 1] !== strMap.get(key)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(key)
    }
  });
  return !stack.length
}

//判断数组是另外一个数组的子集
//es6 合并去重 判断长度
function isIncludes (longArr, shortArr) {
  let concatArr = Array.from(newSet(...longArr, shortArr));
  return concatArr.length === longArr.length || concatArr.length === shortArr
}

//es5 遍历
function isIncludes (longArr, shortArr) {
  if (!Array.isArray(longArr) || !Array.isArray(shortArr)) return
  if (longArr.length < shortArr.length) return;

  var longStr = longArr.join();
  //longArr.toString()

  for (var i = 0; i < shortArr.len; i++) {
    if (longStr.indexOf(shortArr[i]) === -1) return false
  }

  return true
}

//查找最长无重复字符串 abcabcbb
function lengthOfLongestSubstring (str) {
  let arr = [];
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i]) !== -1) {
      arr.aplice(0, i + 1);
    }

    arr.push(str[i]);
    max = Math.max(arr.length, max);
  }

  return max;
}