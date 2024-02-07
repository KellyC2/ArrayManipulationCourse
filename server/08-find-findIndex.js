/**
 .find(): es muy similiar a filter con la excepciòn de que va a retornar un solo objeto y va a ser el primero que coincida con la condiciòn. Filter cumple una funciòn similar pero este retorna un array con todos los objetos que coincidan con la condiciòn. En caso que find no enuentre ningun objeto que coincida devuelve un valor undefined

 Find usualmente nos sirve para trabajar con arreglos  que tienen elementos que no se repiten, por ejemplos arreglos que tengan identificadores de id para sus elementos. 
 */

//Ejemplo con for

const numbers=[1,30,49,29,10,13]

let withFor= undefined
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element===30){
    withFor=element
    break
    }    
}

console.log('withFor', withFor);

//Ejemplo con find
const withFind=numbers.find(number=>number===30)
console.log('withFind', withFind);

//Analicemos otro ejemplo con un arraya de objetos
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const findBurger=products.find(item=>item.id==='🍔')
console.log('findBurger', findBurger);

//Existe otra opciòn para encontrara no el elemento sino la posiciòn y es findIndex().

const findIndexBurguer=products.findIndex(item=>item.id==='🍔')
console.log('findIndexBurguer',findIndexBurguer);
