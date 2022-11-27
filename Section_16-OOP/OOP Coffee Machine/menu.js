class MenuItem {
	constructor(name, water, milk, coffee, cost) {
		this.name = name;
		this.cost = cost;
		this.ingredients = {
			water: water,
			milk: milk,
			coffee: coffee,
		};
	}
}

export class Menu {
	constructor() {
		this.menu = [
			MenuItem(
				(name = "latte"),
				(water = 200),
				(milk = 150),
				(coffee = 24),
				(cost = 2.5)
			),
		];
	}
	get_items() {
		const options = "";
		for (let i = 0; i < this.menu.length; i++) {
			options += this.menu[i];
		}
		console.log(options);
	}
}
