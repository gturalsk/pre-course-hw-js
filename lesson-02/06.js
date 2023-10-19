let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let newPassportForPert = structuredClone(passportWithAddress);

newPassportForPert.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(newPassportForPert.address.city);
