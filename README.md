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

GET: Obtener listado de todos los productos. Parametro opcional: ?limit
```
/api/products
/api/products?limit=3
```

GET: Obtener producto por id
```
/api/products/3
```

POST: Cargar un producto
```
/api/products
```
body:
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
PUT: Actualizar un producto

```
/api/products/1
```
body:
```javascript
{
    "title": "Fideos",
    "description": "Alimento",
    "code": "fd01",
    "price": 300,
    "status": true,
    "stock": 10,
    "category": "Pastas",
    "thumbnails": ["putTest"]
}
```
DELETE: Eliminar un producto
```
/api/products/2
```

### Carritos

POST: Agregar carrito

```
/api/carts
```
body:
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
GET: Obtener listado de carritos
```
/api/carts
```
GET: Obtener listado de productos de un carrito
```
/api/carts/2
```
POST: Agregar producto a un carrito
```
/api/carts/2/product/1
```

> [!NOTE]
> Sitio aun en desarrollo (primera entrega)
