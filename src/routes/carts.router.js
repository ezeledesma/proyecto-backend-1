import { Router } from "express";
const router = Router();
import CartManager from "../managers/cart-manager.js";

router.get("/api/carts", async (req, res) => {
	const carts = await CartManager.find();
	res.json(carts);
})

router.post("/api/carts", async (req, res) => {
	const nuevoCarrito = req.body;
		const nuevoCarrito2 = [{
			products:nuevoCarrito
		}]

	try {
		let aux = await CartManager.insertMany(nuevoCarrito2);

		if(aux) res.status(201).send("Producto agregado!");
		else res.status(409).send(aux);
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.get("/api/carts/:cid", async (req, res) => {
	let id = req.params.cid;

	try {
		const carritoBuscado = await CartManager.findById(id);
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