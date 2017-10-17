var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

var whoFollows = function(ID) {
  let followersArray = [];
  for (let profile in data) {
    if (data[profile].follows.includes(ID)) {
      followersArray.push(data[profile].name);
    }
  }
  return followersArray;
};

var whoFollowsAbove = function(ID, age) {
  let followersArray = [];
  for (let profile in data) {
    if (data[profile].age > age && data[profile].follows.includes(ID)) {
      followersArray.push(data[profile].name);
    }
  }
  return followersArray;
}

var idToName = function(arr) {
  const listOfNames = [];
  arr.forEach(function(id) {
    listOfNames.push(data[id].name);
  });
  // console.log(listOfNames);
  return listOfNames;
};

var followsAbove = function(ID, age) {
  let followsArray = [];
  for (let person of data[ID].follows) {
    if (data[person].age > age) {
      followsArray.push(data[person].name);
    }
    // console.log(person);
  }
  return followsArray;
}

// List everyone and for each of them, list the names of who they follow and who follows them
var whoFollowsWho = function() {
  var listWhoFollowsWho = {};
  for (let person in data) {
    listWhoFollowsWho[data[person].name] = {
      follows: idToName(data[person].follows),
      hasFollowing: whoFollows(person)
    }
  }
  console.log(listWhoFollowsWho);
  return listWhoFollowsWho;
};
// whoFollowsWho();

// Identify who follows the most people
var followsMostPeople = function() {
  let mostFollows = 0;
  let personMostFollows = "";
  for (let person in data) {
    if (data[person].follows.length > mostFollows) {
      mostFollows = data[person].follows.length;
      personMostFollows = data[person].name;
    }
  }
  return personMostFollows;
};
// console.log(followsMostPeople());

// Identify who has the most followers
var mostFollowers = function() {
  let mostFollowers = 0;
  let personMostFollowers = "";
  for (let person in data) {
    const currentFollowers = whoFollows(person).length;
    if (currentFollowers > mostFollowers) {
      mostFollowers = currentFollowers;
      personMostFollowers = data[person].name;
    }
  }
  return personMostFollowers;
};
// console.log(mostFollowers());

// Identify who has the most followers over 30
var mostFollowersAbove = function(age) {
  let mostFollowers = 0;
  let personMostFollowers = "";
  for (let person in data) {
    const currentFollowers = whoFollowsAbove(person, age).length;
    if (currentFollowers > mostFollowers) {
      mostFollowers = currentFollowers;
      personMostFollowers = data[person].name;
    }
  }
  return personMostFollowers;
};
// console.log(mostFollowersAbove(30));

// Identify who follows the most people over 30
var followsMostPeopleAbove = function(age) {
  let mostFollows = 0;
  let personMostFollows = "";
  for (let person in data) {
    const peopleAboveAge = followsAbove(person, age).length;
    if (peopleAboveAge > mostFollows) {
      mostFollows = peopleAboveAge;
      personMostFollows = data[person].name;
    }
  }
  return personMostFollows;
};
// console.log(followsMostPeopleAbove(30));

// List those who follow someone that doesn't follow them back
var Stalkers = function() {
  let stalkerArray = [];
  for (let profile in data) {
    const follows = idToName(data[profile].follows);
    const followers = whoFollows(profile);
    for (var name of follows) {
      if (!followers.includes(name)) {
        stalkerArray.push(data[profile].name);
        break;
      }
    }

  }
  return stalkerArray;
};
console.log(Stalkers());

// List everyone and their reach (sum of # of followers and # of followers of followers)
var network = function() {

};