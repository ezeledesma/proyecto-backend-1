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

#### GET: ```/api/products```. Obtener listado de todos los productos . Parametro opcional: ```?limit```
Ejemplo
```
http://localhost:8080/api/products
http://localhost:8080/api/products?limit=3
```

#### GET: ```/api/products/:pid```. Obtener producto por id 
Ejemplo
```
http://localhost:8080/api/products/3
```

#### POST: ```/api/products```. Cargar un producto
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
#### PUT: ```/api/products/:pid```. Actualizar un producto
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
#### DELETE: ```/api/products/:pid```. Eliminar un producto
Ejemplo
```
http://localhost:8080/api/products/2
```

### Carritos

#### POST: ```/api/carts```. Agregar carrito
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
#### GET: ```/api/carts```. Obtener listado de carritos
Ejemplo
```
http://localhost:8080/api/carts
```
#### GET: ```/api/carts/:cid```. Obtener listado de productos de un carrito
Ejemplo
```
http://localhost:8080/api/carts/2
```
#### POST: ```/api/carts/:cid/product/:pid```. Agregar producto a un carrito
Ejemplo
```
http://localhost:8080/api/carts/2/product/1
```

<details>
<summary>

## How do I dropdown?
</summary>

## This is how you dropdown.
</details>

> [!NOTE]
> Sitio aun en desarrollo (primera entrega)
