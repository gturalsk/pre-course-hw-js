let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportClone = { ...passport };
passportClone.name = "Ivan";

console.log(passport.name);
console.log(passportClone.name);
