//call
Function.prototype.call = function(context, ...args) {
  context = context || window;
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;
  context[fnSymbol](...args);

  delete context[fnSymbol]
}
Function.prototype.apply = function(context, argsArr) {
  context = context || window;
  const fnSymbol = Symbol('fn');

  context[fnSymbol] = this;
  context[fnSymbol](...argsArr);

  delete context[fnSymbol];
}

Function.prototype.bind = function(context, ...args) {
  context = context || window;
  const fnSymbol = Symbol('fn');

  context[fnSymbol] = this;

  return function(..._args) {
    args = args.concat(_args);
    context[fnSymbol](...args);

    delete context[fnSymbol];
  }
}

//克隆基本类型
function shallowClone(obj) {
  let cloneObj = {};

  for (let i in obj) {
    cloneObj[i] = obj[i]
  }

  return cloneObj;
}

//深度克隆基本类型
function deepCopy(obj) {
  let result;

  if(typeof obj === 'object' ) {
    result = obj.constructor === Array ? [] : {};

    for (let i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i] 
    }
  } else {
    result = obj;
  }

  return result
}

//get urlparams
function getUrlparams(variable) {
  let query = window.location.search.substring(1);
  var queryArr = query.split('&');

  for(let i = 0; i < queryArr.length; i++) {
    let pair = queryArr[i].split('=');

    if (pair[0] === variable) return pair[1]
  }

  return
}

