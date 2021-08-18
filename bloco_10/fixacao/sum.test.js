const sum = (a, b) => a + b;
//test ou it abaixo. it é como um alias para test. Os dois vão funcionar da mesma forma.
it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});