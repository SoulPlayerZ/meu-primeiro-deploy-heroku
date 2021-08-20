const  numb = require('./questao-1');
//import { randomNumber as _randomNumber } from './questao-1'; <<<<< vsCode corrigiu para ES6 o REQUIRE
jest.mock('./');

describe('Testes com a função randomNumber', ()  =>{
 const mock = jest.spyOn(numb, 'randomNumber');

    it('Se a função é chamada', () => {
        numb.randomNumber();
        expect(mock).toHaveBeenCalled();
    });
    it('Qual o retorno', () => {
        numb.randomNumber.mockImplementation(() => {
           Math.floor(((Math.random() * 100) + 1));
           return 10;
        });
                
        expect(numb.randomNumber()).toBe(10);
       });

    it('Quantas vezes foi chamada', () => {
        expect(mock).toHaveBeenCalledTimes(2);
    });
});