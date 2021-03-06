//封装curring
function createCurry (fn, args) {
  var _this = this;
  var len = fn.length;
  var args = args || [];

  return function () {
    var _args = [].slice.apply(arguments);
    args.push(..._args);

    // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
    if (args.length < len) {
      return createCurry.call(_this, fn, args);
    }

    // 参数收集完毕，则执行fn
    return fn.apply(_this, args);
  }
}

add(1)(2)(3)
add(1)(2, 3)

function add () {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.apply(arguments);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _add = function () {
    _args.push(...arguments);
    return _add
  }
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _add.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }

  return _add;
}

//数组扁平化 递归
function flat (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result = result.concat(arr[i])
    }
  }

  return result
}