//instanceof 
function Cat (breed, color) {
  this.breed = breed;
  this.color = color;
}
const dollCat = new Cat('doll', 'white');
dollCat instanceof Cat;
dollCat instanceof Object;

