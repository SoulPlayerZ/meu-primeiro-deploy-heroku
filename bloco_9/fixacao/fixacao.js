const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = callback => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);

 // RESOLUÇÃO INICIAL DA 1 ---- return userFullName(userToReturn); GET USER Não tinha necessariamente o nome CALLBACK era só () mas entendi. 
 // Eu só estava atendendo se chamasse getUser com userFullName. Com o callback ele atende com os dois parâmentos
};

// RESOLUÇÃO INICIAL DA 1 ---- console.log(getUser());

// RESOLUÇÃO INICIAL DA 1 ---- assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser