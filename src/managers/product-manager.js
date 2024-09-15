export class ProductManager {
	static ultimoId = 0;
	constructor() {
		this.products = [];
	}

	addProduct({title, description, code, price, status=true, stock, category, thumbnails}) {
		// Validamos los campos obligatorios
		if(!title || !description || !code || !price || !stock || !category ){
			return "Faltan campos obligatorios!";
		}

		// Validamos que el codigo sea unico:
		if(this.products.some(item => item.code === code)) {
			return "El codigo debe ser unico!";
		}
		
		// Creamos el nuevo producto:
		const nuevoProducto = {
			id: (++ProductManager.ultimoId).toString(),
			title,
			description,
			code,
			price,
			status,
			stock,
			category,
			thumbnails
		}

		// Lo guardamos en el array:
		this.products.push(nuevoProducto);
		return 0;
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const productoBuscado = this.products.find(item => item.id === id);
		return productoBuscado;
	}

	updateProduct(id, nuevosDatos) {
		const productoBuscado = this.getProductById(id);
		if(productoBuscado) {
			productoBuscado.title = nuevosDatos.title;
			productoBuscado.description = nuevosDatos.description;
			productoBuscado.code = nuevosDatos.code;
			productoBuscado.price = nuevosDatos.price;
			productoBuscado.status = nuevosDatos.status;
			productoBuscado.stock = nuevosDatos.stock;
			productoBuscado.category = nuevosDatos.category;
			productoBuscado.thumbnails = nuevosDatos.thumbnails;
		}
		else return -1;
		return 0;
	}

	deleteProduct(id) {
		this.products = this.products.filter(item => item.id !== id);
		return 0;
	}
}
