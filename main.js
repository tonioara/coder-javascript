
// let ingreso = false;
// let banderaProgramaPrincipal = true; // Controla el bucle principal del programa
// let banderaCatalogoHamburguesas = true; // Controla las opciones dentro del menú de Hamburguesas
// let banderaVerCatalogoHamburguesas = true; // Controla el bucle para agregar hamburguesas


// const user = 'tonioara';
// let cantidadDeIntentos = 3;


// function checkUser(userLogin, userPassword) {
	// for (let i = 0; i < cantidadDeIntentos; i++) {
		// if (userLogin === null || userPassword === null) {
			// alert(
				// 'Los datos son vacios \n Porfavor ingrese sus datos de nuevo'
			// );
		// } else if (
			// userPassword.length >= 8 &&
			// /[0-9]/.test(userPassword) &&
			// /[A-Z]/.test(userPassword)
		// ) {
			// alert('La contrasena es correcta');
			// ingreso = true;
			// return ingreso;
		// } else {
			// alert(
				// 'Por favor, ingrese sus datos de nuevo. La contrasena debe:\n- Una mayuscula\n - Contener minimo 8 caracteres\n - Contener al menos un numero'
			// );
			// userLogin = prompt('Cual es el user');
			// userPassword = prompt('Cual es tu contrasena');
		// }
	// }
	// return ingreso;
// }

// function menuPrincipalPrograma() {
    // let opcion = Number(
        // prompt(
            // 'Bienvenido a BurguerHouse!!\n\nElija la sección que desea visitar:\n\n' +
            // '1. Sección de Pizzas\n' +
            // '2. Sección de Hamburguesas\n' +
            // '3. Ver Carrito Unificado\n' +
            // '4. Salir del Programa'
        // )
    // );
    // return opcion;
// }


// function menuHamburguesas() {
    // let op = Number(
        // prompt(
            // '--- Sección de Hamburguesas ---\n\n' +
            // '1. Ver Catálogo de Hamburguesas\n' +
            // '2. Crear Nueva Hamburguesa (admin)\n' +
            // '3. Agregar Hamburguesa al Carrito por ID\n' +
            // '4. Borrar Hamburguesa del Carrito por ID\n' +
            // '5. Volver al Menú Principal'
        // )
    // );
    // return op;
// }

// // Menú específico para la sección de Pizzas
// function menuPizzas() {
    // let opMenu = Number(
        // prompt(
            // '--- Sección de Pizzas ---\n\n' +
            // '1. Ver Pizzas Disponibles\n' +
            // '2. Agregar Pizza al Carrito por ID\n' +
            // '3. Borrar Pizza del Carrito por ID\n' +
            // '4. Volver al Menú Principal'
        // )
    // );
    // return opMenu;
// }


// const PizzasBurguerHouse = [
    // { nombre: 'Margarita', precio: 240, id: 1},
    // { nombre: 'Peperoni', precio: 260, id: 2},
    // { nombre: 'Cuatro Quesos', precio: 280, id: 3},
    // { nombre: 'PizzaFat', precio: 300, id: 4},
    // { nombre: 'Clasica', precio: 220, id: 5},
// ]

// const HamburguesaBurguerHouse = [
    // { nombre: 'Clasica', panes: 'De papa', carnes: 1, ingredientes: 'Lechuga, tomate, queso', precio: 180, id: 6 },
    // { nombre: 'Doble ', panes: 'Brioche', carnes: 2, ingredientes: 'Doble, cebolla caramelizada', precio: 250, id: 7 },
    // { nombre: 'Triple', panes: 'De Queso', carnes: 1, ingredientes: 'Bacon, cebolla frita, salsa BBQ', precio: 280, id: 8 },
    // { nombre: 'Vegetariana', panes: 'Remolacha', carnes: 0, ingredientes: 'Medallón de lentejas, aguacate, tomate', precio: 250, id: 9 },
// ]

// class HamburguesaCatalogo {
    // constructor(nombre, panes, carnes, ingredientes, precio, id) {
        // this.nombre = nombre;
        // this.panes = panes;
        // this.carnes = carnes;
        // this.ingredientes = ingredientes;
        // this.precio = precio;
        // this.id = id;
        // this.cantidad = 0;
    // }
// }

// class PizzasCatalogo {
    // constructor(nombre, precio, id) {
        // this.nombre = nombre;
        // this.precio = precio;
        // this.id = id;
        // this.cantidad = 0;
    // }
// }

// const creadoraDeHamburguesa = () => {
    // let arrayBurguer = [];
    // for (let i = 0; i < HamburguesaBurguerHouse.length; i++) {
        // let objetoArrayBurguer = new HamburguesaCatalogo(
            // HamburguesaBurguerHouse[i].nombre,
            // HamburguesaBurguerHouse[i].panes,
            // HamburguesaBurguerHouse[i].carnes,
            // HamburguesaBurguerHouse[i].ingredientes,
            // HamburguesaBurguerHouse[i].precio,
            // HamburguesaBurguerHouse[i].id
        // );
        // arrayBurguer.push(objetoArrayBurguer);
    // }
    // return arrayBurguer;
// }

// const creadoraDePizzas = () => {
    // let arrayPizzas = [];
    // for (let i = 0; i < PizzasBurguerHouse.length; i++) {
        // let objetoArrayPizzas = new PizzasCatalogo(
            // PizzasBurguerHouse[i].nombre,
            // PizzasBurguerHouse[i].precio,
            // PizzasBurguerHouse[i].id,
        // );
        // arrayPizzas.push(objetoArrayPizzas);
    // }
    // return arrayPizzas;
// }

// const arrayHamburguesaBurguerHouse = creadoraDeHamburguesa();
// console.log(arrayHamburguesaBurguerHouse);

// const verHamburguesas = () => {
    // if (arrayHamburguesaBurguerHouse.length === 0) {
        // alert('No hay hamburguesas disponibles en el catálogo.');
        // return;
    // }
    // let mensaje = 'Las hamburguesas disponibles son:\n ';
    // for (let i = 0; i < arrayHamburguesaBurguerHouse.length; i++) {
        // mensaje += `\nID: ${arrayHamburguesaBurguerHouse[i].id}) ${arrayHamburguesaBurguerHouse[i].nombre} - $${arrayHamburguesaBurguerHouse[i].precio}\n` +
            // `   Pan: ${arrayHamburguesaBurguerHouse[i].panes}\n` +
            // `   Carnes: ${arrayHamburguesaBurguerHouse[i].carnes}\n` +
            // `   Ingredientes: ${arrayHamburguesaBurguerHouse[i].ingredientes}\n`;
    // }
    // alert(mensaje);
// }

// const arrayPizzasBurguerHouse = creadoraDePizzas();
// console.log(arrayPizzasBurguerHouse);

// const verPizzas = () => {
    // let mensaje = 'Las pizzas que tenemos disponible son : '
    // for (let i = 0; i < arrayPizzasBurguerHouse.length; i++) {
        // mensaje += `\n\n ${arrayPizzasBurguerHouse[i].id} ${arrayPizzasBurguerHouse[i].nombre} - $ ${arrayPizzasBurguerHouse[i].precio}`
    // }
    // alert(mensaje)
// }

// class Carrito {
    // constructor() {
        // this.productosCarrito = [];
    // }

    // comprarPizzasPorId = (id) => {
        // const productoEnCatalogo = arrayPizzasBurguerHouse.find(pizza => pizza.id === id);

        // if (!productoEnCatalogo) {
            // alert(`No tenemos un producto con el ID ${id} en nuestro Catálogo.`);
            // return;
        // }
        // const indexEnCarrito = this.productosCarrito.findIndex(item => item.id === id);

        // if (indexEnCarrito === -1) {
            // let objetoDelCarrito = {
                // nombre: productoEnCatalogo.nombre,
                // precio: productoEnCatalogo.precio,
                // id: productoEnCatalogo.id,
                // cantidad: 1,
            // };
            // this.productosCarrito.push(objetoDelCarrito);
            // alert(`¡${productoEnCatalogo.nombre} agregado al carrito!`);
        // } else {
            // this.productosCarrito[indexEnCarrito].cantidad += 1;
            // alert(`¡Cantidad de ${productoEnCatalogo.nombre} actualizada en el carrito!`);
        // }
    // };

    // comprarHamburguesaPorId = (id) => {
        // const productoEnCatalogo = arrayHamburguesaBurguerHouse.find(hamburguesa => hamburguesa.id === id);
        // if (!productoEnCatalogo) {
            // alert(`No tenemos un producto con el ID ${id} en nuestro Catálogo.`);
            // return;
        // }
        // const indexEnCarrito = this.productosCarrito.findIndex(item => item.id === id);
        // if (indexEnCarrito === -1) {
            // let objetoDelCarrito = {
                // nombre: productoEnCatalogo.nombre,
                // precio: productoEnCatalogo.precio,
                // id: productoEnCatalogo.id,
                // cantidad: 1,
            // };
            // this.productosCarrito.push(objetoDelCarrito);
            // alert(`¡${productoEnCatalogo.nombre} agregado al carrito!`);
        // } else {
            // this.productosCarrito[indexEnCarrito].cantidad += 1;
            // alert(`¡Cantidad de ${productoEnCatalogo.nombre} actualizada en el carrito!`);
        // }
    // };

    // borrarPorId = (idABorrar) => {
        // const indexEnCarrito = this.productosCarrito.findIndex(productoEnCarrito => {
            // console.log("Comparando producto en carrito (ID:", productoEnCarrito.id, ") con ID a borrar:", idABorrar);
            // return productoEnCarrito.id === idABorrar;
        // });
        // console.log("Resultado de findIndex (indexEnCarrito):", indexEnCarrito);

        // if (indexEnCarrito === -1) {
            // alert(`El producto con ID "${idABorrar}" no se encontró en tu carrito. Por favor, revisa el ID.`)
            // return;
        // }
        // const productoEnCarrito = this.productosCarrito[indexEnCarrito];
        // console.log("Producto encontrado en el carrito (objeto):", productoEnCarrito)

        // if (productoEnCarrito.cantidad > 1) {
            // console.log("Cantidad actual del producto > 1. Decrementando...");
            // productoEnCarrito.cantidad -= 1
            // alert(`Se ha reducido la cantidad de "${productoEnCarrito.nombre}" a ${productoEnCarrito.cantidad}.`)
            // console.log("Nuevo estado del producto en carrito (después de decrementar):", productoEnCarrito);
        // } else {
            // console.log("Cantidad actual del producto es 1. Eliminando completamente...");
            // this.productosCarrito.splice(indexEnCarrito, 1);
            // alert(`"${productoEnCarrito.nombre}" ha sido eliminado de tu carrito.`);
            // console.log("Estado de this.productosCarrito después de splice:", JSON.stringify(this.productosCarrito));
        // }
        // this.verCarrito();
    // }

    // verCarrito = () => {
        // let mensaje = 'Estos son los productos en tu carrito:\n';
        // let total = 0;

        // if (this.productosCarrito.length === 0) {
            // alert('Tu carrito está vacío.');
            // return;
        // }

        // for (let i = 0; i < this.productosCarrito.length; i++) {
            // total += Number(this.productosCarrito[i].precio) * this.productosCarrito[i].cantidad;
            // mensaje += `\n * ID =${this.productosCarrito[i].id} -- ${this.productosCarrito[i].nombre} - $ ${this.productosCarrito[i].precio} - Cantidad: ${this.productosCarrito[i].cantidad}`;
        // }
        // mensaje += `\n\nEl total de tu compra es de $ ${total}`;
        // alert(mensaje);
    // }
// }
// principalHamburguesa = ()=>{

    // let banderaSeccionHamburguesas = true;
// while (banderaSeccionHamburguesas) {
    // let opcionHamburguesa = menuHamburguesas();
    // if (!isNaN(opcionHamburguesa) && opcionHamburguesa !== null) {
        // switch (opcionHamburguesa) {
            // case 1: // Ver Catálogo
                // verHamburguesas();
                // break;
            // case 2: // Crear Hamburguesa
                // crearHamburguesa();
                // break;
            // case 3: // Agregar Hamburguesa al Carrito por ID
                // let idHamburAgregar = Number(prompt('Ingrese el ID de la hamburguesa que quiere agregar al carrito:'));
                // if (!isNaN(idHamburAgregar) && idHamburAgregar > 0) {
                    // miCarritoUnico.comprarHamburguesaPorId(idHamburAgregar);
                // } else {
                    // alert('Por favor, ingrese un ID numérico válido y positivo para la hamburguesa.');
                // }
                // break;
            // case 4: // Borrar Hamburguesa del Carrito por ID
                // let idHamburBorrar = Number(prompt('Ingrese el ID de la hamburguesa que quiere borrar del carrito:'));
                // if (!isNaN(idHamburBorrar) && idHamburBorrar > 0) {
                    // miCarritoUnico.borrarPorId(idHamburBorrar);
                // } else {
                    // alert('Por favor, ingrese un ID numérico válido y positivo para la hamburguesa a borrar.');
                // }
                // break;
            // case 5: // Volver
                // banderaSeccionHamburguesas = false;
                // break;
            // default:
                // alert('Opción no válida en la sección de Hamburguesas.');
                // break;
        // }
    // } else {
        // alert('Entrada inválida en la sección de Hamburguesas.');
        // banderaSeccionHamburguesas = false;
    // }
// }}

// principalPizzas =() => {

    // let banderaSeccionPizzas = true;
// while (banderaSeccionPizzas) {
    // let opcionPizza = menuPizzas();
    // if (!isNaN(opcionPizza) && opcionPizza !== null) {
        // switch (opcionPizza) {
            // case 1: // Ver Pizzas
                // verPizzas();
                // break;
            // case 2: // Agregar Pizza por ID
                // let idPizzaAgregar = Number(prompt(`Ingrese el ID de la pizza que quiere agregar:`));
                // if (!isNaN(idPizzaAgregar) && idPizzaAgregar > 0) {
                    // miCarritoUnico.comprarPizzasPorId(idPizzaAgregar);
                // } else {
                    // alert('Por favor, ingrese un ID numérico válido y positivo para la pizza.');
                // }
                // break;
            // case 3: // Borrar Pizza por ID
                // let idPizzaBorrar = Number(prompt(`Ingrese el ID de la pizza que quiere borrar:`));
                // if (!isNaN(idPizzaBorrar) && idPizzaBorrar > 0) {
                    // miCarritoUnico.borrarPorId(idPizzaBorrar);
                // } else {
                    // alert('Por favor, ingrese un ID numérico válido y positivo para borrar la pizza.');
                // }
                // break;
            // case 4: // Volver
                // banderaSeccionPizzas = false;
                // break;
            // default:
                // alert('Opción no válida en la sección de Pizzas.');
                // break;
        // }
    // } else {
        // alert('Entrada inválida en la sección de Pizzas.');
        // banderaSeccionPizzas = false;
    // }
// }
// }
// let miCarritoUnico;

// // --- Función Principal del Programa (Controla el flujo después de la autenticación) ---
// function principalApp() {
    // let userLogin = prompt('Cual es el user');
    // let userPassword = prompt('Cual es tu contrasena');
    // let credencial = checkUser(userLogin, userPassword);

    // if (credencial) {
        // miCarritoUnico = new Carrito();

        // while (banderaProgramaPrincipal) {
            // let opcionMenuPrincipal = menuPrincipalPrograma();

            // if (!isNaN(opcionMenuPrincipal) && opcionMenuPrincipal !== null) {
                // switch (opcionMenuPrincipal) {
                    // case 1: // Sección de Pizzas
                        // principalPizzas()
                        // break;
                    // case 2: // Sección de Hamburguesas
                        // principalHamburguesa();
                        // break;
                    // case 3: // Ver Carrito Unificado desde el menú principal
                        // miCarritoUnico.verCarrito();
                        // break;
                    // case 4: // Salir del Programa
                        // banderaProgramaPrincipal = false;
                        // alert('Gracias por usar BurguerHouse. ¡Hasta luego!');
                        // break;
                    // default:
                        // alert('Opción no válida. Por favor, elija 1, 2, 3 o 4.');
                        // break;
                // }
            // } else if (opcionMenuPrincipal === null) {
                // banderaProgramaPrincipal = false;
                // alert('¡Hasta luego!');
            // } else {
                // alert('Entrada inválida. Por favor, ingrese un número.');
            // }
        // }
    // } else {
        // alert('Credenciales incorrectas. No se pudo iniciar sesión.');
    // }
// }

// // --- Iniciar el Programa ---
// principalApp();
// 
/*
1. **Gestor de Productos**
    - Crea una clase Producto con nombre y stock.
    - Crea una clase Inventario para manejar un array de productos.
    - Métodos: agregarProducto, eliminarProducto, mostrarProductos.
    - Persiste el inventario en localStorage.
	
const productosAlmacen = [
  { nombre: "Lapiz", stock: 5 },
  { nombre: "Libro", stock: 5 },
  { nombre: "Lapicera", stock: 5 },
  { nombre: "Goma", stock: 5 },
];

class Producto {
  constructor(nombre, stock) {
    (this.nombre = nombre), 
    (this.stock = stock);
  }
}

productoEnInventario = () => {
	let Inventario = productosAlmacen.map((producto)=>{
        return new Producto(producto.nombre, producto.stock)
    })
    return Inventario
}
let arrayIventario = productoEnInventario();
console.log(arrayIventario)

verInventario = (arrayProductos) => {
    let mensajeInventario= arrayProductos.reduce(
        (acc, el) => 
        (acc += `\n Nombre: ${el.nombre} - Stock: ${el.stock}`),`Los productos que tenemos son estos:\n `)

        alert(mensajeInventario)

}
/*
agregarProductomalo = (nombreProducto,stockProducto) =>{
    let nuevoProducto= new Producto(nombreProducto,stockProducto)
    const productoExistente = arrayIventario.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (productoExistente) {
        productoExistente.stock += stock; // Solo actualiza el stock si ya existe
        console.log(`Stock de ${nombreProducto} actualizado. Nuevo stock: ${productoExistente.stock}`);
        return productoExistente; // Devuelve el producto actualizado
    } else {
        // ¡Este es el paso crucial! Agrega el nuevo producto al array 'inventario'
        arrayIventario.push(nuevoProducto);
        console.log(`Producto "${nombreProducto}" agregado al inventario.`);
        return nuevoProducto; // Devuelve el producto recién añadido
    
}
}
agregarProducto = (nombreProducto, stockProducto) => {
	let nuevoProducto = new Producto(nombreProducto, Number(stockProducto)); // Convertir stockProducto a número

	// Usa nombreProducto en lugar de nombre
	const productoExistente = arrayIventario.find(
		(p) => p.nombre.toLowerCase() === nombreProducto.toLowerCase()
	);

	if (productoExistente) {
		// Usa stockProducto en lugar de stock y asegúrate de que sea un número
		productoExistente.stock += Number(stockProducto);
		console.log(
			`Stock de ${nombreProducto} actualizado. Nuevo stock: ${productoExistente.stock}`
		);
		return productoExistente;
	} else {
		arrayIventario.push(nuevoProducto);
		console.log(`Producto "${nombreProducto}" agregado al inventario.`);
		return nuevoProducto;
	}
};

eliminarProducto= (productoaAEliminar,stockAEliminar) => {
    let borrarProducto= arrayIventario.find((p)=> p.nombre.toLowerCase()=== productoaAEliminar)
    if(borrarProducto){
        
        if(borrarProducto.stock >= stockAEliminar){
            borrarProducto.stock -= stockAEliminar;
            console.log(`Se eliminaron ${stockAEliminar} unidades de ${productoaAEliminar}. Stock restante: ${borrarProducto.stock}`);
			alert(`Operación exitosa: Se eliminaron ${stockAEliminar} unidades de ${productoaAEliminar}. Stock restante: ${borrarProducto.stock}`);

            if (borrarProducto.stock === 0) {
                let indexABorrar = arrayIventario.indexOf(borrarProducto);
                if (indexABorrar > -1) { // Asegurarse de que el producto se encuentre en el array
                    arrayIventario.splice(indexABorrar, 1); // Eliminar 1 elemento en el índice encontrado
                    console.log(`Producto "${productoaAEliminar}" eliminado completamente del inventario.`);
                    alert(`El producto "${productoaAEliminar}" ha sido eliminado completamente del inventario.`);

                }
             }

        }
    }
}

function iniciarInventario() {
	let opcion;
	do {
		opcion = prompt(
			"--- Menú de Gestión de Inventario ---\n" +
				"1. Agregar producto\n" +
				"2. Eliminar producto\n" +
				"3. Mostrar productos\n" +
				"4. Salir\n\n" +
				"Ingrese el número de su opción:"
		);

		switch (opcion) {
			case "1":
                let nombreProducto=prompt(`Nombre del Producto a agregar : `)
                let stockProducto = prompt(`Inidica la cantidad que desea agregar : `);
				agregarProducto(nombreProducto, stockProducto);
				break;
			case "2":
                let productoaAEliminar=prompt(`Nombre del Producto a ELIMNAR : `)
                let stockAEliminar = prompt(`Inidica la cantidad que desea ELIMINAR: `);
				eliminarProducto(productoaAEliminar, stockAEliminar);
				break;
			case "3":
				verInventario(arrayIventario)
				break;
			case "4":
				alert("Saliendo del sistema de inventario. ¡Hasta luego!");
				break;
			default:
				alert("Opción no válida. Por favor, intente de nuevo.");
				break;
		}
	} while (opcion !== "4");
}

// Iniciar el sistema de inventario cuando la página cargue (o se ejecute el script)
iniciarInventario();*/


/*
2. **Filtro de Libros por Género**
    - Clase Libro con título, autor y género.
    - Clase Biblioteca con método filtrarPorGenero(genero) usando filter.
    - Persistencia en localStorage.
   
    const librosStock = [
        {
          titulo: "Cien años de soledad",
          genero: "Accion",
          autor: "Gabriel García Márquez"
        },
        {
          titulo: "Don Quijote de la Mancha",
          genero: "Drama",
          autor: "Miguel de Cervantes"
        },
        {
          titulo: "La sombra del viento",
          genero: "Drama",
          autor: "Carlos Ruiz Zafón"
        },
        {
          titulo: "Rayuela",
          genero: "Accion",
          autor: "Julio Cortázar"
        },
        {
          titulo: "Veinte poemas de amor y una canción desesperada",
          genero: "Poesía",
          autor: "Pablo Neruda"
        }
      ]

    class Libros {
        constructor (titulo,genero, autor){
            this.titulo=titulo,
            this.genero=genero,
            this.autor=autor
        }
    }
/**
 * Carga los libros desde localStorage. Si no hay, usa el stock inicial.
 * Devuelve un array de instancias de la clase Libros.
 */
/*
const cargarLibrosDesdeLocalStorage = () => {
    const librosGuardados = localStorage.getItem('miBibliotecaLibros');
    if (librosGuardados) {
      // Convertir de string JSON a array de objetos planos
      const parsedLibros = JSON.parse(librosGuardados);
      // Mapear los objetos planos a instancias de la clase Libros
      return parsedLibros.map(book => new Libros(book.titulo, book.genero, book.autor));
    }
    // Si no hay nada en localStorage, usar el stock inicial y convertirlo a instancias
    return librosStock.map(book => new Libros(book.titulo, book.genero, book.autor));
  };
  
  /**
   * Guarda el array de instancias de Libros en localStorage.
   * Convierte el array a JSON antes de guardarlo.
   *//*
  const guardarLibrosEnLocalStorage = (arrayDeLibros) => {
    localStorage.setItem('miBibliotecaLibros', JSON.stringify(arrayDeLibros));
    console.log("Libros guardados en localStorage.");
  };
  
  // --- Inicialización del inventario al inicio de la aplicación ---
  // Esto es lo primero que se ejecuta para cargar los libros
 let  inventarioActual = cargarLibrosDesdeLocalStorage();
  console.log("Inventario cargado/inicializado:", inventarioActual);
  
  


    const inscribirLibro = (titulo, genero, autor) => {
		let nuevoLibro = new Libros(titulo, genero, autor);
		inventarioActual.push(nuevoLibro);
		guardarLibrosEnLocalStorage(inventarioActual)
		alert(`El libro "${titulo}" ha sido agregado al inventario.`);
		console.log(`Nuevo libro inscrito: ${titulo}`);
	}
    /*
    const instanciaDeLibros =(array) => {
        let arrayLibros=array.map((book) => {
        return new Libros(book.titulo,book.genero,book.autor)})

        return arrayLibros
        
    }*/
 
/*
    const verLibros= (array) => {
        let mensajeLibros=array.reduce((acc,el) => 
            (acc += `\n Titulo del Libro: ${el.titulo} - Stock: ${el.genero} - Autor: ${el.autor}\n`),`Los tenemos que tenemos en stock son:\n `)
        alert(mensajeLibros)
    }

    const filtarPorGenero = (array,generoAbuscar) => {
        let librosGeneros=array.filter((libro)=> {
            return libro.genero===generoAbuscar
        })
        return librosGeneros
    }

   function iniciarGestionLibros() {
				let opcion;
				do {
					opcion = prompt(
						"--- Menú de Gestión de Libros ---\n" +
							"1. Inscribir nuevo libro\n" +
							"2. Ver todos los libros\n" +
							"3. Buscar libros por género\n" +
							"4. Salir\n\n" +
							"Ingrese el número de su opción:"
					);

					switch (opcion) {
						case "1":
							let titulo = prompt(`Ingrese el título del libro:`);
							let genero = prompt(`Ingrese el género del libro:`);
							let autor = prompt(`Ingrese el autor del libro:`);
							inscribirLibro(titulo, genero, autor);
							break;
						case "2":
							verLibros(inventarioActual); // Mostramos el inventario actual de instancias
							break;
						case "3":
							let generoAbuscar = prompt(`Ingrese el género que desea buscar:`);
							const librosEncontradosPorGenero = filtrarPorGenero(stockDeLibro,generoAbuscar);
							if (librosEncontradosPorGenero.length > 0) {
								verLibros(librosEncontradosPorGenero);
							} else {
								alert(`No se encontraron libros del género "${generoAbuscar}".`);
							}
							break;
						case "4":
							alert("Saliendo del sistema de gestión de libros. ¡Hasta luego!");
							break;
						default:
							alert("Opción no válida. Por favor, intente de nuevo.");
							break;
					}
				} while (opcion !== "4");
			}

			// Iniciar el sistema de gestión de libros
			iniciarGestionLibros();*/

/*
            5. **Validación de Usuarios Activos**
    - Clase Usuario con nombre y estado (activo/inactivo).
    - Clase GestorUsuarios con método hayInactivos() usando some.
    - Persistencia en localStorage.*/

    const personas = [
        { nombre: "Ana ", estado: "activo" },
        { nombre: "Luis", estado: "inactivo" },
        { nombre: "Sofía", estado: "activo" },
        { nombre: "Carlos", estado: "inactivo" },
        { nombre: "María", estado: "activo" },
        { nombre: "Pedro", estado: "inactivo" },
        { nombre: "Laura", estado: "activo" },
        { nombre: "Javier", estado: "inactivo" },
        { nombre: "Elena", estado: "activo" },
        { nombre: "Miguel", estado: "inactivo" },
		];


    class Usuario {
        constructor(nombre, estado){
            this.nombre= nombre,
            this.estado=estado
        }
        instanciaUsuarios= (array) => {
            let arrayUsuarios= array.map(usuario => new Usuario (usuario.nombre, usuario.estado))
            return arrayUsuarios
        }
        
    }
    verUsuarios = (array) => {
	 if (array.length === 0) {
	 	alert("No hay usuarios para mostrar.");
	 	return;
	 }
	 let mensaje = array.reduce((acc, el) => (acc += `\n Nombre : ${el.nombre} - Estado : ${el.estado}`),`Los usuarios cargados son : \n`)

	 alert(mensaje);
	};
   
    localStorage.setItem('ListaUsuario', JSON.stringify(personas))
    
    class GestorUsuarios {
    	constructor(usuarios) {
    		this.listaUsuarios = usuarios;
    	}    
    	hayInactivos = (estadoIngresado) => {
    		return this.listaUsuarios.some(
    			(usuario) => usuario.estado === estadoIngresado
    		);
    	};
    	agregarUsuario = (nombre, estado) => {
    		const nuevoUsuario = new Usuario(nombre, estado);
    		this.listaUsuarios.push(nuevoUsuario);
    		console.log(`Usuario ${nombre} agregado.`);
    	};
    	// Ejemplo: buscar un usuario por nombre
    	buscarUsuarioPorNombre = (nombreBuscado) => {
    		return this.listaUsuarios.find(
    			(usuario) => usuario.nombre.toLowerCase().trim() === nombreBuscado.toLowerCase().trim()
    		);
    	};
    	filtrarUsuariosPorEstado(estadoAFiltrar) {
    		return this.listaUsuarios.filter(
    			(usuario) =>
    				usuario.estado.toLowerCase() === estadoAFiltrar.toLowerCase()
    		);
    	}
        cambiarEstadoUsuario(nombreUsuario, nuevoEstado) {
            // Validar que el nuevo estado sea 'activo' o 'inactivo'
            if (nuevoEstado.toLowerCase().trim() !== 'activo' && nuevoEstado.toLowerCase().trim() !== 'inactivo') {
                alert("Nuevo estado no válido. Por favor, ingrese 'activo' o 'inactivo'.");
                return false;
            }
            const usuario = this.buscarUsuarioPorNombre(nombreUsuario);
            
            if (usuario) {
                usuario.estado = nuevoEstado.toLowerCase();
                /*this.guardarUsuariosEnLocalStorage(); // Guardar cambios*/
                alert(`El estado de "${nombreUsuario}" ha cambiado a "${nuevoEstado}".`);
                console.log(`Estado de ${nombreUsuario} cambiado a ${nuevoEstado}`);
                return true;
            }else{
                alert(`Usuario "${nombreUsuario}" no encontrado.`);
                return false;
            }
        }
    
}
const gestorDeUsuarios = new GestorUsuarios(personas);

function iniciarAplicacionUsuarios() {
    
	let opcion;
	do {
		opcion = prompt(
			"--- Menú de Gestión de Usuarios ---\n" +
				"1. Ver todos los usuarios\n" +
				"2. Agregar nuevo usuario\n" +
				"3. Filtrar usuarios por estado\n" +
				"4. Cambiar estado de un usuario\n" +
				"5. Verificar si hay usuarios inactivos\n" +
				"6. Salir\n\n" +
				"Ingrese el número de su opción:"
		);
       
		switch (opcion) {
			case "1":
				// Usamos la función independiente para mostrar el array que tiene el gestor
				verUsuarios(personas);
				break;
			case "2":
				let nombre = prompt("Ingrese el nombre del nuevo usuario:");
				let estado = prompt("Ingrese el estado del nuevo usuario (activo/inactivo):").toLowerCase();
				// Validar que el estado sea 'activo' o 'inactivo'
				if (estado !== "activo" && estado !== "inactivo") {
					alert("Estado no válido. Por favor, ingrese 'activo' o 'inactivo'.");
				} else {
					gestorDeUsuarios.agregarUsuario(nombre, estado);
				}
				break;
			case "3":
				let estadoABuscar = prompt("Ingrese el estado por el que desea filtrar (activo/inactivo):").toLowerCase();
				if (estadoABuscar !== "activo" && estadoABuscar !== "inactivo") {
					alert("Estado no válido para filtrar. Por favor, ingrese 'activo' o 'inactivo'.");
				} else {
					const usuariosFiltrados =gestorDeUsuarios.filtrarUsuariosPorEstado(estadoABuscar);
					if (usuariosFiltrados.length > 0) {
						verUsuarios(usuariosFiltrados);
					} else {
						alert(`No se encontraron usuarios con estado "${estadoABuscar}".`);
					}
				}
				break;
			case "4":
				let nombreParaCambiar = prompt("Ingrese el nombre del usuario cuyo estado desea cambiar:");
				let nuevoEstado = prompt(`Ingrese el nuevo estado para "${nombreParaCambiar}" (activo/inactivo):`).toLowerCase();
				if (nuevoEstado !== "activo" && nuevoEstado !== "inactivo") {
					alert("Nuevo estado no válido. Por favor, ingrese 'activo' o 'inactivo'.");
				} else {
					gestorDeUsuarios.cambiarEstadoUsuario(nombreParaCambiar, nuevoEstado);
				}
				break;
			case "6":
				alert("Saliendo del sistema de gestión de usuarios. ¡Hasta luego!");
				break;
			default:
				alert("Opción no válida. Por favor, intente de nuevo.");
				break;
		}
	} while (opcion !== "6");
}

// --- 4. Ejecutar la Aplicación ---
iniciarAplicacionUsuarios();