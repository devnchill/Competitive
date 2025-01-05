const findTheOldest = function (people) {
  people = people.sort((a, b) => {
    let ageA=(a.yearOfDeath || 2024)-a.yearOfBirth;
    let ageB=(b.yearOfDeath || 2024)-b.yearOfBirth;
    return ageB-ageA;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
