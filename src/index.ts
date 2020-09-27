import { Car } from './Car';

const displayCar = ({ brand, speed, color }: Car): void =>
	console.log(`	
			Brand: ${brand}
			Color: ${color}
			Speed: ${speed}`);

const cars: Car[] = [
	{ brand: 'Peugeot', speed: 110, color: 'blue' },
	{ brand: 'Audi', speed: 150, color: 'red' },
	{ brand: 'Renault', speed: 90, color: 'red' },
	{ brand: 'Ford', speed: 140, color: 'green' },
	{ brand: 'Citroen', speed: 120, color: 'blue' },
	{ brand: 'Skoda', speed: 110, color: 'red' },
];

displayCar(cars[0]);

// #region Step1: No typings
// const shuffledCars = shuffle(cars); // Shuffle the list of cars
// forEach(shuffledCars, (car) => displayCar(car)); // Iterate through cars and dislay them
// #endregion

// #region Step2: Typings
// console.log('Green car');
// displayCar(find(cars, { color: 'green' })); // <= Bad
// const greenCar = find(cars, { color: 'green' });
// if (greenCar) {
// 	displayCar(greenCar);
// }
// #endregion
