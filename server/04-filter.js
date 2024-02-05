/**
 .filter():Filtra del array original en base a una condición;si cumple la condición se almacenará en el nuevo array asignado, este array puede contener:
        cero coincidencias,
        todas coincidencias y
        algunas coincidencias
 */

const words=['spray', 'limit', 'elite','exuberant']

//Ejemplo con for:
const newArray=[]
for (let index = 0; index < words.length; index++) {
    const element = words[index];  
    if(element.length>=6) {
        newArray.push(element)
    } 
}
console.log(newArray);

//Example using .filter():
const morethansix=words.filter(item=>item.length>=6)
console.log(morethansix);


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
    },
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
]

const delivered=orders.filter(item=>item.delivered)
console.log(delivered);

const deliveredMostThan100=orders.filter(item=>item.delivered&&item.total>=100)
console.log(deliveredMostThan100);

//Hagamos un ejemplo mas complejo: Desarrollemos un buscador que nos permita encontrar a traves de un query.
const search=(query)=>{
    return orders.filter((item)=>{
        return item.customerName.includes(query)
    })
}

console.log(search('cedfc'))