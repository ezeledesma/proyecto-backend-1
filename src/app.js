/* Primera Entrega */

import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";
const app = express();
const PUERTO = 8080;
mongoose.connect("mongodb+srv://ezeledesma97:1QU3c7Lc3sZ1hT9O@cluster0.g2ihj.mongodb.net/EntregaFinal?retryWrites=true&w=majority&appName=Cluster0");

// Importo routers:
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";
import ProductManager from "./managers/product-manager.js"

// Productos
//const manager = new ProductManager("./src/data/products.json");

// Middleware:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));

// Configuramos Express-Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/",cartsRouter);
app.use("/",productsRouter);

const httpServer = app.listen(PUERTO, () => {
	console.log(`Escuchando en el puerto http://localhost:${PUERTO}`);
})

// Generamos la instancia de Socket.io del lado del backend
const io = new Server(httpServer);

io.on("connection", (socket) => {
	console.log("Nuevo usuario conectado");

	socket.on("conectar", async data => {
		try {
			const productos = await ProductManager.find();
			io.emit("updateProducts", productos);
		} catch (error) {
			console.log("Error en el servidor: ", error);
		}
	})
})
