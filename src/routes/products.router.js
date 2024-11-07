import { Router } from "express";
const router = Router();
import ProductManager from "../managers/product-manager.js"
//const manager = new ProductManager("./src/data/products.json");

router.get("/api/products", async (req, res) => {
	let limit = req.query.limit || 10;
	let page = req.query.page || 1;
	let sort = req.query.sort;
	let query = req.query.query;
	
	try {
		let order = {};
		if(sort == 'asc') {
			order = { price: 1 }
		}
		else if (sort == 'desc') {
			order = { price: -1 }
		}
		const productos = await ProductManager.paginate(JSON.parse(query), {sort: order, limit, page});
		let prevLink = null;
		let nextLink = null;
		if(productos.hasPrevPage) {
			prevLink = `/api/products?limit=${limit}&page=${productos.page-1}&sort=${sort}&query=${query}`;
		}

		if(productos.hasNextPage) {
			nextLink = `/api/products?limit=${limit}&page=${productos.page+1}&sort=${sort}&query=${query}`;
		}

		const productosFinal = {
			status:"success",
			payload: productos.docs,
			totalPages: productos.totalPages,
			prevPage: productos.prevPage,
			nextPage: productos.nextPage,
			page: productos.page,
			hasPrevPage: productos.hasPrevPage,
			hasNextPage: productos.hasNextPage,
			prevLink: prevLink,
			nextLink: nextLink
		}

		res.json(productosFinal);
	} catch (error) {
		res.status(500).json({status:"error"});
	}
	// status:success/error
	// payload: Resultado de los productos solicitados
	// totalPages: Total de páginas
	// prevPage: Página anterior
	// nextPage: Página siguiente
	// page: Página actual
	// hasPrevPage: Indicador para saber si la página previa existe
	// hasNextPage: Indicador para saber si la página siguiente existe.
	// prevLink: Link directo a la página previa (null si hasPrevPage=false)
	// nextLink: Link directo a la página siguiente (null si hasNextPage=false)

})

router.get("/api/products/:pid", async (req, res) => {
	let id = req.params.pid;

	try {
		const productoBuscado = await ProductManager.findById(id);
		//const productoBuscado = manager.getProductById(id);
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

router.get("/", async (req, res) => {
	let limit = req.query.limit || 10;
	let page = req.query.page || 1;
	let sort = req.query.sort;
	let query = req.query.query;

	let order = {};
	if(sort == 'asc') {
		order = { price: 1 }
	}
	else if (sort == 'desc') {
		order = { price: -1 }
	}
	const productos = await ProductManager.paginate(JSON.parse(query), {sort: order, limit, page});
	
	const productosFinal = productos.docs.map(producto => {
		const {_id, ...rest} = producto.toObject();
		return rest;
	})

	res.render("home", {productos:productosFinal});
})

router.get("/realtimeproducts", (req, res) => {
	res.render("realTimeProducts");
})

export default router;
