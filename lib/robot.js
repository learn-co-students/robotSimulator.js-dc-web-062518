class Robot {
	constructor(coordinates, bearing){
    this.coordinates = [0,0];
    this.bearing = 'north';
    this.validBearings = ["north", "south", "east", "west"]
  }
}

Robot.prototype.setCoordinates = function(x, y){
  this.coordinates[0] = x;
  this.coordinates[1] = y;
  return this.coordinates;
}

Robot.prototype.setBearing = function(bearing){
  if (this.validBearings.includes(bearing)){
    return this.bearing = bearing;
  } else {
    throw new Error("Invalid Robot Bearing");
  }
}

Robot.prototype.place = function(placement){
  this.setCoordinates(placement.x, placement.y);
  this.setBearing(placement.direction);
}

Robot.prototype.turnRight = function(){
  if (this.bearing === 'north'){
    this.bearing = 'east';
  } else if (this.bearing === 'east'){
    this.bearing = 'south';
  } else if (this.bearing === 'south'){
    this.bearing = 'west';
  } else if (this.bearing === 'west'){
    this.bearing = 'north';
  }
}

Robot.prototype.turnLeft = function(){
  if (this.bearing === 'north'){
    this.bearing = 'west';
  } else if (this.bearing === 'west'){
    this.bearing = 'south';
  } else if (this.bearing === 'south'){
    this.bearing = 'east';
  } else if (this.bearing === 'east'){
    this.bearing = 'north';
  }
}

Robot.prototype.advance = function(){
  if (this.bearing === 'north'){
    this.setCoordinates(this.coordinates[0], ++this.coordinates[1])
  } else if (this.bearing === 'east'){
    this.setCoordinates(++this.coordinates[0], this.coordinates[1])
  } else if (this.bearing === 'south'){
    this.setCoordinates(this.coordinates[0], --this.coordinates[1])
  } else if (this.bearing === 'west'){
    this.setCoordinates(--this.coordinates[0], this.coordinates[1])
  }
}

Robot.prototype.translateInstructions = function(instructions){
  instructions.split("").forEach(instruction => {
    if (instruction === 'L'){
      this.turnLeft();
    } else if (instruction === 'R'){
      this.turnRight();
    } else if (instruction === 'A'){
      this.advance();
    }
  })

}
