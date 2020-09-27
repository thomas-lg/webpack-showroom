# webpack-showroom

Introduction to the power of Webpack 🚀!

## 03-typings_files

Search for typings files to trigger autocomplete, make code more robust and fail fast. Explain what is a [types](https://www.npmjs.com/search?q=%40types) file.

- tsconfig configuration [docs](https://www.typescriptlang.org/tsconfig)
- show how does it work without typings => No autocomplete/no type checking
- do `npm i -D @types/lodash`
- show autocomplete with some lodash methods and type checking and why it fail faster with the following code snippet

```typescript
// Begin with
displayCar(find(cars, { color: 'green' }));
// And then refactor to next lines thanks to @types
const greenCar = find(cars, { color: 'green' });
if (greenCar) {
	displayCar(greenCar);
}
```

- talk about other examples if any ([mapbox](https://docs.mapbox.com/mapbox-gl-js/api/map/)/[@types/mapbox](https://www.npmjs.com/package/@types/mapbox-gl))

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)
