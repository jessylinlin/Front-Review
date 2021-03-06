//prototype 继承
function Foo (name) {
  this.name = name;
}

Foo.prototype.myName = function () {
  return this.name;
}

//属性继承
function Bar (name, label) {
  Foo.call(this, name);
  this.label = label;
}

//方法继承
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar;
Bar.prototype.MyLabel = function () {
  return this.label;
}

var a = new Bar('A', 'OBJ A');

//class继承
class Animal {
  constructor(props) {
    this.name = props.name || '';
  }

  eat () {
    console.log(this.name)
  }
}
class Cat extends Animal {
  constructor(props, myAttribute) {
    super(props) //类似this指向
    this.type = props.type || "";
    this.attribute = myAttribute; //personal
  }
  //私有方法
  personalAttr () {

  }
}

