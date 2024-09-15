import { Router } from "express";
const router = Router();
import { CartManager } from "../managers/cart-manager.js";
const manager = new CartManager("./src/data/cart.json");

router.get("/api/carts", (req, res) => {
	res.json(manager.getCarts());
})

router.post("/api/carts", (req, res) => {
	const nuevoCarrito = req.body;

	try {
		let aux = manager.addCart(nuevoCarrito);
		if(!aux) res.status(201).send("Producto agregado!");
		else res.status(409).send(aux);
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.get("/api/carts/:cid", (req, res) => {
	let id = req.params.cid;

	try {
		const carritoBuscado = manager.getCartById(id);
		if(carritoBuscado) res.json(carritoBuscado);
		else res.status(404).send("Carrito no encontrado");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.post("/api/carts/:cid/product/:pid", (req, res) => {
	let idCart = req.params.cid;
	let idProduct = req.params.pid;
	try {
		let aux = manager.addProductCart(idCart, idProduct);
		if(!aux) res.status(201).send("Producto agregado en carrito!");
		else res.status(409).send(aux);
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

export default router;