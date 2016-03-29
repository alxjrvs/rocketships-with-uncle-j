var launchpad;
var ship;
var crewNames;
var trainCrew;
var crewMembers;
var rocket;
var larryCountdown;


launchpad = function(vessel, crewMembers, rockets){
  console.log("Announcing Preflight Procedures. Did everyone go? There is literally no place to stop.");
  console.log("Welcome aboard the " + vessel.name);
  vessel.loadCrew(crewMembers);
  console.log("The Captain of today's vessel is " + vessel.captain());
  vessel.mountPropulsion(rockets);
  vessel.fuelShip(5);
  larryCountdown(10, larryCountdown);
  vessel.takeoff();
};

ship = {
  name: "Rocketship",
  crew: [],
  loadCrew: function(array) {
    for (var i = 0; i < array.length; i++) {
      var name = array[i].name;
      this.crew.push(name);
      console.log(name + " has boarded!");
    }
  },
  captain: function() {
    var number = this.crew.length;
    var random_number = Math.floor(Math.random() * number);
    var captain = this.crew[random_number];
    return captain;
  },

  propulsion: null,
  mountPropulsion: function(rockets) {
    this.propulsion = rockets;
    console.log("Rockets mounted!");
  },
  fuelShip: function(amt) {
    this.propulsion.fuel = this.propulsion.fuel + amt;
    console.log("Just added " + amt + " units of fuel!")
  },
  takeoff: function() {
    if (this.propulsion.fire() ) {
      console.log("VROOOOOM!");
    } else {
      console.log("BOOOM!");
    }
  }
};

crewNames = [
  'Ann Colvin',
  'Anna Guidi',
  'Nate Goodman',
  'Britta Carroll',
  'Will Osorio',
  'James Sanderson',
  'Eric Fournier',
  "Nick D'Alfonso",
  'Majid Ihsan',
  'Nicole Gomez',
  'Greg Ward',
  'Uncle J (dank)',
  'MLG (Mom)'
];

trainCrew = function(array) {
  var crew = [];
  for (var i = 0; i < array.length; i++) {
    var crewMember;
    crewMember = {
      name: array[i]
    };
    crew.push(crewMember);
  };
  return crew;
};

rocket = {
  fuel: 0,
  fire: function(){
    if (this.fuel > 0){
      this.fuel = this.fuel - 1;
      console.log("engines fired!");
      console.log("fuelcount: " + this.fuel);
      return true;
    } else {
      console.log("Fire failed!");
      return false;
    }
  }
};

larryCountdown = function(num, func){
  countdownFunc = function(){
    if(num == 0){
      console.log("BLASTOFF!!!!");
    } else {
      console.log(num);
      func(num - 1, func);
    };
  };
  setTimeout(countdownFunc, 1000);
};

crewMembers = trainCrew(crewNames);
launchpad(ship, crewMembers, rocket);
