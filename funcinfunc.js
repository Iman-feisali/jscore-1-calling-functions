function bornYear(age) {
  let yearOfBorn = 2020 - age;
  return yearOfBorn;
}

function someone(name, age) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  let birthYear = bornYear(age);
  let sentence = "Hi " + name + ", your year of born is: " + birthYear;
  return sentence;
}
console.log(someone("iman", 35));
