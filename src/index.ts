import { Car } from './Car';

const displayCar = ({ brand, speed, color }: Car): void =>
	console.log(`	
			Brand: ${brand}
			Color: ${color}
			Speed: ${speed}`);

displayCar({ brand: 'Peugeot', speed: 110, color: 'blue' });
displayCar({ brand: 'Audi', speed: 150, color: 'red' });
