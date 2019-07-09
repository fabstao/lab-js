let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();

// 1. What name will it print and why
//R. "Morty" because let declares variable within a scope, and name = 'Morty' assignment is within the same scope
