// --- Variables Globales ---
// Ya no necesitamos 'totalCar' ni el 'carrito' global obsoleto.
// `miCarritoUnico` se declarará más abajo, después de la autenticación.
let ingreso = false;
let banderaProgramaPrincipal = true; // Controla el bucle principal del programa
let banderaCatalogoHamburguesas = true; // Controla las opciones dentro del menú de Hamburguesas
let banderaVerCatalogoHamburguesas = true; // Controla el bucle para agregar hamburguesas
let agregarCarrito; // Esta variable parece no usarse en el código final, podrías eliminarla si no la necesitas.

const user = 'tonioara';
let cantidadDeIntentos = 3;

// --- Catálogo de Hamburguesas Inicial ---
// Añadimos IDs a las hamburguesas para que el carrito unificado funcione
const HamburguesasIniciales = [
    { nombre: 'Clasica', panes: 'Brioche', carnes: 1, ingredientes: 'Lechuga, tomate, queso', precio: 180, id: 101 },
    { nombre: 'Doble Queso', panes: 'Artesanal', carnes: 2, ingredientes: 'Doble queso, cebolla caramelizada', precio: 250, id: 102 },
    { nombre: 'Bacon Lover', panes: 'Integral', carnes: 1, ingredientes: 'Bacon, cebolla frita, salsa BBQ', precio: 220, id: 103 },
    { nombre: 'Vegetariana', panes: 'Integral', carnes: 0, ingredientes: 'Medallón de lentejas, aguacate, tomate', precio: 200, id: 104 },
];

// Variable para el ID de nuevas hamburguesas creadas por el usuario
let proximoIdHamburguesa = 205; // Empieza después de los IDs iniciales

// --- Carga el catálogo de hamburguesas al inicio ---
let catalogoHamburguesas = [];
const cargarHamburguesasIniciales = () => {
    for (let i = 0; i < HamburguesasIniciales.length; i++) {
        catalogoHamburguesas.push({
            nombre: HamburguesasIniciales[i].nombre,
            panes: HamburguesasIniciales[i].panes,
            carnes: HamburguesasIniciales[i].carnes,
            ingredientes: HamburguesasIniciales[i].ingredientes,
            precio: HamburguesasIniciales[i].precio,
            id: HamburguesasIniciales[i].id
        });
    }
};
cargarHamburguesasIniciales(); // Llama esto para poblar el catálogo al inicio

// --- Funciones para Hamburguesas ---

function crearHamburguesa() {
    let nombreHam;
    let panHam;
    let carnesHam;
    let ingredientesHam;
    let precioHam;
    let precioValido = false;

    while (!precioValido) {
        nombreHam = prompt('¿Cómo se llama el producto?');
        panHam = prompt('¿Qué tipo de pan lleva la Hamburguesa?');
        carnesHam = prompt('¿Cantidad de carnes de la Hamburguesa?');
        ingredientesHam = prompt('¿Qué otros ingredientes lleva la Hamburguesa?');

        let precioInput = prompt('Precio de la Hamburguesa');
        precioHam = Number(precioInput);

        if (isNaN(precioHam) || precioHam < 0 || precioInput === null || String(precioInput).trim() === '') {
            alert('Los datos ingresados para el precio son incorrectos. Por favor, ingrese un número válido y mayor o igual a 0.');
        } else {
            precioValido = true;
        }
    }

    const hamburAgregar = {
        nombre: nombreHam,
        panes: panHam,
        carnes: carnesHam,
        ingredientes: ingredientesHam,
        precio: precioHam,
        id: proximoIdHamburguesa++, // Asigna un ID único y lo incrementa
    };

    catalogoHamburguesas.push(hamburAgregar);
    alert(`¡La hamburguesa "${nombreHam}" (ID: ${hamburAgregar.id}) ha sido agregada con éxito!`);
}

function verHamburguesas() {
    if (catalogoHamburguesas.length === 0) { // Usar === para comparación estricta
        alert('No hay hamburguesas disponibles en el catálogo.');
        return;
    }

    let mensaje = 'Las hamburguesas disponibles son:\n ';
    for (let i = 0; i < catalogoHamburguesas.length; i++) { // Usa 'let i'
        mensaje += `\nID: ${catalogoHamburguesas[i].id}) ${catalogoHamburguesas[i].nombre} - $${catalogoHamburguesas[i].precio}\n` +
                   `   Pan: ${catalogoHamburguesas[i].panes}\n` +
                   `   Carnes: ${catalogoHamburguesas[i].carnes}\n` +
                   `   Ingredientes: ${catalogoHamburguesas[i].ingredientes}\n`;
    }
    alert(mensaje);
}

// Esta función ya no es necesaria con find/findIndex directos en los objetos.
// function nombresHamburguesas(array) {
//     const productosXNombre = [];
//     for (let i = 0; i < array.length; i++) { // Usa 'let i'
//         productosXNombre.push(array[i].nombre);
//     }
//     return productosXNombre;
// }

// Esta función ahora usa el ID de la hamburguesa para operar con el carrito unificado
function buscarPorNombreHamburguesa(nombreABuscar) {
    const nombreNormalizadoBusqueda = nombreABuscar.toLowerCase().trim();

    const hamburguesaEnCatalogo = catalogoHamburguesas.find(hambur =>
        hambur.nombre.toLowerCase().trim() === nombreNormalizadoBusqueda
    );

    if (!hamburguesaEnCatalogo) {
        alert('Esta hamburguesa no está en nuestro catálogo. Por favor revise el nombre.');
        return null; // Devuelve null si no la encuentra
    }
    return hamburguesaEnCatalogo; // Devuelve el objeto completo si la encuentra
}

// Esta función ahora usa el ID de la hamburguesa para borrar con el carrito unificado
function borrarHamburguesaDelCarrito(nombreHamburguesaABorrar) {
    const hamburguesaEnCatalogo = buscarPorNombreHamburguesa(nombreHamburguesaABorrar);

    if (!hamburguesaEnCatalogo) {
        alert(`La hamburguesa "${nombreHamburguesaABorrar}" no existe en nuestro catálogo (no se puede obtener su ID para borrar).`);
        return;
    }
    // Llama al método genérico de borrado del carrito con el ID
    miCarritoUnico.borrarProducto(hamburguesaEnCatalogo.id);
}

// --- Autenticación ---

function checkUser(userLogin, userPassword) {
    for (let i = 0; i < cantidadDeIntentos; i++) { // Usa 'let i'
        if (userLogin === null || userPassword === null || userLogin.trim() === '' || userPassword.trim() === '') {
            alert('Los datos son vacíos. Por favor, ingrese sus datos de nuevo.');
            userLogin = prompt('Cual es el user');
            userPassword = prompt('Cual es tu contrasena');
        } else if (
            userPassword.length >= 8 &&
            /[0-9]/.test(userPassword) &&
            /[A-Z]/.test(userPassword) &&
            userLogin === user // Verifica el nombre de usuario
        ) {
            alert('La contraseña es correcta. ¡Bienvenido!');
            ingreso = true;
            return ingreso;
        } else {
            alert(
                'Usuario o contraseña incorrectos. La contraseña debe:\n' +
                '- Tener al menos una mayúscula\n' +
                '- Contener mínimo 8 caracteres\n' +
                '- Contener al menos un número\n' +
                'Por favor, intente de nuevo.'
            );
            userLogin = prompt('Cual es el user');
            userPassword = prompt('Cual es tu contrasena');
        }
    }
    alert('Ha excedido el número de intentos. El programa finalizará.');
    return false; // Retorna false si se agotan los intentos
}

// --- Menús de Navegación ---

// Menú principal del programa (después de la autenticación)
function menuPrincipalPrograma() {
    let opcion = Number(
        prompt(
            'Bienvenido a BurguerHouse!!\n\nElija la sección que desea visitar:\n\n' +
            '1. Sección de Pizzas\n' +
            '2. Sección de Hamburguesas\n' +
            '3. Ver Carrito Unificado\n' + // Opción para ver el carrito desde el menú principal
            '4. Salir del Programa'
        )
    );
    return opcion;
}

// Menú específico para la sección de Pizzas
function menuPizzas() {
    let opMenu = Number(
        prompt(
            '--- Sección de Pizzas ---\n\n' +
            '1. Ver Pizzas Disponibles\n' +
            '2. Agregar Pizza al Carrito por ID\n' +
            '3. Borrar Pizza del Carrito por ID\n' +
            '4. Volver al Menú Principal'
        )
    );
    return opMenu;
}

// Menú específico para la sección de Hamburguesas
function menuHamburguesas() {
    let op = Number(
        prompt(
            '--- Sección de Hamburguesas ---\n\n' +
            '1. Ver Catálogo de Hamburguesas\n' +
            '2. Crear Nueva Hamburguesa (admin)\n' + // Agregada opción de crear
            '3. Agregar Hamburguesa al Carrito por Nombre\n' +
            '4. Borrar Hamburguesa del Carrito por Nombre\n' +
            '5. Volver al Menú Principal'
        )
    );
    return op;
}


// --- Catálogo de Pizzas ---
const PizzasBurguerHouse = [
    { nombre: 'Margarita', precio: 240, id: 1 },
    { nombre: 'Peperoni', precio: 260, id: 2 },
    { nombre: 'Cuatro Quesos', precio: 280, id: 3 },
    { nombre: 'PizzaFat', precio: 300, id: 4 },
    { nombre: 'Clasica', precio: 220, id: 5 },
];

class PizzasCatalogo {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = 0; // Cantidad en este contexto no es la cantidad en carrito, es un campo del catálogo.
                           // Podrías usarlo para inventario si quieres, pero no para el carrito.
    }
}

const creadoraDePizzas = () => {
    let arrayPizzas = [];
    for (let i = 0; i < PizzasBurguerHouse.length; i++) { // Usa 'let i'
        let objetoArrayPizzas = new PizzasCatalogo(
            PizzasBurguerHouse[i].nombre,
            PizzasBurguerHouse[i].precio,
            PizzasBurguerHouse[i].id,
        );
        arrayPizzas.push(objetoArrayPizzas);
    }
    return arrayPizzas;
};
const arrayPizzasBurguerHouse = creadoraDePizzas();
console.log("Catálogo de Pizzas:", arrayPizzasBurguerHouse); // Console log para ver el catálogo de pizzas

const verPizzas = () => {
    let mensaje = 'Las pizzas que tenemos disponibles son: ';
    for (let i = 0; i < arrayPizzasBurguerHouse.length; i++) { // Usa 'let i'
        mensaje += `\n\n ${arrayPizzasBurguerHouse[i].id}) ${arrayPizzasBurguerHouse[i].nombre} - $ ${arrayPizzasBurguerHouse[i].precio}`;
    }
    alert(mensaje);
};

// --- Clase Carrito Unificado ---
// Esta es la estrella del show. Unifica el manejo de productos.
class Carrito {
    constructor() {
        this.items = []; // Este array contendrá TODOS los productos (pizzas, hamburguesas)
    }

    agregarProducto = (productoAComprar) => { // Recibe el objeto del producto ya encontrado en el catálogo
        if (!productoAComprar || typeof productoAComprar.id === 'undefined' || !productoAComprar.nombre || !productoAComprar.precio) {
            alert('Error: Producto inválido para agregar al carrito.');
            return;
        }

        const indexEnCarrito = this.items.findIndex(item => item.id === productoAComprar.id);

        if (indexEnCarrito === -1) {
            // Si el producto no está en el carrito, agrégalo con cantidad 1
            let itemDelCarrito = {
                nombre: productoAComprar.nombre,
                precio: productoAComprar.precio,
                id: productoAComprar.id,
                cantidad: 1,
            };
            this.items.push(itemDelCarrito);
            alert(`¡${productoAComprar.nombre} agregado al carrito!`);
        } else {
            // Si ya está en el carrito, incrementa la cantidad
            this.items[indexEnCarrito].cantidad += 1;
            alert(`¡Cantidad de ${productoAComprar.nombre} actualizada en el carrito!`);
        }
    };

    borrarProducto = (idABorrar) => { // Recibe el ID del producto a borrar
        
        const indexEnCarrito = this.items.findIndex(item => {
            console.log("Comparando item en carrito (ID:", item.id, ") con ID a borrar:", idABorrar);
            return item.id === idABorrar;
        });

        console.log("Resultado de findIndex (indexEnCarrito):", indexEnCarrito);

        if (indexEnCarrito === -1) {
            console.log("Producto NO encontrado en el carrito. ID:", idABorrar);
            alert(`El producto con ID "${idABorrar}" no se encontró en tu carrito.`);
            console.log("--- FIN borrarProducto (Producto no encontrado) ---");
            return;
        }

        const itemEnCarrito = this.items[indexEnCarrito];
        console.log("Producto encontrado en el carrito (objeto):", itemEnCarrito);

        if (itemEnCarrito.cantidad > 1) {
            console.log("Cantidad actual del producto > 1. Decrementando...");
            itemEnCarrito.cantidad -= 1;
            alert(`Se ha reducido la cantidad de "${itemEnCarrito.nombre}" a ${itemEnCarrito.cantidad}.`);
            console.log("Nuevo estado del producto en carrito (después de decrementar):", itemEnCarrito);
        } else {
            console.log("Cantidad actual del producto es 1. Eliminando completamente...");
            this.items.splice(indexEnCarrito, 1);
            alert(`"${itemEnCarrito.nombre}" ha sido eliminado de tu carrito.`);
            console.log("Estado de this.items después de splice:", JSON.stringify(this.items));
        }

        this.verCarrito();
        console.log("--- FIN borrarProducto ---");
    };

    verCarrito = () => {
        let mensaje = 'Estos son los productos en tu carrito:\n';
        let totalCalculado = 0;

        if (this.items.length === 0) {
            alert('Tu carrito está vacío.');
            return;
        }

        for (let i = 0; i < this.items.length; i++) { // Usa 'let i'
            totalCalculado += Number(this.items[i].precio) * this.items[i].cantidad;
            mensaje += `\n * ${this.items[i].nombre} - $ ${this.items[i].precio} - Cantidad: ${this.items[i].cantidad}`;
        }

        mensaje += `\n\nEl total de tu compra es de $ ${totalCalculado}`;
        alert(mensaje);
    };
}

// --- Lógica Principal del Programa ---

let miCarritoUnico; // Declara la instancia del carrito, se inicializará después de la autenticación

// --- Función Principal del Programa (Controla el flujo después de la autenticación) ---
function principalApp() { // Renombrada para ser más general
    let userLogin = prompt('Cual es el user');
    let userPassword = prompt('Cual es tu contrasena');
    let credencial = checkUser(userLogin, userPassword);
    // alert("Credencial final: " + credencial); // Para debug

    if (credencial) {
        miCarritoUnico = new Carrito(); // ¡¡INSTANCIA ÚNICA DEL CARRITO AQUÍ!!

        while (banderaProgramaPrincipal) {
            let opcionMenuPrincipal = menuPrincipalPrograma(); // Llama al menú principal del programa

            if (!isNaN(opcionMenuPrincipal) && opcionMenuPrincipal !== null) {
                switch (opcionMenuPrincipal) {
                    case 1: // Sección de Pizzas
                        let banderaSeccionPizzas = true;
                        while(banderaSeccionPizzas) {
                            let opcionPizza = menuPizzas();
                            if (!isNaN(opcionPizza) && opcionPizza !== null) {
                                switch (opcionPizza) {
                                    case 1: // Ver Pizzas
                                        verPizzas();
                                        break;
                                    case 2: // Agregar Pizza
                                        let idPizzaAgregar = Number(prompt(`Ingrese el ID de la pizza que quiere agregar:`));
                                        if (!isNaN(idPizzaAgregar) && idPizzaAgregar > 0) {
                                            const pizzaEnCatalogo = arrayPizzasBurguerHouse.find(pizza => pizza.id === idPizzaAgregar);
                                            if (pizzaEnCatalogo) {
                                                miCarritoUnico.agregarProducto(pizzaEnCatalogo);
                                            } else {
                                                alert('ID de pizza no encontrado en el catálogo. Por favor, revise los IDs.');
                                            }
                                        } else {
                                            alert('Por favor, ingrese un ID numérico válido y positivo para la pizza.');
                                        }
                                        break;
                                    case 3: // Borrar Pizza
                                        let idPizzaBorrar = Number(prompt(`Ingrese el ID de la pizza que quiere borrar:`));
                                        if (!isNaN(idPizzaBorrar) && idPizzaBorrar > 0) {
                                            miCarritoUnico.borrarProducto(idPizzaBorrar);
                                        } else {
                                            alert('Por favor, ingrese un ID numérico válido y positivo para borrar la pizza.');
                                        }
                                        break;
                                    case 4: // Volver
                                        banderaSeccionPizzas = false;
                                        break;
                                    default:
                                        alert('Opción no válida en la sección de Pizzas.');
                                        break;
                                }
                            } else {
                                alert('Entrada inválida en la sección de Pizzas.');
                                banderaSeccionPizzas = false; // Sale si el usuario cancela o da entrada inválida
                            }
                        }
                        break;
                    case 2: // Sección de Hamburguesas
                        let banderaSeccionHamburguesas = true;
                        while(banderaSeccionHamburguesas) {
                            let opcionHamburguesa = menuHamburguesas();
                            if (!isNaN(opcionHamburguesa) && opcionHamburguesa !== null) {
                                switch (opcionHamburguesa) {
                                    case 1: // Ver Catálogo
                                        verHamburguesas();
                                        break;
                                    case 2: // Crear Hamburguesa
                                        crearHamburguesa();
                                        break;
                                    case 3: // Agregar Hamburguesa
                                        let nombreHamburAgregar = prompt('Ingrese el nombre de la hamburguesa que quiere agregar al carrito:');
                                        if (nombreHamburAgregar && nombreHamburAgregar.trim() !== '') {
                                            const hamburParaAgregar = buscarPorNombreHamburguesa(nombreHamburAgregar);
                                            if (hamburParaAgregar) {
                                                miCarritoUnico.agregarProducto(hamburParaAgregar);
                                            } else {
                                                alert(`La hamburguesa "${nombreHamburAgregar}" no se encontró en el catálogo.`);
                                            }
                                        } else {
                                            alert('Por favor, ingrese un nombre válido para la hamburguesa.');
                                        }
                                        break;
                                    case 4: // Borrar Hamburguesa
                                        let nombreHamburBorrar = prompt('Ingrese el nombre de la hamburguesa que quiere borrar del carrito:');
                                        if (nombreHamburBorrar && nombreHamburBorrar.trim() !== '') {
                                            borrarHamburguesaDelCarrito(nombreHamburBorrar);
                                        } else {
                                            alert('Por favor, ingrese un nombre válido para la hamburguesa a borrar.');
                                        }
                                        break;
                                    case 5: // Volver
                                        banderaSeccionHamburguesas = false;
                                        break;
                                    default:
                                        alert('Opción no válida en la sección de Hamburguesas.');
                                        break;
                                }
                            } else {
                                alert('Entrada inválida en la sección de Hamburguesas.');
                                banderaSeccionHamburguesas = false; // Sale si el usuario cancela o da entrada inválida
                            }
                        }
                        break;
                    case 3: // Ver Carrito Unificado desde el menú principal
                        miCarritoUnico.verCarrito();
                        break;
                    case 4: // Salir del Programa
                        banderaProgramaPrincipal = false;
                        alert('Gracias por usar BurguerHouse. ¡Hasta luego!');
                        break;
                    default:
                        alert('Opción no válida. Por favor, elija 1, 2, 3 o 4.');
                        break;
                }
            } else if (opcionMenuPrincipal === null) { // Usuario canceló el prompt
                banderaProgramaPrincipal = false;
                alert('¡Hasta luego!');
            } else {
                alert('Entrada inválida. Por favor, ingrese un número.');
            }
        }
    } else {
        alert('Credenciales incorrectas. No se pudo iniciar sesión.');
    }
}

// --- Iniciar el Programa ---
principalApp();