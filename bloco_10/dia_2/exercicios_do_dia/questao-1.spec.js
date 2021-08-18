const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  
 test('Se a função funciona rs', (done) => {    
  uppercase('ArdrUbaL', (string) => { 
  try { 
    expect(string).toBe('ARDRUBAL');
    done();
  }catch (err){
      done(err);
     
  }
});
});


// GABARITO MALDITO. Eu sabia que dava para usar try/catch testando callback rs
//
//   it('uppercase "test" to equal "TEST"', (done) => {
//     uppercase('tesst', (str) => {
//       try {
//         expect(str).toBe('TEST');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });
