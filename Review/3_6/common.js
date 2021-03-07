//promise源码实现
//state
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const isFunc = fn => typeof fn === 'function';
class Promise {
  constructor(fn) {
    if (!isFunc(fn)) {
      throw new Error('')
    }

    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    this.state = PENDING;
    this.value = '';

    fn(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve (value) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;

      this.resolvedCallbacks.map(cb => cb(value))
    }
  }

  reject (value) {
    if (this.satte = PENDING) {
      this.state = REJECTED;
      this.value = value;

      this.rejectedCallbacks(cb => cb(value))
    }
  }

  then (onResolved, onRejected) {
    if (this.state == PENDING) {
      this.resolvedCallbacks.push(onResolved);
      this.rejectedCallbacks.push(onRejected);
    }

    if (this.state === FULFILLED) {
      onResolved(this.value)
    }

    if (this.state === REJECTED) {
      onRejected(this.value)
    }
  }
}

//bind
Function.prototype.bind = function (context, ...args) {
    
}