const direction = ['north','east','south','west']


class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(bearing){
    if(['north','south','east','west'].includes(bearing.toLowerCase())){
      this.bearing = bearing
    }else{
      let err = Error("Invalid Robot Bearing")
      throw err;
    }
  }

  place(object){
    this.bearing = object.direction;
    this.coordinates = [object.x,object.y]
  }

  turnRight(){
    let i = direction.indexOf(this.bearing);
    i < 3? i = i + 1: i = 0;
    this.bearing = direction[i]
  }

  turnLeft(){
    let i = direction.indexOf(this.bearing);
    i == 0? i = 3: i = i - 1;
    this.bearing = direction[i]
  }

  advance(){
    switch(this.bearing){
      case 'north':
        this.coordinates[1] = this.coordinates[1] + 1;
        break;
      case 'south':
        this.coordinates[1] = this.coordinates[1] - 1;
        break;
      case 'east':
        this.coordinates[0] = this.coordinates[0] + 1;
        break;
      case 'west':
        this.coordinates[0] = this.coordinates[0] - 1;
        break;
      default:
        "do nothing"

    }
  }


  translateInstructions(string){
    for(let i = 0; i < string.length; i++){
      let dir = string[i];

      switch(dir){
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
        default:
          'do nothing'
      }
    }
  }
}
