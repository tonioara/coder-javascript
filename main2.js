let car=0;
let carrito=[];
let ingreso=false
let bandera=true;
let banderahambur=true;

let agregarCarrito;

const user = 'tonioara'
let cantidadDeIntentos = 3;


function checkUser(userLogin,userPassword){
    for(i=0; i<cantidadDeIntentos; i++){
    let contrasenaIngresada="";

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
    let opMenu= Number(prompt("Bienvenido a BurguerHouse!! \n\n Elija la opcion que desea \n\n 1- Ver Catalago de hamburguesas \n 2- Ver Carrito \n 5-Salir "));
    alert(opMenu);
    return opMenu;
    
}
function catalogoBurguers(){
    let numBur= Number(prompt('Este es nuestro menu de hamburguesas: \n 1- [Hamburguesa simple]\n 2-[Hamburguesa Doble]\n 3-[Hamburguesa triple]\n 4- [Ver Carrito]\n 5- [Salir]\n'))
    return numBur;
}
function agregrarHambuguersa(numBur){
    if (numBur===1){
        let hamb1=250;
        alert('HAMBURGUESA SIMPLE, PAN, CARNE, LECHUGA, TOMATE Y HUEVO\n\n Precio= $250');
        agregarCarrito= confirm('Desea agregar esta hamburguesa al carrito?')
            if(agregarCarrito==true){
             alert("Agrego una Hamburguesa simple a su carrito")
            car = car + hamb1
            carrito.push('Hamburguesa simple\nPrecio:$250\n')
            alert(`El total de su compra es ${car}`)
            }
    }else if(numBur===2){
        let hamb2=300
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
}


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
                while(banderahambur){
                    let numBur=catalogoBurguers()
                    alert(numBur);
                        switch (numBur) {
                             case 1:
                                agregrarHambuguersa(numBur);
                                break;
                             case 2:
                                agregrarHambuguersa(numBur);
                               break; 
                             case 3:
                                agregrarHambuguersa(numBur);
                                break; 
                             case 4:          
                              alert(carrito+`\n\n El total de su compra es de $ ${car}\n\n`)
                                   break;  
                             case 5:
                                banderahambur=false;
                                break;
                         default:
                             alert("Esa opcion no la tenemos")
                          break;
                        }
                   // }
                }
                break;
            case 2:
                alert(car);
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













