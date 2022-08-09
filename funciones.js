
// Incorporacion de Arrays

class usuario {
    constructor(nombre, apellido, email, contraseña){
        this.nombre = nombre.toLowerCase() ;
        this.apellido = apellido.toLowerCase() ;
        this.email = email.toLowerCase() ;
        this.contraseña = contraseña.toLowerCase() ;
    }
}

const datos = [] ;
let consulta = confirm("Desea ingresar registrarse?") ;

while(consulta === true){
    let nom = prompt("Ingrese su nombre:").toLowerCase() ;
    let ape = prompt("Ingrese su nombre:").toLowerCase() ;
    let ema = prompt("Ingrese su mail:").toLowerCase() ;
    let pas = prompt("Ingrese su contraseña:").toLowerCase() ;
        datos.push(new usuario(nom, ape, ema, pas)) ;
        consulta = confirm("Desea registrar otro usuario?") ;

}

console.log("Tabla de datos obtenidos:") ;
console.table(datos);



