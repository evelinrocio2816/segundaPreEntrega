//FECHAS..

//primero que nada ponemos fecha de compra !!
const Hoy= new Date()

console.log(Hoy.toDateString())
alert("Fecha de compra es:"+ " " + Hoy.toDateString())



//PEDIMOS O SOLICITAMOS LA EDAD A EL CLIENTE ANTES DE COMPRAR!!

let usuario=prompt("Ingrese su nombre");
let edad=18; 
let edadUsuario= parseInt(prompt(" Ingrese su edad"));
if( edadUsuario >= 18){
    alert("Bienvenido/a:".toUpperCase() +" " + usuario +"\nPuede realizar su Compra".toUpperCase());
    

}else{
    alert("Usted es menor de edad,  no puede realizar esta compra");

}
//aca  interactuo con el cliente pidiendole mediante prompt , que bebidas necesita..
//utilizo una class Bebidas con sus respectivos atributos, luego un bucle donde el usuario decide 
//cuantos productos comprar.
class Bebidas{
    constructor(nombre,marca, stock, Litros){
        this.nombre= nombre,
        this.marca= marca,
        this.stock=stock,
        this.Litros=Litros;
}
}

const ListaDeProductosComprados=[
    {nombre: 'champagne', marca: 'Federico de alvear', precio:400},
    {nombre: 'champagne', marca: 'mom', precio:250},
    {nombre: 'champagne', marca: 'Varon B', precio: 4000},
    {nombre:'fernet', marca: 'branca', precio:2000},
    {nombre:'fernet', marca: 'vittone', precio:1000},
    {nombre:'fernet', marca: 1882, precio: 1500},
    {nombre:'jugo', marca:'Baggio', precio:200}, 
    {nombre: 'jugo', marca: 'citric', precio:200}, 
    {nombre:'Gaseosa', marca:'coca cola', precio:700}, 
    {nombre:'gaseosa', marca:'pepsi', precio:650}, 
    {nombre:'gaseosa', marca:'manaos' ,precio:200},
    {nombre: 'gaseosa',marca:'fanta', precio:600},  

];
let compra=prompt ("Presione si para realizar compra" +"\n" + "o x para Salir");
while(compra != "x"){
    const nombre=prompt("¿Que bebida desea Comprar?");
    const marca= prompt("Ingrese marca Requerida..");
    const stock= parseInt(prompt("Ingrese cantidad que desea..."));
    const Litros= prompt("Ingrese la medida o Litros de su producto a comprar");

    const bebidas=new Bebidas( nombre, marca, stock, Litros);
    ListaDeProductosComprados.push(nombre, marca, stock, Litros);
    compra=prompt("¿Desea Comprar algo mas?"+ "\n" + "Sino presione x para salir")
    }
    console.log(ListaDeProductosComprados)
   //tambien utilizo un método push() donde sepuede agregar productos que no estan en la lista

    //Metodo sort()
    //pongo los precios de los productos de menor a mayor.

    precio= ListaDeProductosComprados.sort((a,b)=> a.precio-b.precio);
    console.log(precio)








    //Metodo filter()
    //con este metodo filtro los fernet de menor precio .. creo >.<
    const resultado= ListaDeProductosComprados.filter((el)=>el.nombre ==='fernet');
    const resultado2= ListaDeProductosComprados.filter((el)=>el.precio<1000);
console.log(resultado)
console.log(resultado2)

//CONCTENAR LISTA DE PRODUCTOS COMPRADOS, METODO CONCAT
const jugos=['baggio', 'citric']
const bebidasBlancas=['gin', 'smirnoff', 'whisky','tekila']
const espumantes=['champagne','fresita','sidra','aperol']
const energizantes=['speed','monster','red bull','power ade', 'gatorade']
const gaseosas=['coca cola','manaos', 'sprite', '7Up','pepssi','pasode los toros','tonica','mirinda', 'fanta']
const otros=['cerveza', 'vino', 'fernet', 'campari','dr Lemon','frizze','gancia']

const comprados= jugos.concat(gaseosas)
console.log(comprados)


//METODO MAP..
//En este metodo map() recorro el nombre de todos los arrays
//y este me devuelve un objeto que es el nombre de la lista.
//tambien me retorna el precio y a los que son mayores de 1500 ¿Suma? un Iva de un 1.5,


const res = ListaDeProductosComprados.map((el)=>{
    if(el.precio >1500){
        return{
            name: el.nombre,
            price: el.precio * 1.5,
        }
        
    }else{
        return{
            name: el.nombre,
            price: 0,
        }
    }
})
//console.log(res)

alert("Gracias Por su compra".toUpperCase())


//Espero que este bien !!