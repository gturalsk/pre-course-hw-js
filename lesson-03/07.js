const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

const evenNumber = numbers.map((num, index) => {
  const evenArray = num.filter((even) => {
    return even % 2 == 0;
  });

  return evenArray;
});

console.log(evenNumber);
