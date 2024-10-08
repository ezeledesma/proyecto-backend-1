// Creamos una instancia de socket.io del lado del cliente:
const socket = io();

// Emitir conexion para cargar productos
socket.emit("conectar");

// Listener de Productos:
socket.on("updateProducts", data => {
	const log = document.getElementById("products-container");
	let productos = "";
	data.forEach(product => {
		productos = productos + `		
	<div class="card">
		<h3>${product.title}</h3>
		<p>${product.description}</p>
		<p>Precio: ${product.price}</p>
	</div>
	`;
	});
	log.innerHTML = productos;
})