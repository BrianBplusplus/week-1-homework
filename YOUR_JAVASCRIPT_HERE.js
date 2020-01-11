const hero = {
  name: '',
  heroic: true,
  inventory: [],
  health: 10, //set back to 10 at end
  weapon: {
    type: '',
    damage: 2, //set back to 2 at end
  },
};

const enemies = {
  enemy1: {
    health: 10,
    damage: 3,
  },
  enemy2: {
    health: 20,
    damage: 4,
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

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
};

function equipWeapon(person) {
  if (person.inventory.length >= 1) {
    person.weapon = person.inventory[0];
  };
};

function inputName() {
  const name = prompt("Enter your name here:");
  const nameElement = document.createElement('h2');

  nameElement.innerHTML = `The epic adventure of ${name}`;

  if (name != false) { 
    const nameLocation = document.getElementById('name');
    nameLocation.innerHTML = '';
    nameLocation.appendChild(nameElement);
    hero.name = name;
    displayStats(hero);
   } else { 
    alert('Please input your name');
    return;
  };
};

function displayStats(person) {
  const name = person.name;
  const hearts = person.health;
  const weapon = person.weapon.type;
  const damage = person.weapon.damage;

  const nameElement = document.createElement('p');
  const heartsElement = document.createElement('p');
  const weaponElement = document.createElement('p');
  const damageElement = document.createElement('p');

  nameElement.innerHTML = `Name: ${name}`;
  heartsElement.innerHTML = `Life: ${hearts}`; 
  weaponElement.innerHTML = `Equiped Weapon: ${weapon}`;
  damageElement.innerHTML = `Attack power: ${damage}`;

  const nameLocation = document.getElementById('playername');
  nameLocation.innerHTML = '';
  nameLocation.appendChild(nameElement);

  const heartsLocation = document.getElementById('hearts');
  heartsLocation.innerHTML = '';
  heartsLocation.appendChild(heartsElement);

  const weaponLocation = document.getElementById('weapon');
  weaponLocation.innerHTML = '';
  weaponLocation.appendChild(weaponElement);

  const damageLocation = document.getElementById('weapondamage');
  damageLocation.innerHTML = '';
  damageLocation.appendChild(damageElement);

};

//TODO: These functions are not dynamic yet
function removeImage() {
  document.getElementById('dagger').className = "removed";
};

function battleEnemy(person, enemies) {
  person.health = person.health - enemies.enemy1.damage;
  enemies.enemy1.health = enemies.enemy1.health - person.weapon.damage;

  if (enemies.enemy1.health <= 0) {
    alert('YOU HAVE DEFEATED THE EVIL VILLAIN! AMAZING!');
    person.health = 10;
    document.getElementById('enemy').className = "removed";
  };

  if (person.health <= 0) {
    person.health = 0;
    if(!alert('GAME OVER')){window.location.reload();}
  };
};

displayStats(hero);

