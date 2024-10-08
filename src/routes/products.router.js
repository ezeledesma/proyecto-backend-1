import { Router } from "express";
const router = Router();
import { ProductManager } from "../managers/product-manager.js"
const manager = new ProductManager("./src/data/products.json");

router.get("/api/products", (req, res) => {
	let {limit} = req.query;
	
	try {
		if(limit) {
			res.json(manager.getProducts().slice(0,limit));
		} else {
			res.json(manager.getProducts());
		}
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.get("/api/products/:pid", (req, res) => {
	let id = req.params.pid;

	try {
		const productoBuscado = manager.getProductById(id);
		if(productoBuscado) res.json(productoBuscado);
		else res.status(404).send("Producto no encontrado");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.post("/api/products", async (req, res) => {
	const nuevoProducto = req.body;
	
	try {
		let aux = await manager.addProduct(nuevoProducto);
		if(!aux) res.status(201).send("Producto agregado!");
		else res.status(409).send(aux);
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.put("/api/products/:pid", async (req, res) => {
	let id = req.params.pid;
	const nuevosDatos = req.body;
	try {
		let aux = await manager.updateProduct(id, nuevosDatos);
		if(!aux) res.status(204).send("Producto actualizado!");
		else res.status(404).send("Producto no encontrado");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.delete("/api/products/:pid", async (req, res) => {
	let id = req.params.pid;

	try {
		let aux = await manager.deleteProduct(id);
		if(!aux) res.status(204).send("Producto eliminado!");
		else res.status(404).send("Producto no encontrado");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.get("/", (req, res) => {
	res.render("home", {productos:manager.getProducts()});
})

router.get("/realtimeproducts", (req, res) => {
	res.render("realTimeProducts");
})

export default router;
