const findTheOldest = function (people) {
    const date = new Date().getFullYear();
    // Sorting age from oldest to youngest then returning the first object (the oldest)
    let oldest = people.sort(function (a, b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = date;
        }
        else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = date;
        }
        let ageFirst = (a.yearOfDeath - a.yearOfBirth);
        let ageSecond = (b.yearOfDeath - b.yearOfBirth);
        // Get the oldest first
        if (ageFirst < ageSecond) {
            return 1; // b before a
        }
        if (ageFirst > ageSecond) {
            return -1; // a before b
        }
    });
    return oldest[0];
};

/* Other solution using reduce */
/*
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
*/

// Do not edit below this line
module.exports = findTheOldest;
