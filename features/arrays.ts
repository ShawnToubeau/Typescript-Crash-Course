const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(1);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push(new Date());
importantDates.push('11-11-2011');
