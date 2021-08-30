const { TestWatcher } = require("jest");

const users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Paul' },
  ];
  
  const findUserById = (id) => new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);
  
    if (result) {
      return resolve(result);
    }
  
    return reject(new Error(`User with ${id} not found.`));
  });
  
  const getUserName = (userId) => findUserById(userId).then((user) => user.name);


  test('Se a função encontra usuário corretamente', () => {

    //   getUserName(1).then((result) => {
    //     try {  
    //     expect(result).toEqual('Marsk');
    //     }catch(er){
    //         throw er;
    //     }

      
  })})