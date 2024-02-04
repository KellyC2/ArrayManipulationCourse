/*Usos comunes y clásicos de map() sobre los arrays: 
    1. Limpiar Datos: seleccionar datos dentros de un array y devolverlos para su utlización en futuras acciones.
    2. Añadir un nuevo elemento, modificar agregando un atributo al objeto pero sin modificar el array original.
Tener en cuenta que cuando trabajamos con objetos y map() y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original. Esto provoca que como estamos modificando la referencia en meoria, el array original también sea modificado (ver ejemplo de 'rpta2'). 

Para evitar modifcar y realmente el metodo sea inmutable  utilizamos el spread operator de ESC6, el cual permite generar un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa(ver 'rpta3')
*/
const orders=[
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
    {
        customerName:'Zulema',
        total:120,
        delivered:false,
    },
    {
        customerName:'Santiago',
        total:180,
        delivered:true
    },
    {
        customerName:'Velentina',
        total:240,
        delivered:true,
    }
]


console.log('original:', orders)
const rpta=orders.map(element=>element.total)
console.log('original: ', rpta )

rtpa2=orders.map(item=>{
    item.percentajeTax =0.19;
    return item
})
console.log('rpta2', rtpa2)

rpta3=orders.map(object=>{
    const copyObject={
        ...object
    }
    return{
        ...object,
        taxes:0.19*copyObject.total
    }
}
)
console.log('rpta3', rpta3);