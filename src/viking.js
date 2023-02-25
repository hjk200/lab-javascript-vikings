class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
  
    attack(target) {
      const damage = Math.floor(Math.random() * this.strength) + 1;
      target.receiveDamage(damage);
      console.log(`${this.constructor.name} attacked ${target.constructor.name} for ${damage} damage!`);
    }
  }
  
  class Character {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        console.log(`${this.constructor.name} has been defeated!`);
      } else {
        console.log(`${this.constructor.name} received ${damage} damage!`);
      }
    }
  }
  
  class Viking extends Character {
    constructor(health, strength) {
      super(health, strength);
    }
  
    // Viking-specific methods can be added here
  }
  
  class Saxon extends Character {
    // Saxon-specific methods can be added here
  }
  
  class War {
    constructor() {
      this.vikings = [];
      this.saxons = [];
    }
  
    addViking(viking) {
      this.vikings.push(viking);
    }
  
    addSaxon(saxon) {
      this.saxons.push(saxon);
    }
  
    vikingAttack() {
      const randomSaxonIndex = Math.floor(Math.random() * this.saxons.length);
      const randomSaxon = this.saxons[randomSaxonIndex];
  
      const randomVikingIndex = Math.floor(Math.random() * this.vikings.length);
      const randomViking = this.vikings[randomVikingIndex];
  
      randomSaxon.receiveDamage(randomViking.strength);
  
      if (randomSaxon.health <= 0) {
        this.saxons.splice(randomSaxonIndex, 1);
        return `${randomSaxon.constructor.name} has died in combat!`;
      } else {
        return `${randomSaxon.constructor.name} has received ${randomViking.strength} damage from ${randomViking.constructor.name}!`;
      }
    }
  
    saxonAttack() {
      const randomSaxonIndex = Math.floor(Math.random() * this.saxons.length);
      const randomSaxon = this.saxons[randomSaxonIndex];
  
      const randomVikingIndex = Math.floor(Math.random() * this.vikings.length);
      const randomViking = this.vikings[randomVikingIndex];
  
      randomViking.receiveDamage(randomSaxon.strength);
  
      if (randomViking.health <= 0) {
        this.vikings.splice(randomVikingIndex, 1);
        return `${randomViking.constructor.name} has died in combat!`;
      } else {
        return `${randomViking.constructor.name} has received ${randomSaxon.strength} damage from ${randomSaxon.constructor.name}!`;
      }
    }
  
    showStatus() {
      if (this.saxons.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikings.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }
  