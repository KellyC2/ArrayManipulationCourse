/*¿Què hace el .map()?
.map() es INMUTABLE por lo tanto no mpodifica el array original, sino que crea uno nuevo con la 'transformaciòn' aplicada. Ademàs, mantienes el mismmpo length que el array original, te devuelve en el nuevo array la  misma cantidad que el array que le aplicaste el mètodo.
*/

const letters=['a','b','c'];

const newArray=letters.map(item=>{
    item +'++'
})

// const newArray=[];
// for(let index=0; index<letters.length; index++){
//     const element=letters[index]
//     newArray.push(element + '++')
// }
console.log('original: '+ letters)
console.log('nuevo array:', newArray)


/* El mètodo join() une todos los elementos de una matriz (o en un objeto similar a una matriz )en una cadena y devuelve esta cadena*/

const elements=['fire', 'air', 'water']
console.log(elements.join())
console.log(elements.join(' '))
console.log(elements.join('-'))