let name = 'Rick';

function greetMe(name) {
  console.log(`Hi ${this.name}!`);
}

greetMe('George');

// 1. What name will it print and why
// R. No name, this.name refers to object but no class defined
