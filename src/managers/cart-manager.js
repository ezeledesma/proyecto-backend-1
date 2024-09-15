import * as fs from "fs";

export class CartManager {
	static ultimoId = 0;
	constructor(archivo) {
		if(archivo) {
			let cargarArchivo = async () => {
				const resultado = await fs.promises.readFile(archivo, "utf-8");
				this.carts = JSON.parse(resultado);
				
				// Actualizo ultimoId
				this.carts.map(item => {
					CartManager.ultimoId = Math.max(CartManager.ultimoId, parseInt(item.id));
				})
			}
			cargarArchivo();
		}
		else this.carts = [];
	}

	addCart(products) {
		// Validamos los campos obligatorios
		if(!products){
			return "Faltan campos obligatorios!";
		}
		
		// Creamos el nuevo carrito:
		const nuevoCarrito = {
			id: (++CartManager.ultimoId).toString(),
			products
		}

		// Lo guardamos en el array:
		this.carts.push(nuevoCarrito);
		return 0;
	}

	getCarts() {
		return this.carts;
	}

	getCartById(id) {
		const carritoBuscado = this.carts.find(item => item.id === id);
		if(carritoBuscado) return carritoBuscado.products;
		else return 0;
	}

	addProductCart(idCart, idProduct) {
		const carritoBuscado = this.getCartById(idCart);
		if(!carritoBuscado) return "No se encontro carrito!";
		const productoBuscado = carritoBuscado.find(item => item.id === idProduct);
		if(productoBuscado) {
			// Si el producto ya existe en el carrito, incremento contador
			productoBuscado.quantiy++;
		}
		else {
			carritoBuscado.push({
				id:idProduct,
				quantiy:1
			})
		}
		return 0;
	}
}
