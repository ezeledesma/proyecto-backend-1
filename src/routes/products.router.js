import { Router } from "express";
const router = Router();

// Array para almacenar products
const products = [
	{id:"1", nombre:"Prueba 1"},
	{id:"2", nombre:"Prueba 2"},
	{id:"3", nombre:"Prueba 3"},
	{id:"4", nombre:"Prueba 4"},
	{id:"5", nombre:"Prueba 5"},
];

router.get("/api/products", (req, res) => {
	let {limit} = req.query;
	
	try {
		if(limit) {
			res.json(products.slice(0,limit));
		} else {
			res.json(products);
		}
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.get("/api/products/:pid", (req, res) => {
	let id = req.params.pid;

	try {
		const productoBuscado = products.find(producto => producto.id === id);
		if(productoBuscado) res.json(productoBuscado);
		else res.status(404).send("Producto no encontrado");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

router.post("/api/products", (req, res) => {
	const nuevoProducto = req.body;
	
	try {
		products.push(nuevoProducto);
		res.status(201).send("Producto agregado!");
	} catch (error) {
		res.status(500).send("Error del servidor");
	}
})

export default router;