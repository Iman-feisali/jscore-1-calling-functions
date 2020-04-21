function bornYear(age) {
  let yearOfBorn = 2020 - age;
  return yearOfBorn;
}

function someone(name, age) {
  let old = bornYear(age);
  let x = name;
  x = name.charAt(0).toUpperCase() + name.slice(1);
  let sentence = "Hi " + x + ", your year of born is: " + bornYear(age);

  return sentence;
}
