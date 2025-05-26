let totalCar=0;
let carrito=[];
let catalogoHamburguesas=[];
let ingreso=false
let bandera=true;
let banderahambur=true;
let banderaCatalogoBurguer=true
let agregarCarrito;

const user = 'tonioara'
let cantidadDeIntentos = 3;

function crearHamburguesa(nombreHam,panHam,carnesHam,ingredientesHam, precioHam) {
    
    if (isNaN(precioHam) || precioHam < 0 || precioHam === null || String(precioHam).trim() === ''){
	
	alert('Los datos ingresados son incorrectos, Porfavor ingrese los datos correctos ');
    let nombreHam = prompt('Como se llama el producto');
    let panHam = prompt('Que tipo de pan lleva la Hamburguesas');
    let carnesHam = prompt('cantidad de carnes de la Hamburguesas')
    let ingredientesHam= prompt("Que otros ingredientes lleva la Hamburguesas")
    let precioHam = Number(prompt('Precio de la Hamburguesa'))
    crearHamburguesa(nombreHam,panHam,carnesHam,ingredientesHam, precioHam)
	}
   else{

    const hamburAgregar = {
	    nombre: nombreHam,
        panes: panHam,
        carnes: carnesHam,
        ingredientes: ingredientesHam,
        precio: precioHam,    
    
     }

    catalogoHamburguesas.push(hamburAgregar)
    alert(`¡La hamburguesa "${nombreHam}" ha sido agregada con éxito!`);
   } 
}
function verHamburguesas() {
	if (catalogoHamburguesas.length == 0) {
		alert('No hay productos')
		return
	}

	let mensaje = 'Los productos son:\n '
     let a=1;
	for (let i = 0; i < catalogoHamburguesas.length; i++) {
       
		mensaje += `\n${a++}) ${catalogoHamburguesas[i].nombre} = \n *${catalogoHamburguesas[i].panes}* \n *${catalogoHamburguesas[i].carnes}* \n *${catalogoHamburguesas[i].ingredientes}  \n\n *$ ${catalogoHamburguesas[i].precio}`
	}

	alert(mensaje)
}
function nombresHamburguesas(){
     const productosXNombre=[]
    for(i=0; i<catalogoHamburguesas.length; i++){
        productosXNombre.push(catalogoHamburguesas[i].nombre)
    }
    return productosXNombre;

}
function buscarPorNombre(productoABuscar){
    const nombreProducto=nombresHamburguesas();

    let index= nombreProducto.indexOf(productoABuscar);

    if(index=== -1){
        alert('Esta hamburguesa no esta en nuestro catalogo\n Por favor revise nuestro catalogo \n');
    }else{
        carrito.push(catalogoHamburguesas[index]);
    }
}
function borrarHamburguesa(producotABorrar){
    const aBorrar= nombresHamburguesas();
    
    let index= aBorrar.indexOf(producotABorrar);
    if(index===-1){
        alert('Esta hamburguesa no esta en nuestro catalogo\n Por favor revise nuestro catalogo');
    }
    else{
        carrito.splice(index,1)
    }
}

const verCarrito = ()=>{
    let mensaje= 'Usted tiene en el carrito estos productos: '
    let totalCar=0;

    for(i=0; i<carrito.length;i++){
        totalCar+= Number(carrito[i].precio);
    }
    for(i=0; i<carrito.length;i++){
        mensaje += `\n\n* ${carrito[i].nombre} $ ${carrito[i].precio}`
    }
    mensaje+=`\n El total es $ ${totalCar}`;
    alert(mensaje);
}
function checkUser(userLogin,userPassword){
    for(i=0; i<cantidadDeIntentos; i++){
    

    if(userLogin=== null || userPassword === null){
        alert("Los datos son vacios \n Porfavor ingrese sus datos de nuevo")
    }
    else if (userPassword.length >= 8 && /[0-9]/.test(userPassword)&&  /[A-Z]/.test(userPassword)) {
              alert('La contrasena es correcta');
              ingreso=true;
              return ingreso
            }
          else {
                alert("Por favor, ingrese sus datos de nuevo. La contrasena debe:\n- Una mayusucula\n - Contener minimo 8 caracteres\n - Contener al menos un numero");
                userLogin = prompt('Cual es el user');
                userPassword= prompt('Cual es tu contrasena');
                 }
    }
    return ingreso
}
function menuProductos(){
    let op=Number(prompt('Bienvenido a nuestros Catalogo de productos !!\n\n Que opcion desea revisar: \n\n 1- Ver catalogo Hamburguesas \n 2- Borrar Producto del carrito \n 3- Ver Carrito \n 4- Ver otros productos \n 5- Salir "'))
    return op;
}
function VerCatalogoHamburguesas(){
    while(banderaCatalogoBurguer){
        verHamburguesas();
        let agregarHamburguesas= confirm('\n Desea Agregar una Hamburguesa a su carrito? \n')
        alert(`VALOR DE CONFIRM ${agregarHamburguesas} `)
        if(agregarHamburguesas===true){
             
             let productoABuscar=prompt('Que Hamburguesa desea agregar a su carrito');
             buscarPorNombre(productoABuscar);
             console.log(productoABuscar)
        }
        else{
            
            alert('Gracias por su compra');
            banderaCatalogoBurguer=false;
        }
       
    }
    
}
function menu(){
    let opMenu= Number(prompt("Bienvenido a BurguerHouse!! \n\n Elija la opcion que desea \n\n 1- Agregar hamburguesas al catalogo \n 2- Agregar Pizzas al catalogo de pizzas \n 3- Agregar otros productos a nuestro Catalogo \n 4- Ver nuestros productos\n 5- Salir "));
    alert(opMenu);
    return opMenu;
    
}/*
function catalogoBurguers(){
    let mensaje= 'Las hamburguesas en nuestro catalogo son :'
    for (let i = 0; i < catalogoHamburguesas.length; i++) {
        let numero= 0;
	mensaje += `\n${numero+1}) ${catalogoHamburguesas[i].nombre}-\n $ ${catalogoHamburguesas[i].precio}`
  }
    let numBur= Number(prompt('Elija el numero correspodiente a la hamburguesa que desea agregar'))
    return numBur;
}*/
/*
function agregrarHambuguersa(numBur){

     if(numBur)
    if (numBur===1){
        alert('HAMBURGUESA SIMPLE, PAN, CARNE, LECHUGA, TOMATE Y HUEVO\n\n Precio= $250');
        agregarCarrito= confirm('Desea agregar esta hamburguesa al carrito?')
            if(agregarCarrito==true){
             alert("Agrego una Hamburguesa simple a su carrito")
            car = car + hamb1
            carrito.push('Hamburguesa simple\nPrecio:$250\n')
            alert(`El total de su compra es ${car}`)
            }
    }else if(numBur===2){
        alert('HAMBURGUESA DOBLE, PAN, CARNE X2, PANCETA, SALSA DE LA CASA');
        agregarCarrito=confirm('Desea agregar esta hamburguesa al carrito?')
        if(agregarCarrito==true){
            alert("Agrego una Hamburguesa doble a su carrito")
            car += hamb2
            carrito.push('Hamburguesa Doble\nPrecio:$300\n')
            alert(`El total de su compra es ${car}`)
      }  
    }else if(numBur===3){
        let hamb3=350
        alert('HAMBURGUESA TRIPLE, PAN, CARNE X3, PANCETA, SALSA DE LA CASA');
        agregarCarrito= confirm('Desea agregar esta hamburguesa al carrito?')
        if(agregarCarrito==true){
           alert("Agrego una Hamburguesa triple a su carrito")
           car += hamb3
           carrito.push('Hamburguesa triple\nPrecio:$350\n')
           alert(`El total de su compra es ${car}`)
         }
      }    
}*/


let userLogin = prompt('Cual es el user');
let userPassword= prompt('Cual es tu contrasena');
let credencial=checkUser(userLogin,userPassword);
alert(credencial)

if(credencial){

  while(bandera){
    
    let opcionMenu=menu();

    if(!isNaN(opcionMenu)){
        
        switch (opcionMenu) {
            case 1:
                let nombreHam = prompt('Como se llama el producto');
                let panHam = prompt('Que tipo de pan lleva la Hamburguesas');
                let carnesHam = prompt('cantidad de carnes de la Hamburguesas')
                let ingredientesHam= prompt("Que otros ingredientes lleva la Hamburguesas")
                let precioHam = prompt('Precio de la Hamburguesa')
                crearHamburguesa(nombreHam,panHam,carnesHam,ingredientesHam, precioHam)
                break;
            case 2:
                let nombrePizza=prompt('Como se llama la pizza que deseas Agregar');
                let precioPizza=Number(prompt('Cual es el precio de la pizza '))
                crearPizzas(nombrePizza,precioPizza);
            case 3:
                agregarOtrosProductos();
            break;
            case 4: 
               ;
               let banderaCatalogo=true;
               while(banderaCatalogo){
                let opcion= menuProductos()
                switch(opcion){
                     case 1:
                        VerCatalogoHamburguesas(); 
                      break;
                     case 2:
                        let EliminarProducto=confirm('Quieres elimnar una hamburguesa de su carrito')
                        if (EliminarProducto){
                            let productoABuscar=prompt('Ingrese el nombre del Producto que desea borrar')
                            borrarHamburguesa(productoABuscar);
                        }
                         
                      break;
                     case 3:
                        verCarrito();
                      break;
                      case 4:
                        verOtrosProductos();
                      case 5:
                        banderaCatalogo=false;
                      default:
                     alert("Esa opcion no la tenemos")
                      break;
                }
               }
                break;    
            case 5:
                bandera=false;
             break;
            default:
                 alert("Esa opcion no la tenemos")
                break;
        }
    }
}

}














