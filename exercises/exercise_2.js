// Te doy un arreglo de strings y me devuelves el arreglo pero removiendo cualquier valor duplicado

let input = [
  "John",
  "Mike",
  "Danny",
  "Lisa",
  "Sophie",
  "John",
  "Mike",
  "Danny",
  "Lisa",
  "Sophie",
];

let fixInput = input.filter((value, index) => input.indexOf(value) === index);
console.log(fixInput);
