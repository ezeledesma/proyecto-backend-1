# Backend 1 - CoderHouse: [Primera Entrega](https://github.com/ezeledesma/proyecto-backend-1)

## Temas Aplicados del Curso
* NodeJS
* Paquetes NPM
* Manejo de archivos en JavaScript
* Servidores Web
* Express
* Router

------

## Rutas

### Productos

<details>
<summary>

#### GET ```/api/products```. Obtener listado de todos los productos . Parametro opcional: ```?limit```
</summary>

Ejemplo
```
http://localhost:8080/api/products
http://localhost:8080/api/products?limit=3
```
</details>

<details>
<summary>

#### GET: ```/api/products/:pid```. Obtener producto por id 
</summary>

Ejemplo
```
http://localhost:8080/api/products/3
```
</details>

<details>
<summary>

#### POST: ```/api/products```. Cargar un producto
</summary>

Ejemplo
```
http://localhost:8080/api/products
```
Body
```javascript
{
	"title": "Yerba",
	"description": "Yerba palo",
	"code": "ybp01",
	"price": 100,
	"status": false,
	"stock": 5,
	"category": "Yerba",
	"thumbnails": []
}
```
</details>

<details>
<summary>

#### PUT: ```/api/products/:pid```. Actualizar un producto
</summary>

Ejemplo
```
http://localhost:8080/api/products/1
```
Body
```javascript
{
	"title": "Fideos",
	"description": "Alimento",
	"code": "fd01",
	"price": 300,
	"status": true,
	"stock": 10,
	"category": "Pastas",
	"thumbnails": ["imagen-fideos-1.png","imagen-fideos-2.png"]
}
```
</details>

<details>
<summary>

#### DELETE: ```/api/products/:pid```. Eliminar un producto
</summary>

Ejemplo
```
http://localhost:8080/api/products/2
```
</details>

### Carritos

<details>
<summary>

#### GET: ```/api/carts```. Obtener listado de carritos
</summary>

Ejemplo
```
http://localhost:8080/api/carts
```
</details>

<details>
<summary>

#### GET: ```/api/carts/:cid```. Obtener listado de productos de un carrito
</summary>

Ejemplo
```
http://localhost:8080/api/carts/2
```
</details>

<details>
<summary>

#### POST: ```/api/carts```. Agregar carrito
</summary>

Ejemplo
```
http://localhost:8080/api/carts
```
Body
```javascript
[
	{
		"id": "2",
		"quantity": 4
	},
	{
		"id":"3",
		"quantity": 2
	}
]
```
</details>

<details>
<summary>

#### POST: ```/api/carts/:cid/product/:pid```. Agregar producto a un carrito
</summary>

Ejemplo
```
http://localhost:8080/api/carts/2/product/1
```
</details>

> [!NOTE]
> Sitio aun en desarrollo (primera entrega)
