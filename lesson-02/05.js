let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportClone = Object.assign({}, passport);
passportClone.name = "Ivan";

console.log(passport);
console.log(passportClone);
