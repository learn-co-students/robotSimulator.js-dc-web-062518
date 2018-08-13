class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    let bearings = ["north", "east", "south", "west"]
    if (bearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

  turnRight() {
    let bearings = ["north", "east", "south", "west", "north"]
    let d = bearings.findIndex(element => {
      return element === this.bearing
    })
    this.bearing = bearings[d + 1]
  }

  turnLeft() {
    let bearings = ["north", "east", "south", "west"]
    if (this.bearing === "north") {
      this.bearing = "west"
    } else {
      let d = bearings.findIndex(element => {
        return element === this.bearing
      })
      this.bearing = bearings[d - 1]
    }
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break
      case 'east':
        this.coordinates[0] += 1
        break
      case 'south':
        this.coordinates[1] -= 1
        break
      case 'west':
        this.coordinates[0] -= 1
        break
    }
  }

  translateInstructions(str) {
    let instarray = str.split("")
    instarray.forEach(letter => {
      if (letter === "L") {
        this.turnLeft()
      } else if (letter === "R") {
        this.turnRight()
      } else if (letter === "A") {
        this.advance()
      }
    })
  }

}
