const hero = {
  name: 'Brian',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: '',
    damage: 2,
  },
};

const dagger = {
  type: 'dagger',
  damage: 2,
};

function rest(person) {
  if (person.health !== 10) {
    person.health = 10;
    return person;
  } else {
    alert('Health is already at 10');
  };
};

function pickUpItem(person, weapon){
  person.inventory.push(weapon);
};

function equipWeapon(person){
  if (person.inventory.length >= 1) {
    person.weapon = person.inventory[0];
  };
};

function inputName(){
  const name = prompt("Enter your name here:");
  console.log(name)
  const h2 = document.createElement('h2');

  h2.innerHTML = `The epic adventure of ${name}`;

  if (name != false) { 
    const locationForName = document.getElementById('hud');
    locationForName.innerHTML = ''; //This line makes the button dissapear
    locationForName.appendChild(h2);
   } else { 
    alert('Please input your name');
    return;
  };
};

function displayStats(){

};