/* Primera Entrega */

import express from "express";
const app = express();
const PUERTO = 8080;

// Importo routers:
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";

// Middleware:
app.use(express.json());

app.use(express.urlencoded({extended:true}));

// Rutas:
app.use("/",cartsRouter);
app.use("/",productsRouter);

app.listen(PUERTO, () => {
	console.log(`Escuchando en el puerto http://localhost:${PUERTO}`);
})
