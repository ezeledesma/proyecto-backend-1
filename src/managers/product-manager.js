import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
	title : String,
	description : String,
	code: String,
	price: Number,
	status: Boolean,
	stock: Number,
	category: String,
	thumbnails: []
})

productSchema.plugin(mongoosePaginate);

const ProductManager = mongoose.model("products", productSchema);

export default ProductManager;

//import * as fs from "fs";
// export class ProductManager {
// 	static ultimoId = 0;
// 	static archivo;
// 	constructor(archivo) {
// 		if(archivo) {
// 			let cargarArchivo = async () => {
// 				const resultado = await fs.promises.readFile(archivo, "utf-8");
// 				this.products = JSON.parse(resultado);
				
// 				// Actualizo ultimoId
// 				this.products.map(item => {
// 					ProductManager.ultimoId = Math.max(ProductManager.ultimoId, parseInt(item.id));
// 				})
// 				// Actualizo nombre de archivo
// 				ProductManager.archivo = archivo;
// 			}
// 			cargarArchivo();
// 		}
// 		else this.products = [];
// 	}

// 	async addProduct({title, description, code, price, status=true, stock, category, thumbnails}) {
// 		// Validamos los campos obligatorios
// 		if(!title || !description || !code || !price || !stock || !category ){
// 			return "Faltan campos obligatorios!";
// 		}

// 		// Validamos que el codigo sea unico:
// 		if(this.products.some(item => item.code === code)) {
// 			return "El codigo debe ser unico!";
// 		}
		
// 		// Creamos el nuevo producto:
// 		const nuevoProducto = {
// 			id: (++ProductManager.ultimoId).toString(),
// 			title,
// 			description,
// 			code,
// 			price,
// 			status,
// 			stock,
// 			category,
// 			thumbnails
// 		}

// 		// Lo guardamos en el array:
// 		this.products.push(nuevoProducto);
// 		await fs.promises.writeFile(ProductManager.archivo, JSON.stringify(this.products, null, 2));
// 		return 0;
// 	}

// 	getProducts() {
// 		return this.products;
// 	}

// 	getProductById(id) {
// 		const productoBuscado = this.products.find(item => item.id === id);
// 		return productoBuscado;
// 	}

// 	async updateProduct(id, nuevosDatos) {
// 		const productoBuscado = this.getProductById(id);
// 		if(productoBuscado) {
// 			productoBuscado.title = nuevosDatos.title;
// 			productoBuscado.description = nuevosDatos.description;
// 			productoBuscado.code = nuevosDatos.code;
// 			productoBuscado.price = nuevosDatos.price;
// 			productoBuscado.status = nuevosDatos.status;
// 			productoBuscado.stock = nuevosDatos.stock;
// 			productoBuscado.category = nuevosDatos.category;
// 			productoBuscado.thumbnails = nuevosDatos.thumbnails;
// 		}
// 		else return -1;

// 		await fs.promises.writeFile(ProductManager.archivo, JSON.stringify(this.products, null, 2));

// 		return 0;
// 	}

// 	async deleteProduct(id) {
// 		this.products = this.products.filter(item => item.id !== id);
// 		await fs.promises.writeFile(ProductManager.archivo, JSON.stringify(this.products, null, 2));
// 		return 0;
// 	}
// }
