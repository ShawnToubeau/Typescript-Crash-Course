class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('vroom vroom');
  }

  protected honk(): void {
    console.log('H O N K');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('skirt skirt');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
car.startDriving();
