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

// Helper function to list followers of given person
var whoFollows = function(ID) {
  var followersArray = [];
  for (var profile in data) {
    if (data[profile].follows.includes(ID)) {
      followersArray.push(data[profile].name);
    }
  }
  // console.log(followersArray);
  return followersArray;
};
// whoFollows("f05");

var idToName = function(arr) {
  const listOfNames = [];
  arr.forEach(function(id) {
    listOfNames.push(data[id].name);
  });
  // console.log(listOfNames);
  return listOfNames;
};
// idToName(["f02", "f03", "f04"]);

// List everyone and for each of them, list the names of who they follow and who follows them
var whoFollowsWho = function() {
  var listWhoFollowsWho = {};
  for (var person in data) {
    listWhoFollowsWho[data[person].name] = {
      follows: idToName(data[person].follows),
      hasFollowing: whoFollows(person)
    }
  }
  console.log(listWhoFollowsWho);
  return listWhoFollowsWho;
};
/*
var final = {
  bob: {
    follows: [Elizabeth, Finn],
    hasFollowing: [Debbie, Elizabeth, Finn]
  },
  Charlie: [Alice, Debbie]
};
*/
whoFollowsWho();


// Identify who follows the most people
var followsMostPeople = function() {

};

// Identify who has the most followers
var mostFollowers = function() {

};

// Identify who has the most followers over 30
var mostFollowersAbove = function() {

};

// Identify who follows the most people over 30
var followsMostPeopleAbove = function() {

};

// List those who follow someone that doesn't follow them back
var Stalkers = function() {

};

// List everyone and their reach (sum of # of followers and # of followers of followers)
var network = function() {

};