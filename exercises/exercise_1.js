let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

//   Quiero las personas que tienen menos de 25 años y la cantidad que son

fixInput = input.filter((person) => person.age < 25);
console.log(
  `\nCantidad de personas menores a 25 años: ${
    fixInput.length
  }\n\n${fixInput.map((person) => (`Name: ${person.name} | Age: ${person.age} | City: ${person.city}`)).join("\n")}`
);
