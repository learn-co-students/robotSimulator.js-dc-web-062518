class Robot {
	constructor({coordinates = [0,0], bearing = 'north'} = {}){
    this.coordinates = coordinates
    this.bearing = bearing
    this.bearings = ['north', 'east', 'south', 'west'];
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(bearing){
    if (this.bearings.includes(bearing)){
      this.bearing = bearing
    }else{
      return 'Invalid Robot Bearing'
    }
  }

  location(){
		return {x: this.coordinates[0], y: this.coordinates[1], direction: this.bearing}
  }

	place(set){
		console.log(set)
		this.coordinates[0] = set.x
		this.coordinates[1] = set.y
		this.bearing = set.direction
	}

  turnRight(){
    if(this.bearing ==='north'){this.bearing = 'east'}
    else if(this.bearing ==='east'){this.bearing = 'south'}
    else if(this.bearing ==='south'){this.bearing = 'west'}
    else if(this.bearing ==='west'){this.bearing = 'north'}
  }

  turnLeft(){
    if(this.bearing ==='north'){this.bearing = 'west'}
    else if(this.bearing ==='west'){this.bearing = 'south'}
    else if(this.bearing ==='south'){this.bearing = 'east'}
    else if(this.bearing ==='east'){this.bearing = 'north'}
  }

  advance(){
    if (this.bearing === 'north'){this.coordinates[1]+=1}
    if (this.bearing === 'south'){this.coordinates[1]-=1}
    if (this.bearing === 'east'){this.coordinates[0]+=1}
    if (this.bearing === 'west'){this.coordinates[0]-=1}
  }

  translateInstructions(instructions){
		instructions.split('').forEach((instruction)=>{
	    if (instruction === 'L'){this.turnLeft()}
			else if (instruction === 'R'){this.turnRight()}
			else if (instruction === 'A'){this.advance()}
		})
  }

}
