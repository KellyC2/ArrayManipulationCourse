const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//El objetivo de este ejercicio es sacar del array de 'products' y pasarlo a mi array de 'myProducts'
const product=products.find(item=>item.id='🍔')
if(product){
    myProducts.push(product)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
/*En este punto hemos logrado copiar el producto que quiero a mi nuevo array pero el objetivo es eliminar el elemento copiado del array original.Para lograr este objetivo existe el metodo .splice(). cambia el contenido de un array removiendo o reemplzando un elemento existente y/añadiendo un nuevo elemento en el lugar.
Para crear un nuevo array con el elemnto removido y reemplazarlo sin mutar el array original usa: toSpliced().
el cual recibe 3 parámetros: la posición desde donde hay que elimnar o remover, cuantas posiciones en adelante hay que borrar( si colocas posición 0 no elimina sino añade )y los valores que va a añadir

splice(start)
splice(start, delateCount)
splice(start, deleteCount, item1)
splice(start, deleteCount,item1,item2)
splice(start, delateCount,item1,item2, .......,itemN)
*/

//Intentemos remover el array copiado
const productIndex=products.findIndex(item=>item.id='🍔')
if (productIndex!==-1) {
    myProducts.push(productIndex) 
    products.splice(products[productIndex],1)
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//EJEMPLO 2: ACTUALIZACIÓN DE MI ARRAY
const productsV2=[
    {title:'Pizza', price:121, id:'🍕'},
    {title:'Burger', price:121, id:'🍔' },
    {title:'Hot cakes', price:121, id:'🥞'}
]

const updates={
    id: '🥞',
    changes:{
        price:200,
        description:'sweet'
    }
}

const productV2Index=productsV2.findIndex(item=>item.id===updates.id)
productsV2[productV2Index]={ 
    ...productsV2[productV2Index],
    ...updates.changes
}
console.log(productsV2);

//RETO 1: COMO eliminarías un elemento sin modificar el array original.
const list = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const withooutBurger=list.filter(item=>item.id != '🍔')
console.log('reto1: ', withooutBurger);


//RETO 2:COMO MODIFICARÍAS UN ARRAY SIN MODIFICAR EL ORIGINAL
const menu=[
    {title:'Pizza', price:121, id:'🍕'},
    {title:'Burger', price:121, id:'🍔' },
    {title:'Hot cakes', price:121, id:'🥞'}
]

const cambios={
    id: '🥞',
    changes:{
        price:200,
        description:'sweet'
    }
}
const newArray=menu.map(item=>(
    item.id===cambios.id?{...item, ...cambios.changes}:item))

console.log('menu', menu);
 console.log('nuevo',newArray);