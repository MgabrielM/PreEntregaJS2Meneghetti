let empresa = {
    nombre: "RAC Burgers",
    hamburguesas: {
        hamburguesa_americana:{
            id: 0,
            nombre: "Hamburguesa Americana",
            descripcion: "Una jugosa hamburguesa de carne de res a la parrilla, con queso cheddar derretido, lechuga crujiente, tomate fresco y cebolla roja, todo envuelto en un panecillo suave y esponjoso.",
            precio: 110700
        },
        hamburuguesa_bbq: {
            id: 1,
            nombre: "Hamburguesa BBQ",
            descripcion: "Saborea la combinación perfecta de una hamburguesa de cerdo .",
            precio: 11200
        },
        hamburguesa_picante_mexicana:{
            id: 2,
            nombre: "Hamburguesa Picante Mexicana",
            descripcion:"Atrévete con una hamburguesa de carne de res sazonada con especias mexicanas, queso pepper jack derretido, guacamole fresco.",
            precio: 12000
        },
        hamburguesa_hawaiana: {
            id: 3,
            nombre: "Hamburguesa Hawiana Tropical",
            descripcion: "Sumérgete en sabores tropicales con una hamburguesa de pollo a la parrilla, piña asada.",
            precio: 12700
        }
    }
}

//Convertir titulos a mayusculas
tituloMayusculas();

function tituloMayusculas(){
    for (let hamburguesa in empresa.hamburguesas){
        empresa.hamburguesas[hamburguesa].nombre = empresa.hamburguesas[hamburguesa].nombre.toUpperCase();
    }
}

//Mostrar los objetos en el HTML
function mostrar_informacion(){
    let empresa_info = document.getElementById("empresa");
    empresa_info.innerHTML = `<h1>${empresa.nombre}</h1>`;

    for (let hamburguesa in empresa.hamburguesas){
        let hamburguesa_info = empresa.hamburguesas[hamburguesa];
        empresa_info.innerHTML += 
        `<div>
        <h2>${empresa.hamburguesas[hamburguesa].id}-${empresa.hamburguesas[hamburguesa].nombre}</h2>
        <p>${empresa.hamburguesas[hamburguesa].descripcion}</p>
        <p>$ ${empresa.hamburguesas[hamburguesa].precio}</p>
        </div>`;
    }
}

//Eliminar ID seleccionado
function eliminar_informacion(){
    let id_eliminar = prompt("Ingrese el ID a eliminar: ");
    for (let hamburguesa in empresa.hamburguesas){
        if(empresa.hamburguesas[hamburguesa].id == id_eliminar){
            delete empresa.hamburguesas[hamburguesa];
            mostrar_informacion();
        }
    }
}

//Crear registro nuevo
function crear_informacion(){
    let id_info = prompt("Indique el ID: ");
    let nombre_info = prompt("Indique el nombre: ").toUpperCase();
    let descripcion_info = prompt("Indique la descripcion: ");
    let precio_info = prompt("Indique el precio: ");
    agregar_registro(id_info, nombre_info, descripcion_info, precio_info);
}

function agregar_registro(id, nombre, descripcion, precio){
    let siguienteIndice = Object.keys(empresa.hamburguesas).length + 1;

    let nuevaHamburguesa = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    }

    empresa.hamburguesas[siguienteIndice] = nuevaHamburguesa;
    mostrar_informacion();
}

//Comprar
function comprar(){
    let total = 0;
    let validacion = 0;

    do {
        let id_producto = prompt("Ingrese el ID del producto a comprar: ");
        let cantidad = prompt("Ingrese la cantidad: "); 
        for (let hamburguesa in empresa.hamburguesas){
            if(empresa.hamburguesas[hamburguesa].id == id_producto){
                let subtotal = empresa.hamburguesas[hamburguesa].precio * cantidad;
                total = total + subtotal;
            }
        }
        validacion = prompt("¿Agregar otro producto? (Seleccione 0 o 1) \n 0 - Seguir agregando otros productos \n 1- Finalizar compra");

    } while(validacion==0);
    alert("Total de la compra: " + total);
}

//Arrays
let usuarios_admin = [
    {id: 0, nombre: "Gabriel", edad: 30, ciudad: "Buenos Aires"},
    {id: 1, nombre: "Carlos", edad: 24, ciudad: "Rio Negro" },
    {id: 2, nombre: "Lucia", edad: 27, ciudad: "Buenos Aires"},
    {id: 3, nombre: "Roberto", edad: 29, ciudad: "Tucuman"}
];


function usuarios(){
    let usuarios_info = document.getElementById("usuarios");
    usuarios_info.innerHTML = "";

    for (let i = 0; i <= usuarios_admin.length; i++){
        usuarios_info.innerHTML += 
        `<div>
        <h2>${usuarios_admin[i].id} - ${usuarios_admin[i].nombre}</h2>
        <p>${usuarios_admin[i].edad} / ${usuarios_admin[i].ciudad}</p>
        </div>`;

        // console.log(usuarios_admin[i].id);
        // console.log(usuarios_admin[i].nombre);
        // console.log(usuarios_admin[i].edad);
        // console.log(usuarios_admin[i].ciudad);
    }
}

function crear_usuarios(){
    let usuarios_admin_id = 0;
    let usuarios_admin_nombre = prompt("Ingresar nombre: ");   
    let usuarios_admin_edad = prompt("Ingresar edad: ");
    let usuarios_admin_ciudad = prompt("Ingresar ciudad de residencia:");
    
    for(i=0; i <= usuarios_admin.length; i++){
        if(!usuarios_admin.find(objeto => objeto.id == i)){
            usuarios_admin_id = parseInt(i);
        }
    }

    let usuarios_admin_adicionar = 
        {id: usuarios_admin_id, nombre: usuarios_admin_nombre, edad: parseInt(usuarios_admin_edad), ciudad: usuarios_admin_ciudad};

    usuarios_admin.push(usuarios_admin_adicionar);
    usuarios();
}