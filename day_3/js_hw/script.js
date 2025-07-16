const myObject = {
  x1: "Samba",
  x2: {
    x3: {
      x4: {},
      x5: "Rails"
    },
    x6: {
      x7: -1,
      x8: [25, 8, 4, 10]
    }
  }
};

const {x2: {x3:y}} = myObject;

const {x2: {x6:{x8: [,second_value]}}} = myObject;
// =============================================================
const newObject = {
  ...myObject,
  newKey1: "value1",
  newKey2: "value2"
};

console.log(newObject);
// ===============================================================
const sum = Array.reduce((acc,cur)=>(acc+cur,0))
// ===============================================================
// object and class

class Vehicle {
    constructor(brand,speed) {
        this.brand = brand;
        this.speed = speed;
    }

    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed , fuelType) {
        super(brand,speed);
        this.fuelType = fuelType;
    }

    refuel() {
        console.log(`${this.brand} is refueling with ${this.fuelType}`);
    }
}

const mycar = new Car ('Toyotta', 90, 'petrol');
mycar.move();
mycar.refuel();

