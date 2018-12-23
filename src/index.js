const person = {
  name: "Arnold",
  walk: function() {
    //console.log(this);
  },
  talk() {}
};

person.walk();

const walk = person.walk.bind(person);

walk();

const square = number => number * number;

//console.log(square(9));

const colors = ["red", "blue", "white"];

//console.log(colors.map(color => `<li>${color}</li>`));

const address = {
  street: "main street",
  city: "LA"
};

const { street, city } = address;

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, "aaa", ...second];

//console.log(combined);

const clonedObj = { ...person, ...address };

//console.log(clonedObj);

class Main {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

const p = new Main('Arnold');
p.walk();


export default Main;