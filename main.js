let totalCar=0;
let carrito=[];
let catalogoHamburguesas=[];
let ingreso=false
let bandera=true;
let banderahambur=true;

let agregarCarrito;

const user = 'tonioara'
let cantidadDeIntentos = 3;

function crearHamburguesa(nombreHam,/*panHam,carnesHam,ingredientesHam,*/ precioHam) {
	const hamburAgregar = {
		nombre: nombreHam,
       /* panes: panHam,
        carnes: carnesHam,
        ingredientes: ingredientesHam,*/
        precio: precioHam,
	}

	catalogoHamburguesas.push(hamburAgregar)
}
function verHamburguesas() {
	if (catalogoHamburguesas.length == 0) {
		alert('No hay productos')
		return
	}

	let mensaje = 'Los productos son:\n '
     let a=1;
	for (let i = 0; i < catalogoHamburguesas.length; i++) {
       
		mensaje += `\n${a++}) ${catalogoHamburguesas[i].nombre}- $ ${catalogoHamburguesas[i].precio}`
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
    console.log(index);
    if(index=== -1){
        alert('Esta hamburguesa no esta en nuestro catalogo\n Por favor revise nuestro catalogo \n');
    }else{
        carrito.push(catalogoHamburguesas[index]);
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
function menu(){
    let opMenu= Number(prompt("Bienvenido a BurguerHouse!! \n\n Elija la opcion que desea \n\n 1- Agregar hambuergas al catalogo \n 2- Ver Carrito \n 3-  Agregar Hamburguesas al carrito  \n 4 ver Catalogo de Hamburguesas-\n 5-Salir "));
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
                /*let panHam = prompt('Que tipo de pan lleva la Hamburguesas');
                let carnesHam = prompt('cantidad de carnes de la Hamburguesas')
                let ingredientesHam= prompt("Que otros ingredientes lleva la Hamburguesas")*/
                let precioHam = prompt('Precio de la Hamburguesa')
                crearHamburguesa(nombreHam, precioHam)
                break;
            case 2:
                verCarrito();
            case 3:
               
                let productoABuscar=prompt('Que Hamburguesa desea agregar a su carrito');
                 buscarPorNombre(productoABuscar);  
            break;
            case 4: 
             verHamburguesas();
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














