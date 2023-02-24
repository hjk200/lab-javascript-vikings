// Soldier
class Soldier { 
 constructor(health, strength)

 this.health=health;

this.strength=strength;
 }
 damage = Math.floor(Math.random() * this.strength) + 1;
 target.receiveDamage(damage);
 console.log(`${this.constructor.name} attacked ${target.constructor.name} for ${damage} damage!`);
}
}

class Enemy extends Character {
constructor(health, strength) {
 super(health, strength);
}

receiveDamage(damage) {
 this.health -= damage; 
 if (this.health <= 0) {
   console.log(`${this.constructor.name} has been defeated!`);
 } else {
   console.log(`${this.constructor.name} received ${damage} damage!`);
 }


// Viking
class Viking {
constructor(health, strength)

this.health=health;

this.strength=strength;
}
// Saxon
class Saxon {

// War constructor(health, strength)

 this.health=health;

 this.strength=strength;
 }
class War {
constructor(health, strength)

this.health=health;

this.strength=strength;
}