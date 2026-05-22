const calculateAge = function(birthDate) {
  const currentDate = new Date('2026-05-19');
  const date = new Date(birthDate);

  //if date is invalid, return 'Invalid Date'
  if (date == 'Invalid Date') {
    return 'Error: Invalid date format';
  }

  //if date is in future, return an error
  if (date > currentDate) {
    return 'Error: Birthdate cannot be in the future.';
  }

  //sub the birth year from the current year to get age
  let age = currentDate.getFullYear() - date.getFullYear();

  // check if the birthday hasnt happened, if so sub 1
  if (currentDate.getMonth() < date.getMonth()) {
    age = age - 1;
  } else if (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate()) {
    age = age - 1;
  }

  if (age > 125) {
    return 'Are you sure you are more than 125 years old?';
  }

  return `You are ${age} years old`;
};

console.log(calculateAge('2000-07-01'));
// You are 25 years old
console.log(calculateAge('1988-05-18'));
// You are 38 years old
console.log(calculateAge('2190-01-01'));
// Error: Birth date cannot be in the future
console.log(calculateAge('1800-01-01'));
// Are you sure you are more than 125 years old?
console.log(calculateAge('invalid-date'));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
