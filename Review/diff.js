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